import styled from "@emotion/styled";

const StyleDiv = styled.div`
  padding: 32px 40px 16px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:last-child {
      width: 85%;
      height: 2px;
      background-color: rgba(57, 199, 97, 0.15);
    }
    :last-child {
      display: block;
    }
  }
`;

const ListNameDiv = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(57, 199, 97, 1);
`;

const InnerListWrapDiv = styled.div`
  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  padding-left: 24px;
  padding-top: 16px;
  a {
    padding-right: 30px;
    color: rgba(17, 192, 203, 1);
    text-decoration: none;
  }
`;

export const ReferenceList = ({ referenceInfo }) => {
  const { name, list } = referenceInfo;
  return (
    <StyleDiv>
      <div>
        <ListNameDiv>{name}</ListNameDiv>
        <div></div>
      </div>
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
