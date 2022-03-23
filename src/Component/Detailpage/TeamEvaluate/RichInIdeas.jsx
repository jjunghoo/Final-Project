import styled from "@emotion/styled";

const StyledDiv = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;

  > span {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: left;
  }
`;

export const RichInIdeas = () => {
  return (
    <StyledDiv>
      # <span>아이디어_</span>부자
    </StyledDiv>
  );
};
