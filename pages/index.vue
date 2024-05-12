<template>
  <div class="lg:container md:mx-auto lg:mx-auto">
    <Search></Search>

    <div class="my-10">
      <span>Pokémons</span>
    </div>

    <Suspense>
      <SectionContent :pokemons="storePokemon.listPokeComputed">
      </SectionContent>
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
    // for (const iterator of allPokemon.value) {
      
    // }

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