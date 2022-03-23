import styled from "@emotion/styled";

const StyleDiv = styled.div`
padding: 63px 79px 32px;
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

const InnerListDiv = styled.div`
  padding-bottom: 16px;
  margin-top: 24px;
`;

const StyleDiv2 = styled.div`
  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    span:last-child {
      
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
    padding-left: 15.81px;
    }
  }
  span:first-of-type {
    
    font-size: 47px;
    font-style: normal;
    font-weight: 600;
    line-height: 57px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
  }
`;

const StyleDepartmentDiv = styled.div`
  // color: rgba(0, 0, 0, 0.56);
  // margin-top: 4px;
  // font-weight: 500;
  // span {
  //   font-weight: 600;
  //   font-size: 14px;
  //   padding-left: 10px;
  // }
  > span {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
    padding-left: 47px;
    padding-top: 4px;
    :last-of-type {
      padding-left: 24px;
    }
  }
  > div {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
    padding-left: 47px;
    padding-top: 31.63px;
    margin: 0;
    width: 75%;
  }
`;

export const CareerList = ({ careerListInfo }) => {
  const { list, name } = careerListInfo;

  return (
    <StyleDiv>
      <ListNameDiv>{name}</ListNameDiv>
      <div>
        {list.map((item) => (
          <InnerListDiv key={item.id}>
            <StyleDiv2>
              <div>
                <span>{item.company}</span>
                <span>
                  {item.startDate}-{item.endDate}
                </span>
              </div>
              {/* <span>{item.company}</span>&nbsp;
              <span>{item.department}</span>&nbsp;
              <span>{item.position}</span> */}
            </StyleDiv2>
            <StyleDepartmentDiv>
              <span>{item.department}</span>
              <span>{item.position}</span>
              <div>
                {item.duties.map((data, index) =>
                  item.duties.length - 1 === index ? (
                    <span key={data}>{data}</span>
                  ) : (
                    <span key={data}>{data}, </span>
                  )
                )}
              </div>
            </StyleDepartmentDiv>
          </InnerListDiv>
        ))}
      </div>
    </StyleDiv>
  );
};
