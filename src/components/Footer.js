import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="pb-4" />
      <div className="container">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <a className="social-link" href="">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} color="blue" />
          </a>
          <a
            className="social-link"
            href="https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "wikipedia-w"]} color="black" />
          </a>
        </div>
        <p className="text-secondary text-center">
          © All rights reserved by{" "}
          <span style={{ fontWeight: "bold", color: "#3f90ce" }}>
            WordPress River
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
