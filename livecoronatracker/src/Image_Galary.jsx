import React from "react";
import datas from "./data";
import Card from "./Card";
function image_Galary() {
  return (
    <Card
      key={datas[5].id}
      imgsrc={datas[5].imgsrc}
      title={datas[5].title}
      Name={datas[5].Name}
      link={datas[5].link}
    />
  );
}

export default image_Galary;
