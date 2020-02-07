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
  </div>
</template>

<script>
import CommentForm from '../../components/form/CommentForm';
import { addComment } from '../../api/comment';

export default {
  components: {
    CommentForm,
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
@media (max-width: 500px) {
  .addBtn {
    width: 40px;
    height: 40px;
  }
}
</style>
