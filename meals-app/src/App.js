import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHnadler = () => {
    setCartIsShown(true);
  }

  const hideCartHnadler = () =>{
    setCartIsShown(false);
  }


  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHnadler} />}
    <Header onShowCart={showCartHnadler} />
    <main>
      <Meals />
    </main>
    </CartProvider>
  );
}

export default App;
