import type { IDescription } from "~/model/IPokemon";

//const api = 'https://pokeapi.co/api/v2';
export const usePokemon = () => {
  const ability = ref<Array<IDescription>>([]);
  const getAbilittyPokemon = async (url: string) => {
    const data: { effect_entries: Array<IDescription> } = await $fetch(url);
    ability.value.push(...data.effect_entries);

    return data;
  };

  return { getAbilittyPokemon,ability };
};
