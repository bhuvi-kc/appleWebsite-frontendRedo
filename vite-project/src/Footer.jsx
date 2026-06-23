import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2>NOIRE</h2>
                    <p>Haute couture and ready-to-wear, crafted in Paris since 1987. Worn by those who need no introduction.</p>
                </div>

                <div className="footer-col">
                    <h6>COLLECTIONS</h6>
                    <p>Autumn / Winter 2026</p>
                    <p>Bridal Atelier</p>
                    <p>Men's Line</p>
                    <p>Accessories</p>
                </div>

                <div className="footer-col">
                    <h6>MAISON</h6>
                    <p>Our Heritage</p>
                    <p>Artisans</p>
                    <p>Sustainability</p>
                    <p>Careers</p>
                </div>

                <div className="footer-col">
                    <h6>SERVICES</h6>
                    <p>Private Fittings</p>
                    <p>Bespoke Orders</p>
                    <p>Global Shipping</p>
                    <p>Contact</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Maison Noire. All rights reserved.</p>
                <p>Privacy · Terms · Cookies</p>
            </div>
        </div>
    )
}

export default Footer