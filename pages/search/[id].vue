import { NuxtLink } from '../../.nuxt/components';
<template>
  <div class="flex flex-col gap-10 mt-4">
    <SectionSearch :pokeSelect="pokeByRouter" class=""></SectionSearch>

    <SectionDescription :pokemonSelect="pokeSelect"></SectionDescription>
    <div class="text-center">
      <NuxtLink href="/" class="mulish-bold text-sm text-link-a"
        >Voltar</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IPokemon } from '~/model/IPokemon';
import { usePokemonStore } from '~/store/pokemon-store';

const route = useRoute();
const pokemonStore = usePokemonStore();

const pokeByRouter = ref<IPokemon>()
const pokeSelect = computed(()=>pokeByRouter.value)
pokeByRouter.value = pokemonStore.pokemonDetailsById(Number(route.params.id))

</script>

<style></style>
