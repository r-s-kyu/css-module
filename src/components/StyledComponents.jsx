import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <STitle>-Styled Components-</STitle>
      <SButton>FIGHT!!</SButton>
    </Container>
  );
};

const Container = styled.div`
  border: double 10px #392eff;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 9px;
  border-radius: 8px;

  &:hover {
    // background-color: #46cdcf;
    // // color: #fff;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transform: translateY(-2px);
  }

  &:active {
    // padding-bottom:10px;
    transform: translateY(2px);
    background-color: #14d3f5;
    color: #fff;
    // border-bottom: none;
    // border-bottom: 2px solid #000000;
    // cursor: pointer;
  }
`;
