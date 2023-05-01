import React, { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { SmallPokemon } from '@/interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const CardComponent: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <>
      <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
        <Card isHoverable isPressable onClick={() => onClick()}>
          <Card.Body css={{ p: 2, paddingTop: 10 }}>
            <Card.Image src={pokemon.img} width="100%" height={140} />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-around">
              <Text transform="capitalize">{pokemon.name}</Text>
              <Text>{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};
