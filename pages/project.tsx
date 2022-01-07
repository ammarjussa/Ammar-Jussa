import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px 0;
  width: 100%;
  height: auto;
  align-items: center;
  h1 {
    font-size: 30px;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  margin-top: 40px;
  :nth-child(1) > h1 {
    font-size: 40px;
  }
`;

const ProjectTable = styled.table`
  width: 100%;
  text-align: left;
  th {
    width: 33%;
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    padding-bottom: 20px;
  }
  td {
    width: 100px;
    font-size: 14px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
  }
`;

const Bold = styled.td`
  a {
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
    font-weight: 900;
    color: #dd7834;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    padding-bottom: 3px;
    :hover {
      border-bottom: 2px solid #dd7834;
    }
  }
`;

const Image = styled.img`
  margin: 50px 0 20px 0;
  width: 105%;
  transform: translatex(-2.5%);
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const WebStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
`;
const LeftContent = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("photo.jpg");
  background-repeat: no-repeat;
  background-position: center;
`;
const RightContent = styled.div`
  width: 100%;
`;

const CenterText = styled.div`
  width: 100%;
  padding: 50px 0;
  text-align: center;
  p {
    max-width: 700px;
    margin: 30px auto;
  }
`;

interface Props {
  theme: any;
  changeTheme: () => void;
}

const Forecast: React.FC<Props> = ({ theme, changeTheme }) => {
  return (
    <Layout theme={theme} changeTheme={changeTheme}>
      <Container>
        <TextContent>
          <h1>Coffee By Benjamin</h1>
          <p>
            Coffee by Benjamin is a React Application built for a self roasting
            coffee kit. I built this project from scratch alongside a designer
            with React, GraphQL, and Shopify. This e-commerce application
            required a lot of heavy lifting to create a universal cart and
            overall shopping experience as well as introduce the product and
            include support pages.
          </p>
          <ProjectTable>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Stack</th>
                <th>Live</th>
              </tr>
              <tr>
                <td>Internship</td>
                <td>React</td>

                <Bold>
                  <a href="https://coffeebybenjamin.com/">View Site</a>
                </Bold>
              </tr>
              <tr>
                <td></td>
                <td>GraphQL</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Styled-Components</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Shopify</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Netlify</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </ProjectTable>
        </TextContent>
        <Image src="/photo.jpg" alt="Forecast Application Work in Progress" />
        <TextContent>
          <h1>Project Purpose and Goal</h1>
          <p>
            This project included 3 phases and iterations of the site. Phase 1
            simply allowed users to enter their email to be alerted to when the
            product was released. Phase 2 was quite larger and is designed to
            introduce users to the Coffee By Benjamin product and answer any
            questions they may have. Phase three is by far the largest and most
            complex, as it includes the full shop and cart pages as well as the
            logic and backend that goes along with it. <br />
            <br />I found that the best way to implement these 3 phases without
            having separate versions saved was to incorporate a feature flag
            that will pass the current state that should be displayed and then
            render content conditionally.
          </p>
        </TextContent>
        <WebStack>
          <LeftContent></LeftContent>
          <RightContent>
            <h1>Web Stack and Explanation</h1>
            <p>
              React made the most sense for the web application because it
              required to connect to graphQL and the Shopify-SDK for javascript
              ties into React very smoothly. The Shopify-Buy-SDK was chosen
              because of the ability for the client to modify the products
              without any complex coding knowledge.
            </p>
            <p>
              React hooks and session storage are also used throughout the
              project to maintain the user cart items and allows the cart count
              and other shopping data to be displayed universally without the
              need for Redux. Netlify is also an obvious choice for deployment
              because of its speed and reliability.
            </p>
          </RightContent>
        </WebStack>
        <Image
          src="/photo.jpg"
          alt="Forecast image with differing weather information"
        />
        <CenterText>
          <h1>Problems and Thought Process</h1>
          <p>
            Like most projects, I ran into a few bumps along the way, one
            particularly difficult area was organization and structure of the
            code. Because of this project's size, I realized how important
            maintaining an organized structure would be.
            <br /> <br /> I worked hard to keep components as reusable as
            possible and utilized props for many slight variations. I also used
            styled-components, because the structure of CSS-in-js is much
            clearer and prevents overrides.
          </p>
        </CenterText>
        <Image
          src="/photo.jpg"
          alt="Forecast image with differing weather information"
        />
        <TextContent>
          <h1>Lessons Learned</h1>
          <p>
            I could spend all day describing the lessons that I learned while
            working on this project, but the most important ones involved my
            newfound understanding of React Hooks, Git management, Feature Keys,
            and API integration. As my first large project using React, I
            learned a lot of lessons regarding code structure and organization.
            When I first began, I would write sloppy code and move on, but now I
            know how doing so can come back to bite you; I now spend a lot more
            time refactoring and improving every line I code I write, for the
            best readability and far fewer headaches.
          </p>
        </TextContent>
      </Container>
    </Layout>
  );
};

export default Forecast;
