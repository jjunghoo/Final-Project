import styled from "@emotion/styled";

const StyleDiv = styled.div`
  padding: 64px 80px;
  filter: ${(props) => (props.liked ? "blur(0px); " : "blur(12px);")};
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

const CareerListWrapDiv = styled.div`
  margin-top: 48px;
  > div {
    :first-of-type {
      padding: 48px;
      display: flex;
      justify-content: space-between;
      background-color: rgba(57, 199, 97, 0.03);
      span {
        :first-of-type {
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: 48px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(0, 0, 0, 1);
        }
        :last-of-type {
          font-size: 28px;
          font-style: normal;
          font-weight: 400;
          line-height: 34px;
          letter-spacing: 0em;
          text-align: right;
          color: rgba(0, 0, 0, 0.73);
        }
      }
    }
  }
`;

const CareerListDiv = styled.div`
  margin-top: 48px;
  padding: 0 42px 0 64px;
  > span {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
  }
  p {
    margin: 2px 0;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);

    :last-of-type::after {
      content: "";
      display: flex;
      width: 100%;
      height: 1px;
      background-color: rgba(215, 215, 215, 1);
      margin: 6px 0 16px;
    }
  }
  div {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
  }
`;

export const CurriculumVitae = ({ curriculumVitae, liked }) => {
  // const curriculumVitae = useSelector(
  //   (state) => state.employeeReducer.resume.curriculumVitae
  // );
  // console.log(curriculumVitae);

  return (
    <StyleDiv liked={liked}>
      <ListNameDiv>{curriculumVitae && curriculumVitae.name}</ListNameDiv>
      {curriculumVitae &&
        curriculumVitae.career.map((item) => (
          <CareerListWrapDiv key={item.id}>
            <div>
              <span>
                {item.company} {item.department}
              </span>
              <span>
                {item.startDate}-{item.endDate}
              </span>
            </div>
            {item.list.map((data) => (
              <CareerListDiv key={data.id}>
                <span>{data.project}</span>
                <p>{data.position}</p>
                <p>
                  {data.startDate} ~ {data.endDate}
                </p>
                {data.duties.map((duty) => (
                  <div key={duty}>{duty}</div>
                ))}
              </CareerListDiv>
            ))}
          </CareerListWrapDiv>
        ))}
    </StyleDiv>
  );
};
