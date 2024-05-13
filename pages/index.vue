<template>
  <div class="lg:container md:mx-auto lg:mx-auto">
    <Search class="mb-8 mx-4 lg:mx-auto sm:mx-2 md:mx-2"></Search>

    <div class="hidden sm:flex md:flex my-10 sm:mx-4 md:mx-4">
      <span class="mulish-bold text-sm">Pokémons</span>
    </div>

    <Suspense>
      <LazySectionContent :pokemons="storePokemon.listPokeComputed">
      </LazySectionContent>
      <template #fallback>
        <p style="color: red">Carregando a lista</p>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { usePokemonStore } from "~/store/pokemon-store";

const storePokemon = usePokemonStore();
const { allPokemon, elList } = storeToRefs(
  usePokemonStore()
);




onMounted(() => {
  useInfiniteScroll(
  elList,
  async () => {
    const nextPage = allPokemon.value.length;
    await storePokemon.getPokemons("", nextPage, 24)

  },
  {
    distance: 10,
  }
);
});

// watchEffect(() => {
//   localStorage.setItem(
//     "pokemon",
//     JSON.stringify(storePokemon.listPokeComputed)
//   );
// });
</script>

<style scoped>
.h {
  max-height: 50vh;
}
</style>