import React, { useState } from "react";

const AccordionItem = ({
  title,
  description,
  isVisible,
  onAccordionTitleClick,
}) => {
  return (
    <div className="accordion-container">
      <div className="accordion-heading" onClick={onAccordionTitleClick}>
        <h2>{title}</h2>
        <span>{isVisible ? "-" : "+"}</span>
      </div>
      {isVisible ? (
        <div className="accordion-description">{description}</div>
      ) : null}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const onAccordionTitleClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.content}
          isVisible={selectedIndex === index}
          onAccordionTitleClick={() => onAccordionTitleClick(index)}
        />
      ))}
    </>
  );
};

export const Accordion2 = () => {
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

  return <Accordion items={accordionData} />;
};
