// import { useSelector } from "react-redux";
import styled from "@emotion/styled";

import ProfilePhoto from "./images/profile_photo.svg";
import Call from "./images/call.svg";
import Message from "./images/message.svg";
import Location from "./images/location.svg";

const StyleWrapDiv = styled.div`
  padding: 94.89px 79.07px;
  background-color: rgba(57, 199, 97, 0.03);
  filter: ${(props) => props.supermatch ? 'blur(0px); ' : 'blur(12px);'}

`;

const TitleDiv = styled.div`
font-size: 63px;
font-style: normal;
font-weight: 400;
line-height: 76px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 56px;
  color: rgba(0, 0, 0, 1);
`;

const ProfileWrapDiv = styled.div`
  display: flex;
`;

const ProfileDiv = styled.div`
margin-left: 35.58px;
  span {
    :first-of-type {
      margin-right: 8.41px;
      font-size: 71px;
      font-style: normal;
      font-weight: 600;
      line-height: 85px;
      letter-spacing: 0.2em;
      text-align: left;
      color: rgba(0, 0, 0, 1);
    }
    :last-of-type {
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(137, 137, 137, 1);
    }
  }
`;

const JobDiv = styled.div`
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 7.13px;
padding: 6px 13px;
border-radius: 19.77px;
background-color: #39c761;
color: rgba(255, 255, 255, 1);
width: fit-content;
`;

const ProfileInfoDiv = styled.div`
  margin-top: 25.63px;
  div {
    display: flex;
    align-items: center;
    :nth-of-type(2) {
      margin: 9px 0;
    }
    > img {
      margin-right: 15.81px;
    }
    > div {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    }
  }
`;

export const Profile = ({ profile, title, supermatch }) => {
  // const resume = useSelector((state) => state.employeeReducer.resume);
  // console.log("profile", profile);

  return (
    <StyleWrapDiv supermatch={supermatch}>
      <TitleDiv>{title}</TitleDiv>
      <ProfileWrapDiv>
        <div>
          <img src={ProfilePhoto} alt="프로필 이미지" />
        </div>
        <ProfileDiv>
          <JobDiv>{profile && profile.job}</JobDiv>
          <span>{profile && profile.name}</span>
          <span>{profile && profile.age}</span>
          <ProfileInfoDiv>
            <div>
              <img src={Call} alt="핸드폰 이미지" />
              <div>{profile && profile.phone}</div>
            </div>
            <div>
              <img src={Message} alt="이메일 이미지" />
              <div>{profile && profile.email}</div>
            </div>
            <div>
              <img src={Location} alt="주소 이미지" />
              <div>{profile && profile.address}</div>
            </div>
          </ProfileInfoDiv>
        </ProfileDiv>
      </ProfileWrapDiv>
    </StyleWrapDiv>
  );
};
