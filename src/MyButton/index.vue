<template>
  <Flex gap="middle">
    <Button>Hello {{ props.title }}</Button>
    <InputSearch placeholder="请输入搜索内容" enter-button />
  </Flex>
</template>

<script setup lang='ts'>
import { Button, Flex, InputSearch } from 'ant-design-vue';
// 使用defineProps来定义组件属性
const props = defineProps<{
  /**
   * 按钮标题
   */
  title: string;
}>()
</script>
