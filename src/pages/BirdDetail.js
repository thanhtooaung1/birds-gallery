import React from "react";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";

const BirdDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: bird,
    error,
    isPending,
  } = useFetch("http://localhost:8000/Tbl_Bird/" + id);

  const onDelete = () => {
    fetch("http://localhost:8000/Tbl_Bird/" + id, {
      method: "DELETE",
    }).then((res) => {
      navigate(-1);
    });
  };

  return (
    <div className="container my-5 py-3">
      {bird && (
        <div className="row">
          <div className="col-md-6 pt-5">
            <div className="card p-3">
              <img
                src={require(`../${bird.ImagePath}`)}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6 py-5">
            <h3>
              {bird.BirdMyanmarName}({bird.BirdEnglishName})
            </h3>
            <p className="mt-4">{bird.Description}</p>
            <div className="d-flex mt-5">
              <Link className="btn btn-danger me-3" onClick={onDelete}>
                Delete
              </Link>
              <Link className="btn btn-dark" to="/birds">
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
