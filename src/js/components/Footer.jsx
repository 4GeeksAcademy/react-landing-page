import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-3 mt-5">
            <div className="container text-center">
                <small>
                    © {year} — Todos los derechos reservados
                </small>
            </div>
        </footer>
    );
};

export default Footer;
