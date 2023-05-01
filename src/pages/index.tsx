import { NextPage, GetStaticProps } from 'next';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { ListComponent } from '@/components/ui';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Home">
        <ListComponent pokemons={pokemons} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    '/pokemon?limit=151&offset=0'
  );
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
