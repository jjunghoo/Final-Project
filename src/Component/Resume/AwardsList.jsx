import styled from "@emotion/styled";

const StyleDiv = styled.div`
  background-color: rgba(57, 199, 97, 0.02);
  padding: 63px 79px 32px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:last-child {
      width: 81%;
      height: 2px;
      background-color: rgba(57, 199, 97, 0.15);
    }
    :last-child {
      display: block;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 43px;
      letter-spacing: 0em;
      text-align: left;
      padding-top: 31.63px;
      color: rgba(0, 0, 0, 0.73);
    }
  }
`;

const ListNameDiv = styled.div`
  font-size: 47px;
  font-style: normal;
  font-weight: 700;
  line-height: 57px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(57, 199, 97, 1);
`;

const InnerListWrapDiv = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 0, 0, 0.73);
  padding-left: 24px;
  padding-top: 11px;
  margin: 0;
  width: 92%;
`;

const InnerListP = styled.p`
  padding: 5px;
  margin: 0;
`;

export const AwardsList = ({ awardsInfo }) => {
  const { name, list } = awardsInfo;
  return (
    <StyleDiv>
      <div>
        <ListNameDiv>{name}</ListNameDiv>
        <div className="baseLine"></div>
      </div>
      <InnerListWrapDiv>
        {list.map((item) => (
          <InnerListP key={item.id}>
            <span>{item.awards} - </span>
            <span>{item.endDate}</span>
          </InnerListP>
        ))}
      </InnerListWrapDiv>
    </StyleDiv>
  );
};
