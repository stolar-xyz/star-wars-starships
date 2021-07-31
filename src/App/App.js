import Navigation from './common/structure/Navigation';
import Tile from './common/structure/Tile';
import Subheader from './common/styled/Subheader';
import List from './common/styled/List';
import Section from './common/styled/Section';

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Section>
          <Subheader>Starships</Subheader>
          <List>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </List>
        </Section>
      </main>
    </>
  );
};

export default App;
