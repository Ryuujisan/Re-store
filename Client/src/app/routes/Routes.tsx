import { createBrowserRouter } from "react-router-dom";
import {HomePage} from "../../features/home/HomePage.tsx";
import App from "../layout/App.tsx";
import {AboutPage} from "../../features/about/AboutPage.tsx";
import {ProductDetails} from "../../features/catalog/ProductDetails.tsx";
import {ContactPage} from "../../features/contact/ContactPage.tsx";
import {Catalog} from "../../features/catalog/Catalog.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '/catalog', element: <Catalog/> },
            { path: '/catalog/:id', element: <ProductDetails /> },
            { path: '/about', element: <AboutPage/>},
            { path: '/contact', element: <ContactPage />}
        ]
    },
],);