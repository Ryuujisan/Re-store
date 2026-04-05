import type {Product} from "../../app/models/product.ts";
import {Box} from "@mui/material";
import {ProductCard} from "./ProductCard.tsx";

type Props = {
    products: Product[]
}
export const ProductList = ({products}: Props) => {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap:3, justifyContent:'center'}}>
            {
                products.map(item => <ProductCard key={item.id} product={item}/>)
            }
        </Box>
    )
}
