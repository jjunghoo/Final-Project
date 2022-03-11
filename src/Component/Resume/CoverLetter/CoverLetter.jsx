import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const StyleDiv = styled.div`
  padding: 94px 40px 32px;
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

const ListDiv = styled.div`
  margin-top: 24px;
  > span {
    :first-of-type {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
    }
  }
  > div {
    :first-of-type {
      margin-top: 8px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(0, 0, 0, 0.73);
    }
  }
`;

export const CoverLetter = () => {
  const coverLetter = useSelector(
    (state) => state.employeeReducer.resume.coverLetter
  );
  console.log(coverLetter);

  const markUp = (text) => {
    return { __html: text };
  };

  return (
    <StyleDiv>
      <ListNameDiv>{coverLetter.name}</ListNameDiv>
      {coverLetter.list.map((item) => (
        <ListDiv key={item.type}>
          <span>{item.name}</span>
          <div dangerouslySetInnerHTML={markUp(item.text)}></div>
        </ListDiv>
      ))}
    </StyleDiv>
  );
};
