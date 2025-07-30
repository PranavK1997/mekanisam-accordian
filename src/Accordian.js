import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = ({ data }) => {
  console.log(data);
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div>
      {data.map((item) => (
        <AccordianItem
          key={item.faqId}
          isOpen={openId === item.faqId}
          onToggle={() => handleToggle(item.faqId)}
          title={item.faqTitle}
          content={item.faqContent}
        />
      ))}
    </div>
  );
};

export default Accordian;
