import React from "react";
import "./accordion.css";
import { useAccordion } from "./useAccordion";

const Accordion = ({ title, description }) => {
  const { isVisible, onTitleClick } = useAccordion();
  return (
    <div className="accordion-container">
      <div className="accordion-heading" onClick={onTitleClick}>
        <h2>{title}</h2>
        <span>{isVisible ? "-" : "+"}</span>
      </div>
      {isVisible ? (
        <div className="accordion-description">{description}</div>
      ) : null}
    </div>
  );
};

export const AccordionUI = () => {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
    },
  ];
  return (
    <>
      {accordionData.map((accordion) => (
        <Accordion
          key={accordion.title}
          title={accordion.title}
          description={accordion.content}          
        />
      ))}
    </>
  );
};
