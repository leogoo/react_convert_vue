<template>
  <div>
    <h1>vue项目内组件</h1>
    <!-- <MyForm /> -->
    <h1>react组件库内组件</h1>
    <SimpleForm />
  </div>
</template>

<script>
import MyForm from './components/MyForm.vue';
import { SimpleForm } from 'react-components';

export default {
    components: {
      components: {
        MyForm,
      }
    }
  }
</script>

<style scoped>
</style>