import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "0.9rem",
    marginTop: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "400",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
