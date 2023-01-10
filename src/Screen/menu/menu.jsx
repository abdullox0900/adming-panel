// Import React
import React from "react";
import Title from "../../Components/Title/Title";

// Import Pack
import { Segmented } from 'antd';

// Import Components
import "./menu.scss";

function Menu() {
    return (
        <section className="menu">
            <div className="menu-top">
                {/* <img className="menu-top__logo" src="https://logos-marques.com/wp-content/uploads/2021/07/Maestro-logo.png" alt="logo" />
                <div className="menu-top__status">Live</div> */}
            </div>

            <div className="menu-main">
                <div>
                    <input className="menu-main__search" type="text" placeholder="Search..." />
                    <div className="menu-drop">
                        <div className="menu-drop__down"><ion-icon name="home-outline"></ion-icon>Dashboard <ion-icon name="chevron-down-outline"></ion-icon></div>
                        <div className="menu-drop__down"><ion-icon name="albums-outline"></ion-icon>Analytics <ion-icon name="chevron-down-outline"></ion-icon></div>
                        <div className="menu-drop__down"><ion-icon name="bag-outline"></ion-icon>Products <ion-icon name="chevron-down-outline"></ion-icon></div>
                        <div className="menu-drop__down"><ion-icon name="brush-outline"></ion-icon>Published <ion-icon name="chevron-down-outline"></ion-icon></div>
                        <div className="menu-drop__down"><ion-icon name="chatbox-ellipses-outline"></ion-icon>Earnings <ion-icon name="chevron-down-outline"></ion-icon></div>
                        <div className="menu-drop__down"><ion-icon name="cloudy-night-outline"></ion-icon>Payments <ion-icon name="chevron-down-outline"></ion-icon></div>
                        <div className="menu-drop__down"><ion-icon name="color-palette-outline"></ion-icon>Reports <ion-icon name="chevron-down-outline"></ion-icon></div>
                    </div>
                </div>

                <div className="menu-bottom">
                    <div className="menu-drop__down"><ion-icon name="cog-outline"></ion-icon>Setting</div>
                    <div className="menu-drop__down"><ion-icon name="exit-outline"></ion-icon>Dashboard</div>
                    <div className="menu-drop__down-wrap">
                        <Segmented options={['Light Mode', 'Dark Mode']} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Menu