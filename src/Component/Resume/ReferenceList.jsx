import styled from "@emotion/styled";

const StyleDiv = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.23);
  padding: 5px 0;
`;

const ListNameDiv = styled.div`
  font-size: 29px;
  font-weight: bold;
  padding: 24px 52px 24px 0;
  border: none;
`;

const InnerListWrapDiv = styled.div`
  display: block;
  width: 61%;
  padding: 30px 0;
  font-weight: 600;
  font-size: 21px;
  a {
    padding-right: 28px;
    color: rgba(17, 192, 203, 1);
    text-decoration: none;
  }
`;

export const ReferenceList = ({ referenceInfo }) => {
  const { name, list } = referenceInfo;
  return (
    <StyleDiv>
      <ListNameDiv>{name}</ListNameDiv>
      <InnerListWrapDiv>
        {list.map((item) => (
          <a href={item.url} key={item.id} target="_blank" rel="noreferrer">
            <span key={item}>{item.name}</span>
          </a>
        ))}
      </InnerListWrapDiv>
    </StyleDiv>
  );
};
