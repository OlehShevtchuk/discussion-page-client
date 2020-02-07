<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    :before-close="handleClose"
    :width="getWindowWidth() < 500 ? '90%' : '60%'"
  >
    <el-form class="form" ref="form" :model="form" label-width="80px" @submit.native.prevent>
      <el-form-item label="Your name">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="Comment">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="Please enter your comment"
          v-model="form.text"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="State">
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
        author: this.commentData ? this.commentData.name : '',
        text: this.commentData ? this.commentData.comment : '',
        state: this.commentData ? this.commentData.state : '',
        parentId: this.commentData ? this.commentData.parentId : null,
      },
    };
  },
  methods: {
    async onSubmit() {
      this.$emit('changeVisibility', false);
      await this.actionFnc(this.form);
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
