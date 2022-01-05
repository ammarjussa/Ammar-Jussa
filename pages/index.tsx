import Body from "../components/Body";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

interface Props {
  theme: any;
  changeTheme: () => void;
}

const Home: React.FC<Props> = ({ theme, changeTheme }) => {
  return (
    <Layout theme={theme} changeTheme={changeTheme}>
      <Heading />
      <Body />
      <Projects />
    </Layout>
  );
};

export default Home;
