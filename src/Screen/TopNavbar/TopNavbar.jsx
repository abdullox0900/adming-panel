// IMport React
import React from "react";

// IMport Components
import "./TopNavbar.scss";

function TopNavbar() {
    return (
        <section className="top-navbar">
            <div className="top-navbar__box-one">
                <input className="top-navbar__search" type="text" placeholder="Search" />
            </div>

            <div className="top-navbar__wrap">
                <button className="top-navbar__btn"><ion-icon name="mail-outline"></ion-icon></button>
                <button className="top-navbar__btn"><ion-icon name="cog-outline"></ion-icon></button>
                <button className="top-navbar__btn"><ion-icon name="notifications-outline"></ion-icon></button>

                <div className="top-navbar__box">
                    <img className="top-navbar__avatar" src="	https://abdullox.uz/static/media/abdullokh.9a2694a107340341ed16.png" alt="img-avatar" width={50} height={50} />
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
            </div>
        </section>
    )
}

export default TopNavbar