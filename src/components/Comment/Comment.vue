<template>
  <div class="comment-container">
    <div class="comment-header">
      <span class="author">{{ comment.author }}</span>
      <span class="state">({{ comment.state }} state)</span>
      <span class="date">{{ comment.createdAt }}</span>
    </div>
    <div class="comment-text">
      <p>{{ comment.text }}</p>
    </div>
    <div class="comment-footer">
      <el-button class="ansBtn" type="text" @click="isToCommentForm = true">To comment</el-button>
      <CommentForm
        v-model="isToCommentForm"
        :title="`Сomment on ${comment.author}'s comment`"
        :actionFnc="addComment"
      />
      <div class="control-block">
        <i class="el-icon-edit cntBtn"></i>
        <i class="el-icon-delete cntBtn"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { CommentForm } from '../form/CommentForm';
import { addComment } from '../../api/comment';

export default {
  props: {
    comment: {
      type: Object,
    },
  },
  components: {
    CommentForm,
  },
  data() {
    return {
      isToCommentForm: false,
    };
  },
  methods: {
    addComment,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.comment-container {
  font: 0.625em 'Pt Sans', Arial, sans-serif;
  border: 0.5px solid #ccc;
  padding: 10px;
  max-width: 800px;
  .comment-header {
    position: relative;
    .author {
      display: inline-block;
      font-weight: bold;
      position: relative;
      font-size: 15px;
      vertical-align: baseline;
      margin-right: 3px;
      white-space: nowrap;
    }
    .state {
      display: inline-block;
      color: #999;
      font-size: 11px;
      margin-left: 10px;
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
  .comment-footer {
    margin-top: 3px !important;
  }
}
</style>
