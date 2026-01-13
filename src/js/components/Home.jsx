import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cardData = [
    {
        image: "https://picsum.photos/id/10/400/300",
        title: "Parque Natural",
        description: "Un espacio verde ideal para desconectar."
    },
    {
        image: "https://picsum.photos/id/17/400/300",
        title: "Sendero",
        description: "Caminos rodeados de naturaleza."
    },
    {
        image: "https://picsum.photos/id/28/400/300",
        title: "Bosque",
        description: "Paisajes frondosos y tranquilos."
    },
    {
        image: "https://picsum.photos/id/54/400/300",
        title: "Montaña",
        description: "Vistas impresionantes desde lo alto."
    }
];

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <main className="container my-5">
                <div className="row g-4">
                    {cardData.map((card, i) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={i}>
                            <Card
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Home;
