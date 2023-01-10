import Menu from "../../Screen/menu/menu";
import TopNavbar from "../../Screen/TopNavbar/TopNavbar";
import "./Home.scss";


function Home() {
    return (
        <section className="home">
            <Menu />
            <TopNavbar />
        </section>
    )
}

export default Home