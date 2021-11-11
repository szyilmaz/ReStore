import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
    }, []); //dependency, boş array 1 kereç çalışsın demek,  hiç koymazsan sonsuz çalışır
  
    return (
        <>
            <ProductList products={products} />
        </>
    )
}