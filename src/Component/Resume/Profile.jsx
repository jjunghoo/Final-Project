import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const StyleWrapDiv = styled.div`
  padding: 48px 40px;
  background-color: rgba(57, 199, 97, 0.03);
`;

const TitleDiv = styled.div`
  margin-bottom: 24px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`;

const ProfileWrapDiv = styled.div`
  display: flex;
`;

const ImgDiv = styled.div`
  //   border: 1px solid black;
`;

const ProfileDiv = styled.div`
  margin-left: 18px;
  span {
    :first-of-type {
      margin-right: 8.41px;
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: 43px;
      letter-spacing: 0.2em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
    }
    :last-of-type {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(137, 137, 137, 1);
    }
  }
`;

const JobDiv = styled.div`
  background-color: #39c761;
  border-radius: 10px;
  margin-bottom: 4.6px;
  padding: 3px 6px;
  width: fit-content;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14.4px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;

const ProfileInfoDiv = styled.div`
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    :nth-of-type(2) {
      margin: 6px 0;
    }
    > img {
      margin-right: 8px;
    }
    > div {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export const Profile = () => {
  const resume = useSelector((state) => state.employeeReducer.resume);

  return (
    <StyleWrapDiv>
      <TitleDiv>{resume.title}</TitleDiv>
      <ProfileWrapDiv>
        <div>
          <img src="images/profile_photo.png" alt="프로필 이미지" />
        </div>
        <ProfileDiv>
          <JobDiv>{resume.profile.job}</JobDiv>
          <span>{resume.profile.name}</span>
          <span>{resume.profile.age}</span>
          <ProfileInfoDiv>
            <div>
              <img src="images/call.png" alt="핸드폰 이미지" />
              <div>{resume.profile.phone}</div>
            </div>
            <div>
              <img src="images/message.png" alt="이메일 이미지" />
              <div>{resume.profile.email}</div>
            </div>
            <div>
              <img src="images/location.png" alt="주소 이미지" />
              <div>{resume.profile.address}</div>
            </div>
          </ProfileInfoDiv>
        </ProfileDiv>
      </ProfileWrapDiv>
    </StyleWrapDiv>
  );
};
