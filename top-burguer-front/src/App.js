
import './App.css';
import About from './Components/About';
import Header from './Components/Header'
import ProductGrid from './Components/ProductsGrid'
import ProductCard from './Components/ProductCard';

function App() {  
  return (
    <div className="App">
      <header className="App-header">  
      <Header></Header>
        <About></About>         
        <ProductGrid></ProductGrid>
        <ProductCard></ProductCard>        
      </header>
    </div>
  );
}

export default App;
