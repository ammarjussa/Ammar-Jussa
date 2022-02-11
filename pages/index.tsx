import Body from "../components/Body";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import ContactUs from "../components/EmailForm";
import Footer from "../components/Footer";

interface Props {
  theme: any;
  changeTheme: () => void;
}

const Home: React.FC<Props> = ({ theme, changeTheme }) => {
  return (
    <Layout theme={theme} changeTheme={changeTheme}>
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
