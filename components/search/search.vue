<template>
  <div class="flex justify-center mx-auto">
    <input
      v-model="search"
      @change.prevent="fnSearch"
      class="mulish-400 text-sm text- rounded-[50px] px-5 p-2 w-full"
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
const fnSearch = async () => {
  try {
    // if(search.value)

    await storePoke.getPokemons(
      isNaN(Number(search.value)) ? search.value : Number(search.value),0, 24
    );
  } catch (error) {
    console.log('asdasdas')
    console.log(error);
  }
};
</script>

<style></style>
