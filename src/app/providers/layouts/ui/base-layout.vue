<template>
  <Navbar/>
  <div class="flex">
    <Sidebar/>
    <slot></slot>
  </div>
</template>

<script setup>
import {Navbar} from "@/widgets/navbar/index.js";
import {Sidebar} from "@/widgets/sidebar/index.js";
</script>

<style scoped>

</style>
