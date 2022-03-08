import styled from "@emotion/styled";

const StyleDiv = styled.div`
  padding: 32px 40px 16px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:last-child {
      width: 91%;
      height: 2px;
      background-color: rgba(57, 199, 97, 0.15);
    }
    :last-child {
      display: block;
    }
  }
`;

const ListNameDiv = styled.div`
  // font-size: 29px;
  // font-weight: bold;
  // padding: 24px 96px 24px 0;
  // border: none;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(57, 199, 97, 1);
`;

const InnerListWrapDiv = styled.div`
  // display: block;
  // padding: 15px 0;

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

export const ClassList = ({ classInfo }) => {
  const { name, list } = classInfo;
  return (
    <StyleDiv>
      <div>
        <ListNameDiv>{name}</ListNameDiv>
        <div className="baseLine"></div>
      </div>
      <InnerListWrapDiv>
        {list.map((item) => (
          <InnerListP key={item.id}>
            <span>{item.company} - </span>
            <span>{item.educationName} </span>
            <span>{item.state} </span>
            <span>{item.endDate}</span>
          </InnerListP>
        ))}
      </InnerListWrapDiv>
    </StyleDiv>
  );
};
