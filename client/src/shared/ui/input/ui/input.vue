<template>
  <div class="relative">
    <div class="absolute left-3  top-3">
      <img src="/search.svg" alt="search"/>
    </div>
    <input :value="value" :placeholder="placeholder"
           class="border border-gray-200 rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400"
           type="text"
           @change="onChangeInput"
    />
  </div>
</template>

<script setup>
defineProps({
  value: String,
  placeholder: String,
  onChangeInput: Function
})
</script>

<style lang="scss" scoped>

</style>
