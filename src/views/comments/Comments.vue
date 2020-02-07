<template>
  <div class="">
    <el-popover
      placement="top-start"
      width="210"
      trigger="hover"
      content="Click to open a dialog to add a new comment"
    >
      <el-button
        type="primary"
        icon="el-icon-plus"
        circle
        @click="isCommentForm = true"
        slot="reference"
        class="addBtn"
      ></el-button>
    </el-popover>
    <CommentForm v-model="isCommentForm" title="Add a comment" :actionFnc="addComment" />
    <div class="comment-block">
      <Comment
        :comment="{
          id: 10,
          author: 'Oleh',
          state: 'positive',
          text:
            'hello friend hello friend hello friend hello friend hello friend hello friend hello friends hello friend hello friend hello friend hello friend',
          createdAt: '2020.02.07 16:22',
          parentId: 4,
        }"
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
  methods: {
    addComment,
  },
};
</script>

<style lang="scss" scoped>
.addBtn {
  width: 60px;
  height: 60px;
  margin-left: 5%;
}
.comment-block {
  margin-top: 40px;
  margin-left: 7%;
}
@media (max-width: 500px) {
  .addBtn {
    width: 40px;
    height: 40px;
  }
}
</style>
