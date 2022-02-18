import Body from "../components/Body";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import ContactUs from "../components/EmailForm";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { MainSEO } from "../next-seo.config";
import Head from "next/head";

interface Props {
  theme: any;
  changeTheme: () => void;
}

const Home: React.FC<Props> = ({ theme, changeTheme }) => {
  return (
    <Layout theme={theme} changeTheme={changeTheme}>
      <Head>
        <title>Ammar Jussa - Portfolio</title>
      </Head>
      <NextSeo {...MainSEO} />
      <Heading />
      <Body />
      <div id="projects">
        <Projects theme={theme} />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
