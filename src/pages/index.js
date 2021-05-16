import Layout from '../components/layouts';
import { HomeScreen } from '../components/screens';

export default function Home({ nowPlaying, favorites }) {
  return (
    <Layout>
      <HomeScreen nowPlaying={nowPlaying} favorites={favorites} />;
    </Layout>
  );
}

export const getServerSideProps = (context) => {
  const { lang } = context.query;

  return { props: { nowPlaying: {}, favorites: {} } };
};
