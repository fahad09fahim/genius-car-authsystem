import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const nevigate = useNavigate();
  const nevigateToServiceDetail = (id) => {
    nevigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>price:{price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => nevigateToServiceDetail(id)}
        className="btn btn-outline-primary"
      >
        Book {name}
      </button>
    </div>
  );
};

export default Service;
