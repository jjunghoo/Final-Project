import styled from "@emotion/styled";

const StyledDiv = styled.div`
  //   color: rgba(87, 0, 154, 1);

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

export const AnnouncementKing = () => {
  return (
    <StyledDiv>
      # 능숙한
      <span>_발표왕</span>
    </StyledDiv>
  );
};
