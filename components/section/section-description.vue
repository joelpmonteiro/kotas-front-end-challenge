<template>
  <div class="flex flex-wrap justify-center gap-8">
    <Card
      class="py-[18px] px-[16px] w-4/12 min-h-[220px]"
      style="cursor: pointer"
    >
      <template v-slot:content>
        <CardBody :descrip="'Habilidades'" :pokemonDescription="ability"></CardBody>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { IPokemon } from "~/model/IPokemon";

const prop = defineProps({
  pokemonSelect: {
    type: Object as PropType<IPokemon | undefined>,
    required: true,
  },
});

// toRefs
const { pokemonSelect } = toRefs(prop);

//composables
const { getAbilittyPokemon, ability } = usePokemon();

onMounted(async () => {
  try {
    pokemonSelect.value?.extra.abilities.forEach(async (v) => {
      await getAbilittyPokemon(v.ability.url);
    });
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped></style>
