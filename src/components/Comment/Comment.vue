<template>
  <div>
    <div class="comment-container" :style="indent">
      <div class="comment-header">
        <div class="left-block">
          <span class="toggle" @click="toggleChildren" v-if="!showChildren && nestedComments"
            >[+]</span
          >
          <span class="toggle" @click="toggleChildren" v-else-if="nestedComments">[-]</span>
          <span class="author">{{ comment.author }}</span>
          <span class="state">({{ comment.state }} state)</span>
        </div>
        <span class="date">{{ new Date(comment.createdAt).toLocaleString('ru') }}</span>
      </div>
      <div class="comment-text">
        <p>{{ comment.text }}</p>
      </div>
      <div class="comment-footer">
        <el-button class="ansBtn" type="text" @click="isToCommentForm = true">Reply</el-button>
        <CommentForm
          v-model="isToCommentForm"
          :title="`Reply to ${comment.author}'s comment`"
          :actionFnc="addComment"
          :commentData="{ parentId: comment.id }"
        />
        <div class="control-block">
          <i class="el-icon-edit cntBtn" @click="isEditCommentForm = true"></i>
          <CommentForm
            v-model="isEditCommentForm"
            :title="`Edit ${comment.author} comment`"
            :actionFnc="editComment"
            :commentData="comment"
          />
          <el-popconfirm
            confirmButtonText="OK"
            cancelButtonText="No, Thanks"
            icon="el-icon-info"
            iconColor="red"
            title="Are you sure to delete this?"
            v-on="{ onConfirm }"
          >
            <i class="el-icon-delete cntBtn" slot="reference"></i>
          </el-popconfirm>
        </div>
      </div>
    </div>
    <div v-if="showChildren">
      <comment
        v-for="child in nestedComments"
        :comment="child"
        :nestedComments="child.children"
        :key="child.id"
      >
      </comment>
    </div>
  </div>
</template>

<script>
import CommentForm from '../form/CommentForm';
import { addComment, editComment, deleteComment } from '../../api/comment';

export default {
  props: {
    comment: {
      type: Object,
    },
    nestedComments: {
      type: Array,
    },
  },
  components: {
    CommentForm,
  },
  name: 'comment',
  data() {
    return {
      isToCommentForm: false,
      isEditCommentForm: false,
      showChildren: false,
      windowWidth: 0,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    addComment,
    editComment,
    async onConfirm() {
      await deleteComment(this.comment.id);
      await this.$store.dispatch('fetchComments');
    },
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  computed: {
    indent() {
      let depth = this.comment.hierarchyLevel - 1;
      let marginLeft = depth * 40;
      if (depth >= 1 && this.windowWidth <= 400) marginLeft = 10;
      return {
        marginLeft: marginLeft + 'px',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-container {
  font: 0.625em 'Pt Sans', Arial, sans-serif;
  border: 0.5px solid #ccc;
  padding: 10px;
  max-width: 800px;
  margin-top: 10px;
  .comment-header {
    position: relative;
    .left-block {
      display: flex;
      align-items: center;
      .toggle {
        font-size: 15px;
        vertical-align: baseline;
        cursor: pointer;
      }
      .author {
        display: inline-block;
        font-weight: bold;
        position: relative;
        max-width: 80px;
        font-size: 15px;
        vertical-align: baseline;
        margin-right: 3px;
        white-space: pre-line;
      }
      .state {
        display: inline-block;
        vertical-align: baseline;
        color: #999;
        font-size: 11px;
        margin-left: 10px;
      }
    }

    .date {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      line-height: 1.3;
      font-size: 11px;
      color: #999;
      border-bottom: 1px dotted #ccc;
    }
  }
  .comment-text {
    font-size: 15px;
    line-height: 22px;
    color: #0d0d0d;
    margin: 20px 0 10px 10px;
  }
  .comment-footer {
    position: relative;
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 5px;
    height: 22px;
    .ansBtn {
      margin-left: 15px;
      padding: 8px 0 0 0;
    }
    .control-block {
      display: inline-block;
      position: absolute;
      right: 4px;
      bottom: 0;
      .cntBtn {
        margin-left: 18px;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 500px) {
  .comment-text {
    margin: 10px 0 0 10px !important;
  }
  .comment-container {
    margin-left: 5px;
  }
  .comment-footer {
    margin-top: 3px !important;
  }
  .date {
    font-size: 9px !important;
  }
}
</style>
