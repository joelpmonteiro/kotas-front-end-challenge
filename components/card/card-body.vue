<template>
  <div class="mb-4" v-if="!route.path.includes('/search')">
    <span class="text-xs quicksand-bold">Cód: {{ content }}</span>
  </div>

  <div class="w-full" v-else>
    <div class="text-center mb-3">
      <span class="mulish-bold text-sm">{{ descrip }}</span>
    </div>

    <ul
      class="flex flex-col gap-0 divide-y divide-slate-200 dark:divide-slate-700 list-none"
    >
      <li class="border-top p-2 text-color-grey-01" v-for="(value,index) in abilities" :key="index" >
        <div class="mulish-400 text-sm "> {{ value.effect }}</div>
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
.text-color-grey-01{
  color: rgba(97, 97, 97, 1);
}
</style>
