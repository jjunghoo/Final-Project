import styled from "@emotion/styled";

const StyleDiv = styled.div`
  background-color: rgba(57, 199, 97, 0.02);
  padding: 63px 79px 32px;
  > div {
    :first-of-type {
      padding-left: 0;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Pretendard Variable;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
    padding: 31.63px 47.44px 0 28px;
    div:last-child {
      width: 89%;
      height: 2px;
      background-color: rgba(57, 199, 97, 0.15);
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
