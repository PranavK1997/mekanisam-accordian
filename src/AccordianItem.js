import React, { useState } from "react";

const AccodianItem = ({ isOpen, onToggle, title, content }) => {
  return (
    <div style={{ borderBottom: "1px solid", padding: "10px" }}>
      <div
        onClick={onToggle}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div style={{ marginTop: "8px" }}>{content}</div>}
    </div>
  );
};

export default AccodianItem;
