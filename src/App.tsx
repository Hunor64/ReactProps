import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div>
      <WelcomeMessage name="Joe"/>
      <UserProfile name="Joe" age={25} />
      <ProductDetails product={{ name: "Laptop", price: 1200, inStock: true }}/>
    </div>
  );
};

export default App;