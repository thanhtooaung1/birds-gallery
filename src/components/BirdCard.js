import React from "react";
import { Link } from "react-router-dom";

const BirdCard = ({ bird }) => {
  return (
    <div className="col">
      <Link className="link" to={`/birds/${bird.id}`}>
        <div className="card">
          <img
            src={require(`../${bird.ImagePath}`)}
            className="card-img-top bird-image"
            height={200}
            style={{ objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{bird.BirdEnglishName}</h5>
            <p className="card-text">{bird.BirdMyanmarName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BirdCard;
