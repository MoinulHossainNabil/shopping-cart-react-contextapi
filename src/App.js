import Main from './pages/Main';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' render={(props) => <Main {...props} />} />
      <Route exact path='/cart' render={(props) => <Cart {...props} />} />
    </Switch>
    </>   
  );
}

export default App;
