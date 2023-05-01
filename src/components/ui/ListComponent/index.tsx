import React, { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { CardComponent } from '@/components/ui';
import { SmallPokemon } from '@/interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

export const ListComponent: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <CardComponent key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};
