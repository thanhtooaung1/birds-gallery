import React from "react";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const BirdDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: bird,
    error,
    isPending,
  } = useFetch("https://birds-json-server.vercel.app/Tbl_Bird/" + id);

  const onDelete = () => {
    if (!window.confirm("Are you sure to delete this image?")) return;
    fetch("https://birds-json-server.vercel.app/Tbl_Bird/" + id, {
      method: "DELETE",
    }).then((res) => {
      navigate(-1);
    });
  };

  return (
    <div className="container my-3">
      {isPending && <Loading />}
      {error && <div>{error}</div>}
      {bird && (
        <div className="row pb-5">
          <div className="col-md-6 pt-5">
            <div
              className="card p-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={require(`../${bird.ImagePath}`)}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6 py-5">
            <h3 data-aos="fade-up" data-aos-duration="1200">
              {bird.BirdMyanmarName}({bird.BirdEnglishName})
            </h3>
            <p className="mt-4" data-aos="fade-up" data-aos-duration="1400">
              {bird.Description}
            </p>
            <div className="d-flex mt-5">
              <Link
                className="btn btn-danger me-3"
                onClick={onDelete}
                data-aos="zoom-in"
                data-aos-duration="1400"
              >
                Delete
              </Link>
              <Link
                className="btn btn-dark"
                to="/birds"
                data-aos="zoom-in"
                data-aos-duration="1600"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirdDetail;
