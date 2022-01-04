import Body from "../components/Body";
import Heading from "../components/Heading";
import Layout from "../components/Layout";

interface Props {
  changeTheme: () => void;
}

const Home: React.FC<Props> = ({ changeTheme }) => {
  return (
    <Layout changeTheme={changeTheme}>
      <Heading />
      <Body />
    </Layout>
  );
};

export default Home;
