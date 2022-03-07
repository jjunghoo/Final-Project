import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { EducationList } from "./EducationList";
import { CareerList } from "./CareerList";
import { SkillsList } from "./SkillsList";
import { ClassList } from "./ClassList";
import { LanguageList } from "./LanguageList";
import { AwardsList } from "./AwardsList";
import { CertificateList } from "./CertificateList";

const UlWrap = styled.ul`
  border: 1px solid black;
  margin: 0 23%;
  padding: 32px 40px;
  text-align: start;
`;

export const Resume = () => {
  const resume = useSelector((state) => state.employeeReducer.resume);

  console.log(resume);
  return (
    <UlWrap>
      {resume.map((item) => {
        switch (item.name) {
          case "학력":
            return <EducationList key={item.id} educationInfo={item} />;
          case "경력":
            return <CareerList key={item.id} careerListInfo={item} />;
          case "스킬":
            return <SkillsList key={item.id} skillListInfo={item} />;
          case "교육":
            return <ClassList key={item.id} classInfo={item} />;
          case "외국어":
            return <LanguageList key={item.id} languageInfo={item} />;
          case "수상경력":
            return <AwardsList key={item.id} awardsInfo={item} />;
          case "자격증":
            return <CertificateList key={item.id} certificateInfo={item} />;
          default:
            break;
        }
      })}
    </UlWrap>
  );
};
