<template>
  <div>
    <el-button type="">click</el-button>
    <SimpleForm />
  </div>
</template>

<script lang="ts">
import { Button, Input } from 'antd';
import { ReactInVue, VueInReact } from 'vuera';
import { SimpleForm} from "react-components";

export default {
  components: {
    SimpleForm: ReactInVue(SimpleForm)
  }
}

</script>

<style scoped>

</style>