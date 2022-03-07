import styled from "@emotion/styled";

const StyleDiv = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.23);
  padding: 5px 0;
`;

const ListNameDiv = styled.div`
  font-size: 29px;
  font-weight: bold;
  padding: 24px 110px 24px 0;
  border: none;
`;

const InnerListWrapDiv = styled.div`
  display: block;
  width: 61%;
  padding: 30px 0;
  font-weight: 600;
  font-size: 21px;
`;

export const SkillsList = ({ skillListInfo }) => {
  const { name, list } = skillListInfo;

  return (
    <StyleDiv>
      <ListNameDiv>{name}</ListNameDiv>
      <InnerListWrapDiv>
        {list.map((item, index) =>
          list.length - 1 === index ? (
            <span key={item}>{item}</span>
          ) : (
            <span key={item}>{item}, </span>
          )
        )}
      </InnerListWrapDiv>
    </StyleDiv>
  );
};
