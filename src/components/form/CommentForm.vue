<template>
  <el-form class="form" ref="form" :model="form" label-width="80px" @submit.native.prevent>
    <el-form-item label="Your name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Comment">
      <el-input
        type="textarea"
        :rows="5"
        placeholder="Please enter your comment"
        v-model="form.comment"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="State">
      <el-radio-group v-model="form.state">
        <el-radio label="Positive"></el-radio>
        <el-radio label="Negative"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item style="text-align: right;">
      <el-button class="btn" type="primary" @click="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    commentData: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        name: this.commentData ? this.commentData.name : '',
        comment: this.commentData ? this.commentData.comment : '',
        state: this.commentData ? this.commentData.state : '',
        parentId: this.commentData ? this.commentData.parentId : '',
      },
    };
  },
  methods: {
    async onSubmit() {
      //await addComment(this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  height: 100%;
  max-width: 700px;
  margin: 20px auto;
  .btn {
    width: 30%;
    min-width: 90px;
  }
}
</style>
