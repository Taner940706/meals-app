import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHnadler = () => {
    setCartIsShown(true);
  }

  const hideCartHnadler = () =>{
    setCartIsShown(false);
  }


  return (
    <>
    {cartIsShown && <Cart onClose={hideCartHnadler} />}
    <Header onShowCart={showCartHnadler} />
    <main>
      <Meals />
    </main>
    </>
  );
}

export default App;
