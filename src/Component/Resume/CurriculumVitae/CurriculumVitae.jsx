import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const StyleDiv = styled.div`
  padding: 110px 40px 32px;
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

const CareerListWrapDiv = styled.div`
  margin-top: 24px;
  > div {
    :first-of-type {
      padding: 24px 12px 24px 24px;
      display: flex;
      justify-content: space-between;
      background-color: rgba(57, 199, 97, 0.03);
      span {
        :first-of-type {
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(0, 0, 0, 1);
        }
        :last-of-type {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: 0em;
          text-align: right;
          color: rgba(0, 0, 0, 0.73);
        }
      }
    }
  }
`;

const CareerListDiv = styled.div`
  margin-top: 24px;
  padding: 0 21px 0 32px;
  > span {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
  }
  p {
    margin: 2px 0;
    :last-of-type::after {
      content: "";
      display: flex;
      width: 100%;
      height: 1px;
      //   border: 1px solid rgba(215, 215, 215, 1);
      background-color: rgba(215, 215, 215, 1);
      margin: 6px 0 8px;
    }
  }
  div {
    // margin: 3px 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
  }
`;

export const CurriculumVitae = () => {
  const curriculumVitae = useSelector(
    (state) => state.employeeReducer.resume.curriculumVitae
  );
  console.log(curriculumVitae);

  return (
    <StyleDiv>
      <ListNameDiv>{curriculumVitae.name}</ListNameDiv>
      {curriculumVitae.career.map((item) => (
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
