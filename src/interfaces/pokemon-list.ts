export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  map(
    arg0: ({ id, name }: { id: any; name: any }) => JSX.Element
  ): import('react').ReactNode;
  name: string;
  url: string;
  img: string;
  id: number;
}
