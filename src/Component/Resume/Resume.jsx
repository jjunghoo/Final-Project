import styled from "@emotion/styled";
import { EducationList } from "./EducationList";
import { CareerList } from "./CareerList";
import { SkillsList } from "./SkillsList";
import { ClassList } from "./ClassList";
import { LanguageList } from "./LanguageList";
import { AwardsList } from "./AwardsList";
import { CertificateList } from "./CertificateList";
import { ReferenceList } from "./ReferenceList";
import { Profile } from "./Profile";
import { CurriculumVitae } from "./CurriculumVitae/CurriculumVitae";
import { CoverLetter } from "./CoverLetter/CoverLetter";

const UlWrap = styled.ul`
  // border: 1px solid black;
  margin: 80px 371px 63px;
  padding: 0 0 162.03px;
  text-align: start;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  background-color: white;
`;

const ListWrapDiv = styled.div`
  filter: ${(props) => props.liked ? 'blur(0px); ' : 'blur(12px);'} 
`;

export const Resume = ({ resume, liked, supermatch }) => {
  // const resume = useSelector((state) => state.employeeReducer.resume);
  // console.log("resume", resume);
  // console.log(resume);
  return (
    <>
      <UlWrap>
        <Profile profile={resume.profile} title={resume.title} supermatch={supermatch} />
        <ListWrapDiv liked={liked}>
          {resume.list &&
            resume.list.map((item) => {
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
                  return <ReferenceList key={item.id} referenceInfo={item} />;
              }
            })}
        </ListWrapDiv>
      </UlWrap>

      {/* 경력 기술서 */}
      <UlWrap>
        <CurriculumVitae curriculumVitae={resume.curriculumVitae} liked={liked} />
      </UlWrap>

      {/* 자기소개서 */}
      <UlWrap>
        <CoverLetter coverLetter={resume.coverLetter} liked={liked} />
      </UlWrap>
    </>
  );
};
