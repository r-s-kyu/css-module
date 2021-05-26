export const InlineStyle = () => {
  const containerStyle = {
    border: "outset 10px #392eff",
    borderRadius: "20px",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "10px"
  };
  const titleStyle = {
    margin: "",
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "9px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}> - Inline Style- </p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
  );
};
