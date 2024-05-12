<template>
  <div class="flex justify-center mx-auto">
    <input
      v-model="search"
      @change.prevent="fnSearch"
      class="rounded-[50px] px-5 p-2 w-full"
      type="text"
      name="pesquisa"
      placeholder="Pesquise por nome ou código"
    />
  </div>
</template>

<script lang="ts" setup>
import { usePokemonStore } from "~/store/pokemon-store";

const search = ref<number | string>("");

const storePoke = usePokemonStore();
const { limit, offset } = storeToRefs(usePokemonStore());
const fnSearch = async () => {
  try {
    // if(search.value)
    limit.value = 24;
    offset.value = 0;
    await storePoke.getPokemons(
      isNaN(Number(search.value)) ? search.value : Number(search.value)
    );
  } catch (error) {
    console.log('asdasdas')
    console.log(error);
  }
};
</script>

<style></style>
