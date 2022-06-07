import { Route } from 'wouter';

import Header from './components/Header';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import ComicPage from './pages/ComicPage';

import { PrincipalContainer } from './styles/LayoutStyles';

function App() {

  return (
    <PrincipalContainer>
      <Header />
      <Menu />

      <Route path="/" component={HomePage}></Route>
      <Route path="/comic/:id" component={ComicPage}></Route>
    </PrincipalContainer>
  )
}

export default App;
