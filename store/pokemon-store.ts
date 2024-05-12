import { defineStore } from "pinia";
import type { IEffectors, IPokemon, ItypesPoke } from "~/model/IPokemon";

const api = "https://pokeapi.co/api/v2";

export const usePokemonStore = defineStore("pokemon", () => {
  const allPokemon = ref<IPokemon[]>([]);
  const totalExtra = ref<number>(0);
  const effectorsPoke = ref<IEffectors>();
  const typePoek = ref<ItypesPoke>();
  const pokemonSelect = ref<IPokemon>();
  // const offset = ref(0);
  // const limit = ref(24);
  const elList = ref<HTMLElement | null>(null);

  const getPokemons = async (
    search: string | number = "",
    offset: number,
    limit: number
  ) => {
    const firstUrl = search === "" || Number(search) === 0 ? "" : `/${search}`;

    if (offset > totalExtra.value) return;

    $fetch(`${api}/pokemon${firstUrl}?offset=${offset}&limit=${limit}`).then(
      (data: any) => {
        if (firstUrl === "") {
          if (allPokemon.value.length === 1) {
            allPokemon.value = data.results;
          } else {
            allPokemon.value.push(...data.results);

            for (const key in allPokemon.value) {
              console.log(key);
              effectors(allPokemon.value[key].url,Number(key));
              console.log("aaaaaaaaa", effectorsPoke.value);
              //allPokemon.value[key].extra = effectorsPoke.value;
            }
          }
          // soma para proxima request nao dar erro
          totalExtra.value = data.count;
        } else {
          allPokemon.value = [];
          allPokemon.value.push({
            extra: data,
            name: data.name,
            url: `${api}/pokemon/${data.id}/`,
          });
        }
      }
    );
  };

  const listPokeComputed = computed(() => {
    return allPokemon.value.map((v) => v);
  });

  const pokemonDetailsById = (id: number) => {
    if (listPokeComputed.value.length === 0) {
      allPokemon.value = JSON.parse(localStorage.getItem("pokemon") as any);
      //allPokemon.value =
    }
    return allPokemon.value.find((v) => v.extra.id === id);
  };

  const getPokemonDetailsByUrl = async (url: string) => {
    const data: any = await $fetch(url);
    return data;
  };

  const effectors = async (url: string,index:number) => {
    const data: any = await $fetch(url);
    console.log(data)
    effectorsPoke.value = data;
    allPokemon.value[index].extra = data
  };

  const effectorsComput = computed(() => {
    return effectorsPoke.value;
  });

  return {
    getPokemons,
    listPokeComputed,
    getPokemonDetailsByUrl,
    pokemonDetailsById,
    pokemonSelect,
    allPokemon,
    elList,
    // offset,
    // limit,
    effectorsPoke,
    effectors,
    effectorsComput,
  };
});
