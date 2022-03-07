import styled from "@emotion/styled";

const StyleDiv = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.23);
  padding: 5px 0;
`;

const ListNameDiv = styled.div`
  font-size: 29px;
  font-weight: bold;
  padding: 24px 96px 24px 0;
  border: none;
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

export const ClassList = ({ classInfo }) => {
  const { name, list } = classInfo;
  return (
    <StyleDiv>
      <ListNameDiv>{name}</ListNameDiv>
      <InnerListWrapDiv>
        {list.map((item) => (
          <InnerListDiv key={item.id}>
            <StyleDiv2>
              <span>{item.company} - </span>
              <span>{item.educationName}</span>
              <div>{item.state}</div>
              <span>{item.endDate}</span>
            </StyleDiv2>
          </InnerListDiv>
        ))}
      </InnerListWrapDiv>
    </StyleDiv>
  );
};
