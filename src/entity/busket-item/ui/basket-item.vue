<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number
})
</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounder-xl gap-4">
    <img class="w-16 h-16" :src="imageUrl" alt="sneakers"/>
    <div class="flex flex-col">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b>{{ price }} $</b>
        <img class="opacity-40 hover:opacity-100 cursor-pointer transition" src="/close.svg" alt="close">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
