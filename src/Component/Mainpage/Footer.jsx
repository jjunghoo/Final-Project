import styled from "@emotion/styled";

const FooterWrap = styled.div`
  margin-top: 80px;
  width: 100%;
  max-width: 1920px;
  text-align: left;
  a {
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  >div: first-of-type {
    padding: 24px 162px;
    background: rgba(94, 94, 94, 1);
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    div {
      border: 0.5px solid rgba(145, 145, 145, 1);
      height: 14px;
      margin: 0 15px;
    }
  }
`;

const CompanyInfo = styled.div`
  padding: 41px 353px 40px 158px;
  background: rgba(46, 46, 46, 1);
  > div {
    background: rgba(46, 46, 46, 1);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;

    >span: first-of-type {
      color: #fff;
      font-family: Pretendard;
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
    }
    > div > div {
      color: rgba(94, 94, 94, 1);
    }
  }
`;

const CompanySpan = styled.span`
  margin-left: 5px;
  color: #dddbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

const FooterMiddleDiv = styled.div`
  color: #999999;
  padding: 45px 0 35px;
  border-bottom: 1px solid rgba(145, 145, 145, 1);
`;

const FooterBottom = styled.div`
  color: #999999;
  padding: 35px 0;
  span {
    :first-of-type {
      margin-left: 15px;
    }
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
  a {
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    -webkit-text-decoration: none;
    text-decoration: none;
}

  }
`;

const Address = styled.span`
  margin-left: 1px;
`;

export const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <a
          href="https://fastcampus.co.kr/info/about"
          rel="noreferrer"
          target="_blank"
        >
          회사소개
        </a>
        <div></div>
        <a
          href="/https://fastcampus.co.kr/info/policies/service"
          rel="noreferrer"
          target="_blank"
        >
          이용약관
        </a>
        <div></div>
        <a
          href="/https://fastcampus.co.kr/info/policies/privacy"
          rel="noreferrer"
          target="_blank"
        >
          개인정보처리방침
        </a>
      </div>
      <CompanyInfo>
        <div>
          <span>FAST CAMPUS</span>
          <CompanySpan>(주) 데이원 컴퍼니</CompanySpan>
          <FooterMiddleDiv>
            <span>
              대표이사 : 이강민ㆍ개인정보책임관리자 : 이강민ㆍ사업자번호 :
              810-86-00658
            </span>
            <br />
            <span>
              사무실 : 서울특별시 강남구 테헤란로 231, 센터필드 WEST 6층, 7층
            </span>
            <span>
              교육장 : 서울특별시 강남구 강남대로 364 미왕빌딩 10, 11층
            </span>
          </FooterMiddleDiv>
          <FooterBottom>
            고객지원 <span>02-501-9396</span>ㆍ결제/환불/계산서 문의 :{" "}
            <Address>
              <a href="mailto:help@fastcampus.co.kr">Help@Fastcampus.Co.Kr</a>
            </Address>
            ㆍ기타 문의{" "}
            <span>
              <a href="mailto:help.online@fastcampus.co.kr">
                Help.Online@Fastcampus.Co.Kr
              </a>
            </span>
            ㆍ주중 10시~19시 (점심시간 12~13시 / 주말 및 공휴일 제외)
            <br />
            통신판매업 신고번호 : 제 2017-서울강남-01977호ㆍ학원설립
            운영등록번호: 제12484호(강남), 제 2238호(성동)ㆍ원격평생교육원 :{" "}
            <span>제 572호</span>
          </FooterBottom>
        </div>
      </CompanyInfo>
    </FooterWrap>
  );
};
