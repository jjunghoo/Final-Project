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

export const GrowthCharacter = () => {
  return (
    <StyledDiv>
      # <span>성장</span>형_캐릭터
    </StyledDiv>
  );
};
