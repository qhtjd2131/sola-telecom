import styled from "@emotion/styled";
import { Avatar, Card, Carousel } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React, { useEffect, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";

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
          bordered
          style={{
            width: "100%",
            height: "90vh",
            // maxWidth: 600,
            // minWidth: 300,
            // margin: "0 auto",
          }}
          bodyStyle={{ width: "100%", height: "100%", padding: 0 }}
        >
          <iframe
            src="https://www.daangn.com/kr/business-profiles/솔라텔레콤-f0b042c179534cd28f9f4b0d5e679e5e"
            frameBorder="0"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Card>
      </Wrapper>

      <Wrapper>
        <Title level={5} style={{ marginBottom: 0 }}>
          네이버
        </Title>
      </Wrapper>

      <Wrapper>
        <Card
          bordered
          style={{
            width: "100%",
            height: "90vh",
          }}
          bodyStyle={{ width: "100%", height: "100%", padding: 0 }}
        >
          <iframe
            src="https://map.naver.com/v5/entry/place/1008384085?placePath=%2Fhome&c=17.41,0,0,0,dh"
            frameBorder="0"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Card>
      </Wrapper>

      <Wrapper>
        <Title level={5} style={{ marginBottom: 0 }}>
          후기
        </Title>
      </Wrapper>
      <Wrapper>
        <FlexCol style={{ gap: 18 }}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src="review_1.png" />}
            onClick={() => {
              window.open("https://blog.naver.com/fg3iuobim/223097333498");
            }}
          >
            <Title style={{ marginTop: 0 }} level={5}>
              평범해지지말것
            </Title>
            <Paragraph>
              제가 작년에 결혼하면서 잠실로 이사를 왔거든요. 원래 수원에 살때는
              거기 유명한 성지 하나 알아서 그냥 찾아볼 것도 없이 가족들 거 다
              거기 가서 하고 그랬었는데 여기 오고나니까 수원까지 가기는 좀 멀고
              동네에 성지 있을 것 같은데 찾기 귀찮아서 미루고 미루고 하다보니까
              이제서야 찾았네요
            </Paragraph>
          </Card>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src="review_2.jfif" />}
            onClick={() => {
              window.open("https://blog.naver.com/hb9828/222877137509");
            }}
          >
            <Title style={{ marginTop: 0 }} level={5}>
              hb9828
            </Title>
            <Paragraph>
              집 근처에 CUㅅㅊㄱㅂㄹㅈ쪽에서 4년만에 핸드폰 구입했습니다!! 평생
              갤럭시만 써서 고민고민하다가 아이폰13으로 바꿨는데요 저는 훨씬
              가볍고 디자인도 예뻐서 대만족 중입니다!!
            </Paragraph>
          </Card>

          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src="review_3.jpg" />}
            onClick={() => {
              window.open("https://blog.naver.com/alls64/222907105426");
            }}
          >
            <Title style={{ marginTop: 0 }} level={5}>
              alls64
            </Title>
            <Paragraph>
              완전 저렴하게 사고갑니다 티비 인터넷까지다 했네요 석촌고분역
              2번출구에서 걸어서 3분정도 걸립니다 위치는 cuㅅㅊㄱㅂㄹㅈ 이라고
              검색하면 잘나옵니다
            </Paragraph>
          </Card>

          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src="review_4.jpg" />}
            onClick={() => {
              window.open("https://blog.naver.com/myfellas01/223073681711");
            }}
          >
            <Title style={{ marginTop: 0 }} level={5}>
              myfellas01
            </Title>
            <Paragraph style={{ whiteSpace: "pre-line" }}>
              {
                "엄청 친절하세요\n당근에서도 엄청 유명하시네요 사람도 많고 저렴하게\n휴대폰 구매 했습니다"
              }
            </Paragraph>
          </Card>

          <Card
            bodyStyle={{
              padding: 10,
            }}
            onClick={() => {
              window.open(
                "https://search.naver.com/search.naver?query=cu%E3%85%85%E3%85%8A%E3%84%B1%E3%85%82%E3%84%B9%E3%85%88"
              );
            }}
          >
            <FlexRow style={{ alignItems: "center", gap: 8 }}>
              <SearchOutlined />
              <Paragraph style={{ margin: 0 }}>
                더 많은 <b>cuㅅㅊㄱㅂㄹㅈ</b> 검색 결과 보러 가기
              </Paragraph>
            </FlexRow>
          </Card>
        </FlexCol>
        {/* <Carousel
          style={{ width: 300, overflow: "auto" }}
          afterChange={() => {}}
        >
          <div>
            <Card style={{ height: 300 }}>1</Card>
          </div>
          <div>
            <Card style={{ height: 300 }}>2</Card>
          </div>
          <div>
            <Card style={{ height: 300 }}>3</Card>
          </div>
        </Carousel> */}
      </Wrapper>
    </Layout>
  );
}

export default App;
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
`;

const Background = styled.div`
  position: relative;
  background-image: url("/sola_telecom.jpeg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;

  filter: opacity(0.3);
  margin-bottom: 32px;
`;

const TextWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
