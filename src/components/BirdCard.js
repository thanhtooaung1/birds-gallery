import React from "react";
import { Link } from "react-router-dom";

const BirdCard = ({ bird }) => {
  return (
    <div className="col" data-aos="zoom-in" data-aos-duration="1000">
      <Link className="link" to={`/birds/${bird.id}`}>
        <div className="card bird-card">
          <div className="image-card" style={{ height: 200 }}>
            <img
              src={require(`../${bird.ImagePath}`)}
              className="card-img-top"
              height={200}
              style={{ objectFit: "cover" }}
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{bird.BirdMyanmarName}</h5>
            <p className="card-text">{bird.BirdEnglishName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BirdCard;
