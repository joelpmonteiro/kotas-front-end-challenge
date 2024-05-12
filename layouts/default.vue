<template>
  <HeaderTheHeader></HeaderTheHeader>
  <div class="">
    <main ref="elList"
      class="max-h-c overflow-auto max-w-none prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400"
    >
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { usePokemonStore } from "~/store/pokemon-store";

const { elList } = storeToRefs(usePokemonStore());
</script>

<style scoped>

</style>
