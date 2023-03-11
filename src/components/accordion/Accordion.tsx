import React, { useState } from "react";
import { AccordionData } from "../../models";
import AccordionItem from "./AccordionItem";
import { AccordionUl } from "../../styled-components";

const Accordion = ({ items }: { items: Array<AccordionData> }) => {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const handleAccordeon: any = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <AccordionUl className="accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          handleAccordeon={() => handleAccordeon(idx)}
        />
      ))}
    </AccordionUl>
  );
};

export default Accordion;
