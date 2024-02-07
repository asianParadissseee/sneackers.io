<template>
  <div class="bg-white w-4/5 h-full rounded-xl m-auto shadow-xl mt-14">
    <base-layout>
      <div class="p-10">
        <div class="flex justify-between items-center p-10">
          <Title :bold="true" :margin-bottom="8">
            Все кроссовки
          </Title>
          <div class="flex  gap-3">
            <Select/>
            <Input :placeholder="'Поиск...'"/>
          </div>
        </div>
        <CardList :items="items"/>
      </div>
    </base-layout>
  </div>
</template>

<script setup>
import {BaseLayout} from "./providers/layouts/index.js";
import {Title} from "@/shared/ui/title/index.js";
import {CardList} from "@/widgets/card-list/index.js";
import {Input} from "@/shared/ui/input/index.js";
import {Select} from "@/shared/ui/select/index.js";
import {onMounted, ref} from "vue";

const items = ref([])

onMounted()


</script>

<style scoped>

</style>
