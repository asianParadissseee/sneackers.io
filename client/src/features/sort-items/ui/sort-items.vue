<template>
  <div>
    <Select :on-change="onChangeSelect" :options="options"/>
  </div>
</template>

<script setup>

import {Select} from "@/shared/ui/select";
import {defineProps} from "vue"

 defineProps({
  value: String,
  onChangeSelect: Function
})

const options = [
  {
    option: "По названию",
    value: "name"
  },
  {
    option: "По цене (дешевые)",
    value: "price"
  },
  {
    option: "По цене (дорогие)",
    value: "-price"
  }
]
</script>

<style lang="scss" scoped>

</style>
