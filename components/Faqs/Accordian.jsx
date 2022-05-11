import React from "react";
import { Accordion } from "react-bootstrap";

const Accordian = () => {
  const Faqs = [
    {
      id: 1,
      Title: "What is blockchain technology?",
      Description:
        "gained extended experience in ec orci sed justo blandit pharetra nec id urna. Maecenas ac velit vitae est ullamcorper tempus. Nam consectetur quis ipsum eu venenatis.",
    },
    {
      id: 2,
      Title: "What is Bitcoin?",
      Description:
        "gained extended experience in ec orci sed justo blandit pharetra nec id urna. Maecenas ac velit vitae est ullamcorper tempus. Nam consectetur quis ipsum eu venenatis.",
    },
    {
      id: 3,
      Title: "Who created Bitcoin?",
      Description:
        "gained extended experience in ec orci sed justo blandit pharetra nec id urna. Maecenas ac velit vitae est ullamcorper tempus. Nam consectetur quis ipsum eu venenatis.",
    },
    {
      id: 4,
      Title: "What is cryptocurrency?",
      Description:
        "gained extended experience in ec orci sed justo blandit pharetra nec id urna. Maecenas ac velit vitae est ullamcorper tempus. Nam consectetur quis ipsum eu venenatis.",
    },
    {
      id: 5,
      Title: "How does cryptocurrency wallet work?",
      Description:
        "gained extended experience in ec orci sed justo blandit pharetra nec id urna. Maecenas ac velit vitae est ullamcorper tempus. Nam consectetur quis ipsum eu venenatis.",
    },
    {
      id: 6,
      Title: "How to create cryptocurrency wallet?",
      Description:
        "gained extended experience in ec orci sed justo blandit pharetra nec id urna. Maecenas ac velit vitae est ullamcorper tempus. Nam consectetur quis ipsum eu venenatis.",
    },
  ];
  return (
    <>
      <div className="info-acordian">
        <Accordion defaultActiveKey="0">
          {Faqs.map((Faq) => (
            <Accordion.Item eventKey={Faq.id} Key={Faq.id} className="mb-2 rounded">
              <Accordion.Header>{Faq.Title}</Accordion.Header>
              <Accordion.Body>{Faq.Description}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Accordian;
