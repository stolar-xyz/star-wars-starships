import Navigation from './common/structure/Navigation';
import Section from './common/styled/Section';
import Starships from './features/Starships';

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Section>
          <Starships />
        </Section>
      </main>
    </>
  );
};

export default App;
