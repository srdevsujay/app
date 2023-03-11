import React, { useEffect, useRef, useState } from "react";
import { AccordionData } from "../../models";
import { getRefValue } from "../../hooks/getRefValue.hook";
import {
  AccordionLi,
  AccordionTitle,
  AccordionBtn,
  AccordionContainer,
  AccordionContent,
} from "../../styled-components/accordion";

const AccordionItem = ({
  data,
  isOpen,
  handleAccordeon,
}: {
  data: AccordionData;
  isOpen: boolean;
  handleAccordeon: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <AccordionLi className={`accordion-item ${isOpen ? "active" : ""}`}>
      <div>
        <AccordionTitle
          className="accordion-item-title"
          style={{ display: "inline-block" }}
        >
          <AccordionBtn
            className="accordion-item-btn"
            onClick={handleAccordeon}
          >
            {data.title}
          </AccordionBtn>
        </AccordionTitle>
      </div>
      <AccordionContainer
        className="accordion-item-container"
        style={{ height }}
      >
        <AccordionContent ref={contentRef} className="accordion-item-content">
          {data.content}
        </AccordionContent>
      </AccordionContainer>
    </AccordionLi>
  );
};

export default AccordionItem;
