import React from "react";

const CreatorCard = ({ creator }) => {
  //   console.log(creator);
  return (
    <div className="card-main">
      <div className="main-content">
        <h1 className="name">{creator.name}</h1>
        <button>Contanct</button>
      </div>
    </div>
  );
};

export default CreatorCard;
