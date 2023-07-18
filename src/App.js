import styled from "@emotion/styled";
import { Avatar, Card } from "antd";

function App() {
  return (
    <Layout>
      {/* <Divider /> */}
      <Background />
      <TextWrapper>
        <MainText>{`휴대폰 도매\n매장에 방문해보세요`}</MainText>
        {/* <SubText>
          예시 서브 텍스트 입니다. 예시 서브 텍스트 입니다. 예시 서브 텍스트
          입니다. 예시 서브 텍스트 입니다. 예시 서브 텍스트 입니다 예시 서브
          텍스트 입니다 예시 서브 텍스트 입니다 예시 서브 텍스트 입니다
        </SubText> */}
      </TextWrapper>

      <Wrapper>
        <Card
          hoverable
          bordered
          cover={
            <img
              src={"/carrot.jpg"}
              alt="당근마켓"
              style={{
                maxWidth: 580,
                margin: "0 auto",
                padding: 1,
                boxSizing: "border-box",
              }}
            />
          }
          style={{
            width: "100%",
            maxWidth: 600,
            minWidth: 300,
            margin: "0 auto",
          }}
          bodyStyle={{ width: "100%" }}
          onClick={() => {
            window.open(
              "https://www.daangn.com/kr/business-profiles/솔라텔레콤-f0b042c179534cd28f9f4b0d5e679e5e"
            );
          }}
        >
          <FlexRow style={{ maxWidth: 500, margin: "0 auto", gap: 14 }}>
            <Avatar src={"/sola_telecom.jpeg"} size={44} />
            <FlexCol style={{}}>
              <div>
                <b>솔라텔레콤</b>
              </div>
              <div>석촌동 ∙ 휴대폰판매</div>
            </FlexCol>
          </FlexRow>
        </Card>
      </Wrapper>

      <Wrapper>
        <Card
          hoverable
          bordered
          cover={
            <img
              src={"/naver_blog.png"}
              alt="네이버블로그"
              style={{
                maxWidth: 560,
                margin: "0 auto",
                padding: 20,
                boxSizing: "border-box",
              }}
            />
          }
          style={{
            width: "100%",
            maxWidth: 600,
            minWidth: 300,
            margin: "0 auto",
          }}
          headStyle={{ padding: 20 }}
          bodyStyle={{ width: "100%" }}
          onClick={() => {
            window.open(
              "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=cu%E3%85%85%E3%85%8A%E3%84%B1%E3%85%82%E3%84%B9%E3%85%88&oquery=cy%E3%85%85%E3%85%8A%E3%84%B1%E3%85%82%E3%84%B9%E3%85%88&tqi=i7gVpsp0YidssRCmMS4ssssssId-476171"
            );
          }}
        >
          <Card.Meta description={"네이버 후기 보러가기"} />
        </Card>
      </Wrapper>

      <Wrapper>
        <Card
          hoverable
          bordered
          cover={
            <img
              src={"/naver_map.png"}
              alt="네이버지도"
              style={{
                maxWidth: 560,
                margin: "10 auto",
                padding: 20,
                boxSizing: "border-box",
              }}
            />
          }
          style={{
            width: "100%",
            maxWidth: 600,
            minWidth: 300,
            margin: "0 auto",
          }}
          headStyle={{ padding: 20 }}
          bodyStyle={{ width: "100%" }}
          onClick={() => {
            window.open(
              "https://map.naver.com/v5/search/%EC%84%9D%EC%B4%8C%20%ED%9C%B4%EB%8C%80%ED%8F%B0%EB%8F%84%EB%A7%A4/place/1008384085?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh"
            );
          }}
        >
          <Card.Meta
            description={"서울 송파구 백제고분로33길 9 1층 휴대폰도매#"}
          />
        </Card>
      </Wrapper>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;

  padding: 10px 20px;
  box-sizing: border-box;
`;

const Background = styled.div`
  position: relative;
  background-image: url("/sola_telecom.jpeg");
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;

  filter: opacity(0.3);
  margin-bottom: 32px;
`;

const TextWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.div`
  width: 100%;

  font-size: 32px;
  /* margin-top: 64px;
  margin-bottom: 32px; */
  font-family: "Orbit", sans-serif;
  font-weight: 800;
  white-space: pre-line;
  text-align: center;
`;

const SubText = styled.div`
  font-size: 12px;
  color: black;
  white-space: pre-line;
  max-width: 600px;
  line-height: 28px;
  font-weight: 600;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
