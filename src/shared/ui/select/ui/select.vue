<template>
  <select>
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
