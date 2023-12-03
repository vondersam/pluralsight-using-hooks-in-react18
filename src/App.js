import Layout from './components/layout/Layout';
import { ThemeProvider } from './components/themecontexts/themeContext';

const App = ({ url }) => {
  return (
    <ThemeProvider>
      <Layout url={url} />
    </ThemeProvider>
  );
};

export default App;
