<template>
  <div class="form_container">
    <el-form :model="formInline">
      <el-form-item label="vue input">
        <el-input v-model="formInline.input" placeholder=""></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">click</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
export default {
    data() {
      return {
        formInline: {
          input: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.formInline.input);
      }
    }
  }
</script>

<style scoped>
.form_container {
  width: 300px;
}
</style>