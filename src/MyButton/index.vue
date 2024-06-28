<template>
  <el-Button>{{ props.title }}</el-Button>
</template>

<script setup lang='ts'>
import { ElButton } from 'element-plus'
// 使用defineProps来定义组件属性
const props = defineProps<{
  /**
   * 按钮标题
   */
  title: string;
}>()
</script>
