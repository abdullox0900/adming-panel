// IMport React
import React from "react";

// IMport Components
import "./TopNavbar.scss";

function TopNavbar() {
    return(
        <section className="top-navbar">
            <input className="top-navbar__search" type="text" placeholder="Search" />

            <div className="top-navbar__wrap">
                <button className="top-navbar__btn">setting</button>
                <button className="top-navbar__btn">setting</button>
                <button className="top-navbar__btn">setting</button>

                <img className="top-navbar__avatar" src="" alt="img-avatar" />
            </div>
        </section>
    )
}

export default TopNavbar