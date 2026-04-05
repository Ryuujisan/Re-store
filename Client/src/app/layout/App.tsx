import {useEffect, useState} from "react";
import type {Product} from "../models/product";
import {Catalog} from "../../features/catalog/Catalog.tsx";
import {Box, Container, Typography} from "@mui/material";

function App() {
  const[products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
      fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  },[])
  
  return (
      <Container maxWidth='xl'>
          <Box display='flex' justifyContent='center' gap={3} marginY={3}>
              <Typography variant={'h4'} style={{color:'red'}}>Re-store</Typography>
              
          </Box>
          <Catalog products={products}/>
      </Container>
  )
}

export default App
