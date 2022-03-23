import styled from "@emotion/styled";

const StyledDiv = styled.div`
  margin: 10px;
  padding: 24px 20px;
  background: rgba(242, 243, 244, 1);
  border-radius: 10px;
  color: rgba(0, 0, 0, 1);

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: left;

  > span {
    font-family: Pretendard Variable;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: left;
  }
`;

export const RichInIdeasText = () => {
    return (
        <StyledDiv>
          # <span>아이디어_</span>부자
        </StyledDiv>
    )
}