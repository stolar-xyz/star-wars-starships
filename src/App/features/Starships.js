import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { query } from '../../apiDetails';
import Failure from '../common/structure/Failure';
import Loading from '../common/structure/Loading';
import Tile from '../common/structure/Tile';
import Button from '../common/styled/Button';
import List from '../common/styled/List';
import Subheader from '../common/styled/Subheader';

const Starships = () => {
  const [itemsCount, setItemsCount] = useState(18);

  const starshipsQuery = gql(query);

  const { data, loading, error } = useQuery(starshipsQuery, {
    variables: {
      items: itemsCount,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Failure />;
  }

  const totalItemsCount = data.allStarships.totalCount;

  return (
    <>
      <Subheader>Starships</Subheader>
      <List>
        {data.allStarships.starships.map(
          ({ name, manufacturers, costInCredits, id }) => (
            <Tile
              key={id}
              name={name}
              manufacturers={manufacturers}
              cost={costInCredits}
            />
          )
        )}
      </List>
      {itemsCount !== totalItemsCount && (
        <Button
          loadButton
          onClick={() => {
            setItemsCount(totalItemsCount);
          }}
          title={'Load all'}
        >
          Load all
        </Button>
      )}
    </>
  );
};

export default Starships;
