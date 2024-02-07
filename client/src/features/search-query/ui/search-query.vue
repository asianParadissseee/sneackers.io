<template>
  <div>
    <Input :on-change-input="onChangeInput" :placeholder="'Поиск...'"/>
  </div>
</template>

<script setup>

import {Input} from "@/shared/ui/input";
import {defineProps} from "vue"
defineProps({
  onChangeInput: Function
})

</script>

<style lang="scss" scoped>

</style>
