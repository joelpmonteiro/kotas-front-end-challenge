<template>
  <section class="flex flex-wrap justify-center gap-8">
    <Card class="py-[18px] px-[16px] w-4/12 min-h-[220px]" style="cursor: pointer">
      <template v-slot:title>
        <CardTitle :name="pokeSelect.name" :img="pokeSelect.extra?.sprites?.other['official-artwork'].front_default"></CardTitle>
      </template>

      <template v-slot:content>
        <CardBody></CardBody>
      </template>

      <template v-slot:footer>
        <CardFooter :type="pokeSelect.extra.types"></CardFooter>
      </template>
    </Card>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { IPokemon } from '~/model/IPokemon';

defineProps({
  pokeSelect:{type:Object as PropType<IPokemon>, required:true , default:{}}
})
</script>

<style></style>
