import React from "react";

const Card = ({ image, title, description }) => {
    return (
        <div className="card shadow-sm h-100">
            <div className="overflow-hidden" style={{ height: "180px" }}>
                <img
                    src={image}
                    alt={title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="card-body d-flex flex-column">
                <h5 className="fw-semibold">{title}</h5>
                <p className="text-muted flex-grow-1">
                    {description}
                </p>

                <button className="btn btn-outline-primary mt-auto">
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default Card;
