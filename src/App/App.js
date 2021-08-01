import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Navigation from './common/structure/Navigation';
import Section from './common/styled/Section';
import Starships from './features/Starships';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <main>
        <Section>
          <Starships />
        </Section>
      </main>
    </ThemeProvider>
  );
};

export default App;
