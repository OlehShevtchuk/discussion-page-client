<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    :before-close="handleClose"
    :width="getWindowWidth() < 500 ? '90%' : '60%'"
  >
    <el-form
      class="form"
      :rules="rules"
      ref="form"
      :model="form"
      label-width="80px"
      label-position="top"
      @submit.native.prevent
    >
      <el-form-item label="Your name" prop="author">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="Comment" prop="text">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="Please enter your comment"
          v-model="form.text"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="State" prop="state">
        <el-radio-group v-model="form.state">
          <el-radio label="positive"></el-radio>
          <el-radio label="negative"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item style="text-align: right;">
        <el-button class="btn" type="primary" @click="onSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  model: {
    prop: 'visible',
    event: 'changeVisibility',
  },
  props: {
    commentData: {
      type: Object,
    },
    title: {
      type: String,
    },
    visible: {
      type: Boolean,
    },
    actionFnc: {
      type: Function,
    },
  },
  data() {
    return {
      form: {
        id: this.commentData && 'id' in this.commentData ? this.commentData.id : null,
        author: this.commentData && 'author' in this.commentData ? this.commentData.author : '',
        text: this.commentData && 'text' in this.commentData ? this.commentData.text : '',
        state: this.commentData && 'state' in this.commentData ? this.commentData.state : '',
        parentId:
          this.commentData && 'parentId' in this.commentData ? this.commentData.parentId : null,
      },
      rules: {
        author: [
          { required: true, message: 'Please input your name', trigger: 'blur' },
          { min: 3, max: 20, message: 'Length should be 3 to 30', trigger: 'blur' },
        ],
        text: [{ required: true, message: 'Please input comment', trigger: 'blur' }],
        state: [{ required: true, message: 'Please check state', trigger: 'change' }],
      },
    };
  },
  methods: {
    async onSubmit() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          this.$emit('changeVisibility', false);
          await this.actionFnc(this.form);
          await this.$store.dispatch('fetchComments');
          this.form = {};
        }
      });
    },
    handleClose() {
      this.$emit('changeVisibility', false);
    },
    getWindowWidth() {
      return window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-dialog {
  min-width: 50%;
}
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
