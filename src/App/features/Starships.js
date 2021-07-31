import Tile from '../common/structure/Tile';
import List from '../common/styled/List';
import Section from '../common/styled/Section';
import Subheader from '../common/styled/Subheader';

const Starships = () => {
  return (
    <Section>
      <Subheader>Starships</Subheader>
      <List>
        <Tile />
      </List>
    </Section>
  );
};

export default Starships;
