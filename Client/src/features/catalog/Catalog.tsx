import type {Product} from "../../app/models/product.ts";
import {ProductList} from "./ProductList.tsx";

type Props = {
    products: Product[]
}
export const Catalog = (props: Props) => {
    return (
        <>
            <ProductList products={props.products}/>
        </>
    )
}
