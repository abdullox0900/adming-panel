import React from "react";

import "./login.scss";
import Container from "../../Components/Container/Container";
import 'animate.css';

export default function login() {
    return (
        <Container>
            <section className="login">

                <form className="login__form">

                    <div className="login__box">
                        <input className="login__input" type="text" placeholder="Login" />
                        <ion-icon name="at-outline"></ion-icon>
                    </div>

                    <div className="login__box">
                        <input className="login__input" type="password" placeholder="Password" />
                        <ion-icon name="lock-closed-outline"></ion-icon>
                    </div>

                    <a aria-label='Davay endi' class='h-button centered' data-text='Login' href='#'>
                        <span>S</span>
                        <span>u</span>
                        <span>b</span>
                        <span>m</span>
                        <span>i</span>
                        <span>t</span>
                    </a>

                </form>

            </section>
        </Container>
    )
}