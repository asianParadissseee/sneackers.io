<template>
  <h3 :class="[bold ? 'text-slate-500' : 'text-black', 'font-bold', 'text-xl', 'mt-' + marginTop, 'mb-' + marginBottom, 'ml-' + marginLeft, 'mr-' + marginRight]">
    <slot></slot>
  </h3>
</template>


<script setup>
import {ref} from "vue"

defineProps({
  bold: Boolean,
  marginTop: Number,
  marginBottom: Number,
  marginLeft: Number,
  marginRight: Number
})
const bold = ref(false)
const marginTop = ref(0)
const marginBottom = ref(0)
const marginLeft = ref(0)
const marginRight = ref(0)

</script>

<style lang="scss" scoped>

</style>
