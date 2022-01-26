import React from "react";
import datas from "./data";
import Card from "./Card";
function Images() {
  return (
    <Card
      key={datas[0].id}
      imgsrc={datas[0].imgsrc}
      title={datas[0].title}
      Name={datas[0].Name}
      link={datas[0].link}
    />
  );
}

export default Images;
