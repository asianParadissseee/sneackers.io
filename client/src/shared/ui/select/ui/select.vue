<template>
  <select @change="onChange" class="px-3 py-2 border rounded-md outline-none text-slate-400">
    <option v-for="(option, id) in options" :key="id" :value="option.value">{{ option.option }}</option>
  </select>
</template>

<script setup>


defineProps({
  options: Object,
  onChange: Function
})

</script>

<style lang="scss" scoped>

</style>
