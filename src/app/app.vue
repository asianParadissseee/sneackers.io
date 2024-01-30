<template>
  <div class="bg-white w-4/5 h-full rounded-xl m-auto shadow-xl mt-14">
    <base-layout>
      <div class="p-10">
        <Title :bold="true" :margin-bottom="8">
          Все кроссовки
        </Title>
        <CardList/>
      </div>
    </base-layout>
  </div>
</template>

<script setup>
import {BaseLayout} from "./providers/layouts/index.js";
import {Title} from "@/shared/ui/title/index.js";
import {CardList} from "@/widgets/card-list/index.js";
</script>

<style scoped>

</style>
