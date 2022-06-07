import './App.css';
import { Route } from 'wouter';

import Header from './components/Header';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import ComicPage from './pages/ComicPage';

function App() {

  return (
    <div className="App">
      <Header />
      <Menu />

      <Route path="/" component={HomePage}></Route>
      <Route path="/comic/:id" component={ComicPage}></Route>
    </div>
  )
}

export default App;
