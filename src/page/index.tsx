import Brands from "../components/brands/brands";
import History from "../components/history/history";
import Home from "../components/home/home";
import Produtcs from "../components/products/products";
import Solutions from "../components/solutions/solution";

export default function Index() {
    return (
        <>
            <Home />
            <Solutions />
            <History />
            <Produtcs />
            <Brands />
        </>
    )
}