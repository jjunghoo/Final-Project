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
  margin-top: 47.45px;
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

const StyleStateDiv = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  padding: 7.91px 31.63px;
  border-radius: 49px;
  ${({ state }) => {
    switch (state) {
      case "졸업예정":
        return `background: rgba(156, 205, 77, 1)`;
      case "졸업":
        return `background: rgba(98, 197, 203, 1)`;
      default:
        return;
    }
  }}
`;

const StyleDepartmentDiv = styled.div`
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
  }
  > p {
    padding-top: 16px;
  }
  div {
    padding-top: 16px;
  }
  p {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
    padding-left: 47px;
    margin: 0;
  }
`;

export const EducationList = ({ educationInfo }) => {
  const { list, name } = educationInfo;
  return (
    <StyleDiv>
      <ListNameDiv>{name}</ListNameDiv>
      <div>
        {list.map((item) => (
          <InnerListDiv key={item.id}>
            <StyleDiv2>
              <div>
                <span>{item.education}</span>
                <span>
                  {item.startDate}-{item.endDate}
                </span>
              </div>
              <StyleStateDiv state={item.state}>{item.state}</StyleStateDiv>
            </StyleDiv2>
            <StyleDepartmentDiv>
              <span>{item.department}</span>
              {item.thesis ? (
                <p>석사논문 : {item.thesis}</p>
              ) : (
                <div>
                  <p>
                    학점 : {item.credit}/{item.totalCredit}
                  </p>
                  <p>복수전공 : {item.subDepartment}</p>
                </div>
              )}
            </StyleDepartmentDiv>
          </InnerListDiv>
        ))}
      </div>
    </StyleDiv>
  );
};
