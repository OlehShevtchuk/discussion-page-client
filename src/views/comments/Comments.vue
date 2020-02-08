<template>
  <div class="">
    <div class="new-comment">
      <h3>Add a new comment</h3>
      <el-popover
        placement="top-start"
        width="210"
        trigger="hover"
        content="Click to open a dialog to add a new comment"
      >
        <el-button
          type="primary"
          icon="el-icon-plus"
          
          @click="isCommentForm = true"
          slot="reference"
          class="addBtn"
        ></el-button>

      </el-popover>
    </div>

    <CommentForm v-model="isCommentForm" title="Add a comment" :actionFnc="addComment" />
    <div class="comment-block">
      <!-- <Comment
        :comment="{
          id: 10,
          author: 'Oleh',
          state: 'positive',
          text:
            'hello friend hello friend hello friend hello friend hello friend hello friend hello friends hello friend hello friend hello friend hello friend',
          createdAt: '2020.02.07 16:22',
          parentId: 4,
        }"
      /> -->
      <Comment
        v-for="comment in commentsData"
        :key="comment.id"
        :comment="comment"
        :nestedComments="comment.children"
      />
    </div>
  </div>
</template>

<script>
import CommentForm from '../../components/form/CommentForm';
import Comment from '../../components/Comment/Comment';
import { addComment } from '../../api/comment';

export default {
  components: {
    CommentForm,
    Comment,
  },
  data() {
    return {
      isCommentForm: false,
    };
  },
  async mounted() {
    await this.$store.dispatch('fetchComments');
  },
  methods: {
    addComment,
  },
  computed: {
    commentsData() {
      return this.$store.getters.comments;
    },
  },
};
</script>

<style lang="scss" scoped>
.addBtn {
  margin-left: 10px;
}
.comment-block {
  margin-top: 40px;
  margin-left: 7%;
}
.new-comment {
  h3 {
    display: inline-block;
  }
}
@media (max-width: 500px) {
  .comment-block {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
