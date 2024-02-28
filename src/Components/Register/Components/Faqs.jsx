import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Faqs = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      <div className="mainHome__faqs" id="mainHome-faqs">
        {faqs.map((faq, index) => (
          <div className="mainHome__faq" key={index} onClick={() => toggleAnswer(index)}>
            <div className="mainHome__faqs__header">
              <h3 className="mainHome__faqs__question">{faq.question}</h3>
              <FontAwesomeIcon icon={faChevronDown} rotation={openIndex === index ? 180 : 0} />
            </div>
            {openIndex === index && <p className="mainHome__faqs__answer"><br/>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
