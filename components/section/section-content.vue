<template>
  <section
    :class="{ 'w-1/6': pokemons.length === 1 }"
    class="flex flex-wrap lg:justify-center mx-4 lg:mx-0 gap-5 md:gap-10 lg:gap-10 mb-5"
  >
    <LazyCard
      class="flex-2 py-[18px] px-[10px] md:max-w-full lg:w-full min-w-[152px] lg:min-w-[152px] min-h-[190px]"
      style="cursor: pointer"
      @click.prevent="redirect(index)"
      v-for="(value, index) in pokemons"
      :key="index"
    >
      <template v-slot:title>
        <!--value.extra?.sprites?.other['official-artwork'].front_default-->
        <CardTitle
          :name="value.name"
          :img="value.extra?.sprites.other['official-artwork'].front_default"
        ></CardTitle>
      </template>

      <template v-slot:content>
        <CardBody
          :content="value.extra?.id !== undefined ? value.extra?.id : 0"
        ></CardBody>
      </template>

      <template v-slot:footer>
        <CardFooter
          :type="value.extra?.types !== undefined ? value.extra?.types : []"
        ></CardFooter>
      </template>
    </LazyCard>
  </section>
</template>

<script lang="ts" setup>
import { type PropType } from "vue";
import type { IEffectors, IPokemon } from "~/model/IPokemon";
import { usePokemonStore } from "~/store/pokemon-store";

const prop = defineProps({
  pokemons: { type: Array as PropType<any[]>, required: true },
});

const { pokemons } = toRefs(prop);
const router = useRouter();

const { elList, effectorsComput } = storeToRefs(usePokemonStore());


const poke = computed(() => {
  return pokemons.value;
});


const redirect = (index: number) => {
  const { id } = pokemons.value[index].extra;
  console.log(id);
  router.push({
    path: `search/${id}`,
  });
};

</script>

<style></style>
