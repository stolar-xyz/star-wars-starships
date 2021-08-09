import { gql, useQuery } from '@apollo/client';
import { query } from '../../apiDetails';
import Failure from '../common/structure/Failure';
import Loading from '../common/structure/Loading';
import Tile from '../common/structure/Tile';
import List from '../common/styled/List';
import Subheader from '../common/styled/Subheader';

const Starships = () => {
  const starshipsQuery = gql(query);

  const { data, loading, error } = useQuery(starshipsQuery, {
    variables: {
      items: 36,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Failure />;
  }

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
    </>
  );
};

export default Starships;
