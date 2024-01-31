<template>
  <select class="px-3 py-2 border rounded-md outline-none text-slate-400">
    <option v-for="(option, id) in options" :key="id">{{ option }}</option>
  </select>
</template>

<script setup>

const options = [
  "По названию",
  "По цене (дешевые)",
  "По цене (дорогие)",
]

</script>

<style lang="scss" scoped>

</style>
