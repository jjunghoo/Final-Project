import styled from "@emotion/styled";
import LikeImg from "./images/likeImg.svg";
import { AnnouncementKingText } from "./PeerReview/AnnouncementKingText";
import { ArtisanPptText } from "./PeerReview/ArtisanPptText";
import { DataMasterText } from "./PeerReview/DataMasterText";
import { DesignMasterText } from "./PeerReview/DesignMasterText";
import { DevelopmentMasterText } from "./PeerReview/DevelopmentMasterText";
import { EncyclopediaText } from "./PeerReview/EncyclopediaText";
import { FluencyText } from "./PeerReview/FluencyText";
import { GentleCoordinatorText } from "./PeerReview/GentleCoordinatorText";
import { GreatFriendlinessText } from "./PeerReview/GreatFriendlinessText";
import { GreatSocialLifeText } from "./PeerReview/GreatSocialLifeText";
import { GrowthCharacterText } from "./PeerReview/GrowthCharacterText";
import { InfinitePositiveEnergyText } from "./PeerReview/InfinitePositiveEnergyText";
import { LeanAndAgileText } from "./PeerReview/LeanAndAgileText";
import { ManOfHisWordText } from "./PeerReview/ManOfHisWordText";
import { MarketingMasterText } from "./PeerReview/MarketingMasterText";
import { MultiplayerText } from "./PeerReview/MultiplayerText";
import { OurManagerText } from "./PeerReview/OurManagerText";
import { QuietResearcherText } from "./PeerReview/QuietResearcherText";
import { RichInIdeasText } from "./PeerReview/RichInIdeasText";
import { SelfDirectedLearnerText } from "./PeerReview/SelfDirectedLearnerText";

const PeerReviewWrapDiv = styled.div``;

const PeerReviewHeader = styled.div`
  display: flex;
  align-items: center;
  // border: 1px solid black;
  border-radius: 10px;
  padding: 21px 0;
  background: rgba(244, 246, 251, 1);
  > img {
    // margin-left: 4.25px;
    // margin-right: 36.25px;
    margin: 0 16px;
  }
  > span {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    padding-top: 1px;
    color: rgba(0, 0, 0, 1);
  }
`;

const PeerReviewListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 66px 30px 56px;
`;

export const PeerReview = ({ employeeInfo, teamEvaluate }) => {
  // teamEvaluate 높은 순으로 정렬
  const sortTeamEvaluate = [];
  for (let key in teamEvaluate) {
    sortTeamEvaluate.push([key, teamEvaluate[key]]);
  }

  sortTeamEvaluate.sort(function (a, b) {
    return b[1] - a[1];
  });

  const sortedTeamEvaluate = [];
  sortTeamEvaluate.forEach((item) => {
    sortedTeamEvaluate.push(item[0]);
  });

  return (
    <PeerReviewWrapDiv>
      <PeerReviewHeader>
        <img src={LikeImg} alt="좋아요 로고 이미지" />
        <span>
          다른 동료들은 {employeeInfo.이름} 수강생이 000하다고 생각해요
        </span>
      </PeerReviewHeader>
      <PeerReviewListWrap>
        {sortedTeamEvaluate &&
          sortedTeamEvaluate.map((item) => {
            switch (item) {
              case "능숙한발표왕":
                return <AnnouncementKingText key={item} />;
              case "데이터마스터":
                return <DataMasterText key={item} />;
              case "디벨롭마스터":
                return <DevelopmentMasterText key={item} />;
              case "디자인마스터":
                return <DesignMasterText key={item} />;
              case "린앤애자일":
                return <LeanAndAgileText key={item} />;
              case "마케팅마스터":
                return <MarketingMasterText key={item} />;
              case "멀티플래이어":
                return <MultiplayerText key={item} />;
              case "무한긍정_에너지":
                return <InfinitePositiveEnergyText key={item} />;
              case "사회생활만렙":
                return <GreatSocialLifeText key={item} />;
              case "성장형캐릭터":
                return <GrowthCharacterText key={item} />;
              case "시간약속정확":
                return <ManOfHisWordText key={item} />;
              case "아이디어부자":
                return <RichInIdeasText key={item} />;
              case "온화한조정자":
                return <GentleCoordinatorText key={item} />;
              case "우리조장님":
                return <OurManagerText key={item} />;
              case "유창한말솜씨":
                return <FluencyText key={item} />;
              case "자기주도학습자":
                return <SelfDirectedLearnerText key={item} />;
              case "조용한연구자":
                return <QuietResearcherText key={item} />;
              case "친화력대박":
                return <GreatFriendlinessText key={item} />;
              case "팀의백과사전":
                return <EncyclopediaText key={item} />;
              case "피피티장인":
                return <ArtisanPptText key={item} />;
              default:
                break;
            }
          })}
      </PeerReviewListWrap>
    </PeerReviewWrapDiv>
  );
};
