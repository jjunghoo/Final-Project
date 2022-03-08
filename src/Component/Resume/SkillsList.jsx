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
  }
`;

const ListNameDiv = styled.div`
  // font-size: 29px;
  // font-weight: bold;
  // padding: 24px 110px 24px 0;
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
  // width: 61%;
  // padding: 30px 0;
  // font-weight: 600;
  // font-size: 21px;

  display: block;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 0, 0, 0.73);
  padding-left: 24px;
  padding-top: 16px;
  margin: 0;
  width: 92%;
  p {
    margin: 0;
  }
`;

export const SkillsList = ({ skillListInfo }) => {
  const { name, list } = skillListInfo;

  return (
    <StyleDiv>
      <div>
        <ListNameDiv>{name}</ListNameDiv>
        <div></div>
      </div>
      <InnerListWrapDiv>
        <p>
          {list.map((item, index) =>
            list.length - 1 === index ? (
              <span key={item}>{item}</span>
            ) : (
              <span key={item}>{item}, </span>
            )
          )}
        </p>
      </InnerListWrapDiv>
    </StyleDiv>
  );
};
