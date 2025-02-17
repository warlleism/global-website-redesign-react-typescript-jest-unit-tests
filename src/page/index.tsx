import Brands from "../components/brands/brands";
import Footer from "../components/footer/footer";
import History from "../components/history/history";
import Home from "../components/home/home";
import Produtcs from "../components/products/products";
import Solutions from "../components/solutions/solution";

export default function Index() {
    return (
        <div className="flex flex-col">
            <Home />
            <Solutions />
            <History />
            <Produtcs />
            <Brands />
            <Footer />
        </div>
    )
}