<template>
  <footer class="w-full">
    <div class="flex gap-2 justify-center">
      <a
        class="mulish-600 content-center text-font-w p-1 w-[64px] leading-font-w text-center uppercase min-h-[16px] text-white rounded-3xl"
        v-for="(val, index) in typeComp"
        :class="['bug','fighting','psychic','steel','rock','ice','ghost'].includes(val.type.name) ? 'default': val.type.name "
        :key="index"
        style="cursor: pointer"
      >
        {{ val.type.name }}
      </a>
      <!-- <a style="cursor: pointer;" class="text-center uppercase w-full min-h-[16px] text-white rounded-3xl" :class="'color-2'">poison</a> -->
    </div>
  </footer>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { ItypesPoke } from "~/model/IPokemon";

const prop = defineProps({
  type: { type: Array as PropType<ItypesPoke[]>, required: true },
});

const { type } = toRefs(prop);

const typeComp = computed(() => {
  return type.value;
});
</script>

<style></style>
