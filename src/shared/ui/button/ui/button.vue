/////
<template>
  <button disabled="disabled" :class="[
    'rounded-3xl',
    'w-full',
    'text-white',
    'font-bold',
    'bg-lime-500',
    'flex',
    'items-center',
    'justify-center',
    'gap-3',
    'hover:bg-lime-600 transition',
    'active:bg-lime-700',
    'disabled:bg-slate-400',
    'cursor-pointer',
    padding ? 'px-9 py-3' : 'px-5 py-3',
  ]">
    <img v-if="leftIcon" src="/arrow-next.svg" alt="arrow">
    <slot></slot>
    <img v-if="rightIcon" src="/arrow-next.svg" alt="arrow">
  </button>
</template>

<script setup>
defineProps({
  padding: Boolean,
  leftIcon: Boolean,
  rightIcon: Boolean,
  disabled: Boolean
})

</script>

<style lang="scss" scoped>

</style>
