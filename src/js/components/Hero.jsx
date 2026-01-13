import React from "react";

const Hero = () => {
    return (
        <section className="bg-light rounded-3 p-5 my-4 mx-4 text-start">
            <h1 className="display-6 fw-bold mb-3">
                Bienvenido a mi react landing
            </h1>

            <p className="lead col-md-9">
                Explora paisajes increíbles y descubre lugares unicos a través de nuestra galeria.
            </p>

            <a href="#" className="btn btn-primary btn-lg">
                Empezar ahora
            </a>
        </section>
    );
};

export default Hero;
