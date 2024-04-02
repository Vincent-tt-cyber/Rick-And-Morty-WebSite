import React from "react";
import Loader from "react-js-loader";

const Loading = () => {
  return (
    <div style={{ width: "100%", height: "100vh" , display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Loader
        type="spinner-cub"
        bgColor={"green"}
        color="green"
        title={"Пожалуйста подождите"}
        size={100}
      />
    </div>
  );
};

export default Loading;
