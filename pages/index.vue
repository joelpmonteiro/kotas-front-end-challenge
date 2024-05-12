<template>
  <div class="lg:container md:mx-auto lg:mx-auto">
    <Search class="mb-8 mx-4 lg:mx-auto"></Search>

    <div class="hidden sm:flex md:flex my-10">
      <span>Pokémons</span>
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
import type { IEffectors } from "~/model/IPokemon";
import { usePokemonStore } from "~/store/pokemon-store";

const storePokemon = usePokemonStore();
const { listPokeComputed, allPokemon, effectorsPoke, elList } = storeToRefs(
  usePokemonStore()
);


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

onMounted(() => {
  // storePokemon.getPokemons("", 0, 5).then(async () => {
  //   listPokeComputed.value.forEach(async (v, index) => {
  //     await storePokemon.effectors(v.url);
  //     allPokemon.value[index].extra = { ...effectorsPoke.value } as IEffectors;
  //   });
  // });
});

watchEffect(() => {
  // localStorage.setItem(
  //   "pokemon",
  //   JSON.stringify(storePokemon.listPokeComputed)
  // );
});
</script>

<style scoped>
.h {
  max-height: 50vh;
}
</style>