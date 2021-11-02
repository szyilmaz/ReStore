import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []); //dependency, boş array 1 kereç çalışsın demek,  hiç koymazsan sonsuz çalışır

  function addProduct() {
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'product' + (prevState.length+1),
      price : 100,
      brand: 'some brand',
      description: 'some desc',
      pictureUrl: 'http://picsum.photos/200'
    }])
  }
  return (
    <>
     <Typography variant="h1">Re-Store</Typography>
     <Catalog products={products} addProduct={addProduct} />
    </>
  );
}

export default App;