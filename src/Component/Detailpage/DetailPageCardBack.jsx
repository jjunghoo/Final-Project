import styled from "@emotion/styled";
import { AnnouncementKing } from "./TeamEvaluate/AnnouncementKing";
import { ArtisanPpt } from "./TeamEvaluate/ArtisanPpt";
import { DataMaster } from "./TeamEvaluate/DataMaster";
import { DesignMaster } from "./TeamEvaluate/DesignMaster";
import { DevelopmentMaster } from "./TeamEvaluate/DevelopmentMaster";
import { Encyclopedia } from "./TeamEvaluate/Encyclopedia";
import { Fluency } from "./TeamEvaluate/Fluency";
import { GentleCoordinator } from "./TeamEvaluate/GentleCoordinator";
import { GreatFriendliness } from "./TeamEvaluate/GreatFriendliness";
import { GreatSocialLife } from "./TeamEvaluate/GreatSocialLife";
import { GrowthCharacter } from "./TeamEvaluate/GrowthCharacter";
import { InfinitePositiveEnergy } from "./TeamEvaluate/InfinitePositiveEnergy";
import { LeanAndAgile } from "./TeamEvaluate/LeanAndAgile";
import { ManOfHisWord } from "./TeamEvaluate/ManOfHisWord";
import { MarketingMaster } from "./TeamEvaluate/MarketingMaster";
import { Multiplayer } from "./TeamEvaluate/Multiplayer";
import { OurManager } from "./TeamEvaluate/OurManager";
import { QuietResearcher } from "./TeamEvaluate/QuietResearcher";
import { RichInIdeas } from "./TeamEvaluate/RichInIdeas";
import { SelfDirectedLearner } from "./TeamEvaluate/SelfDirectedLearner";

import SubtractRed from "./images/Subtract_red.svg";

const StyledCardBack = styled.div`
  position: relative;
  border-radius: 20.78px;
  //   padding: 80px 32px;
  box-shadow: 2.077683448791504px 4.155366897583008px 4.155366897583008px 0px
    rgba(0, 0, 0, 0.25);
  img {
    position: absolute;
    bottom: -10px;
    right: -10px;
  }
  ${({ state }) => {
    switch (state) {
      case "dataScience":
        return `border: 10px solid rgba(17, 192, 203, 1);
                background-color: rgba(17, 192, 203, 1);
                color: rgba(0, 83, 88, 1);
               `;
      case "design":
        return `border: 10px solid rgba(255, 168, 0, 1);
                background-color: rgba(255, 168, 0, 1);
                color: rgba(140, 42, 0, 1);
                `;
      case "marketing":
        return `border: 10px solid rgba(255, 80, 80, 1);
                background-color: rgba(255, 80, 80, 1);
                color: rgba(139, 0, 0, 1);
                `;
      case "programming":
        return `border: 10px solid rgba(186, 109, 246, 1);
                background-color: rgba(186, 109, 246, 1);
                color: rgba(87, 0, 154, 1);
               `;
      default:
        return;
    }
  }}
`;

const TeamEvaluateWrap = styled.div`
  //   border: 1px solid black;
  width: fit-content;
  margin: 0 auto;
  padding: 80px 42px 54px;
  > div {
    margin: 6px 0;
  }
`;

const CommentsWrapDiv = styled.div`
  //   border: 1px solid black;
  //   margin-top: 54px;
  margin: 0 auto;
  width: 306px;
`;

const CommentWrapDiv = styled.div`
  //   border: 1px solid red;
  margin-bottom: 80px;
  padding: 2px 0;
  p {
    margin: 0;
    margin-bottom: 18.26px;
    font-family: Pretendard Variable;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
  span {
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 19px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
`;

export const DetailPageCardBack = ({ teamEvaluate, getJob, comment }) => {
  console.log("comment", comment && comment[0][0]);
  // teamEvaluate 높은 순으로 정렬
  const sortTeamEvaluate = [];
  for (let key in teamEvaluate) {
    sortTeamEvaluate.push([key, teamEvaluate[key]]);
  }

  sortTeamEvaluate.sort(function (a, b) {
    return b[1] - a[1];
  });

  const sortedTeamEvaluate = [];
  sortTeamEvaluate.forEach((item, index) => {
    if (index > 4) return;
    sortedTeamEvaluate.push(item[0]);
  });
  console.log("sortedTeamEvaluate", sortedTeamEvaluate);

  return (
    <StyledCardBack state={getJob[0]}>
      <TeamEvaluateWrap>
        {sortedTeamEvaluate.map((item) => {
          switch (item) {
            case "능숙한발표왕":
              return <AnnouncementKing key={item} />;
            case "데이터마스터":
              return <DataMaster key={item} />;
            case "디벨롭마스터":
              return <DevelopmentMaster key={item} />;
            case "디자인마스터":
              return <DesignMaster key={item} />;
            case "린앤애자일":
              return <LeanAndAgile key={item} />;
            case "마케팅마스터":
              return <MarketingMaster key={item} />;
            case "멀티플래이어":
              return <Multiplayer key={item} />;
            case "무한긍정_에너지":
              return <InfinitePositiveEnergy key={item} />;
            case "사회생활만렙":
              return <GreatSocialLife key={item} />;
            case "성장형캐릭터":
              return <GrowthCharacter key={item} />;
            case "시간약속정확":
              return <ManOfHisWord key={item} />;
            case "아이디어부자":
              return <RichInIdeas key={item} />;
            case "온화한조정자":
              return <GentleCoordinator key={item} />;
            case "우리조장님":
              return <OurManager key={item} />;
            case "유창한말솜씨":
              return <Fluency key={item} />;
            case "자기주도학습자":
              return <SelfDirectedLearner key={item} />;
            case "조용한연구자":
              return <QuietResearcher key={item} />;
            case "친화력대박":
              return <GreatFriendliness key={item} />;
            case "팀의백과사전":
              return <Encyclopedia key={item} />;
            case "피피티장인":
              return <ArtisanPpt key={item} />;
            default:
              break;
          }
        })}
      </TeamEvaluateWrap>
      <CommentsWrapDiv>
        {comment &&
          comment.map((item) => (
            <CommentWrapDiv key={item}>
              <p>{item[2]}</p>
              <span>{item[1]}</span>
            </CommentWrapDiv>
          ))}
      </CommentsWrapDiv>
      <img src={SubtractRed} alt="스탬프 이미지" />
    </StyledCardBack>
  );
};
