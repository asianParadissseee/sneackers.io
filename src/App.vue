<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">+</button>
    <input @input="onChangeValue"/>
  </div>
</template>

<script setup>

import {ref} from "vue";

const count = ref(0)

function onChangeValue(event) {
  count.value = Number(event.target.value)
}

function increment() {
  count.value++
}
</script>

<style lang="scss" scoped>

</style>
