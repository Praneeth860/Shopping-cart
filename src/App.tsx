import Navbar from "./components/NavBar";
import Routes from "./components/Routes";
import { CartProvider } from "./context/cartContext";
const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes />
      </CartProvider>
    </>
  );
};

export default App;
