export type IPokemon = {
  name: string;
  url: string;
  extra: {
    id: number;
    sprites: {
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
    abilities: IAbilityPoke[];
    types: ItypesPoke[];
  };
};

export type ItypesPoke = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type IAbilityPoke = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type IDescription = {
  effect: string;
  language: {
    name: string;
    url: string;
  };
};

export type IEffectors = {
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  abilities: IAbilityPoke[];
  types: ItypesPoke[];
};
