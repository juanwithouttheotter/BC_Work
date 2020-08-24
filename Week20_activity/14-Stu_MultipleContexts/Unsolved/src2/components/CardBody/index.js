import React, { useContext } from "react";
import LangContext from "../../utils/LangContext";

function CardBody() {
  const { language } = useContext(LangContext);
  return (
    <div>
      <h4>Favorite language: {language.language}</h4>
    </div>
  );
}

export default CardBody;
