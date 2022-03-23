import styled from "@emotion/styled";

const StyleDiv = styled.div`
  padding: 64px 80px;
  filter: ${(props) => props.liked ? 'blur(0px); ' : 'blur(12px);'} 
`;

const ListNameDiv = styled.div`
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 58px;
letter-spacing: 0em;
text-align: left;
color: rgba(57, 199, 97, 1);
`;

const ListDiv = styled.div`
  margin-top: 48px;
  > span {
    :first-of-type {
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
    }
  }
  > div {
    :first-of-type {
      margin-top: 16px;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 56px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(0, 0, 0, 0.73);
    }
  }
`;

export const CoverLetter = ({ coverLetter, liked }) => {
  // const coverLetter = useSelector(
  //   (state) => state.employeeReducer.resume.coverLetter
  // );
  // console.log(coverLetter);

  const markUp = (text) => {
    return { __html: text };
  };

  return (
    <StyleDiv liked={liked}>
      <ListNameDiv>{coverLetter && coverLetter.name}</ListNameDiv>
      {coverLetter &&
        coverLetter.list.map((item) => (
          <ListDiv key={item.type}>
            <span>{item.name}</span>
            <div dangerouslySetInnerHTML={markUp(item.text)}></div>
          </ListDiv>
        ))}
    </StyleDiv>
  );
};
