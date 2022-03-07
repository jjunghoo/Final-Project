import styled from "@emotion/styled";

const StyleDiv = styled.div`
  display: flex;
  padding: 5px 0;
`;

const ListNameDiv = styled.div`
  font-size: 29px;
  font-weight: bold;
  padding: 24px 96px 24px 0;
  border-top: 3px solid #39c761;
`;

const InnerListWrapDiv = styled.div`
  display: block;
  padding: 15px 0;
`;

const InnerListDiv = styled.div`
  padding: 15px;
`;

const StyleDiv2 = styled.div`
  font-weight: 600;
  font-size: 21px;
`;

const StyleDateDiv = styled.div`
  color: rgba(0, 0, 0, 0.56);
  margin-top: 4px;
  font-weight: 500;
  span {
    font-weight: 600;
    font-size: 14px;
    padding-left: 10px;
  }
`;

export const EducationList = ({ educationInfo }) => {
  const { list, name } = educationInfo;
  return (
    <StyleDiv>
      <ListNameDiv>{name}</ListNameDiv>
      <InnerListWrapDiv>
        {list.map((item) => (
          <InnerListDiv key={item.id}>
            <StyleDiv2>
              <span>{item.education}</span>&nbsp;
              <span>{item.department}</span>
            </StyleDiv2>
            <StyleDateDiv>
              {item.startDate} - {item.endDate}
              <span>{item.state}</span>
            </StyleDateDiv>
          </InnerListDiv>
        ))}
      </InnerListWrapDiv>
    </StyleDiv>
  );
};
