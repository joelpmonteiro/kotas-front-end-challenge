<template>
  <div class="mb-4" v-if="!route.path.includes('/search')">
    <b>Cód: {{ content }}</b>
  </div>

  <div class="w-full" v-else>
    <div class="text-center mb-3">
      <strong class="">{{ descrip }}</strong>
    </div>

    <ul
      class="flex flex-col gap-0 divide-y divide-slate-200 dark:divide-slate-700 list-none"
    >
      <li class="border-top p-2" v-for="(value,index) in abilities" :key="index" >
        {{ value.effect }}
      </li>

    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { IDescription } from "~/model/IPokemon";

const prop = defineProps({
  content: { type: Number, required: false },
  descrip: { type: String, required: false },
  pokemonDescription: {type:Object as PropType<IDescription[]>, required:false, default:[]}
});

const { content,pokemonDescription } = toRefs(prop);
const route = useRoute();

const abilities = computed(()=>{
  return pokemonDescription.value.filter(v=>v.language.name === 'en')
})
</script>

<style scoped lang="scss">

</style>
