import { movieApi } from '../api';
import Layout from '../components/layouts';
import { HomeScreen } from '../components/screens';

export default function Home({ nowPlaying, favorites }) {
  return (
    <Layout>
      <HomeScreen nowPlaying={nowPlaying} favorites={favorites} />;
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { lang } = context.query;
  const data = await movieApi.getNowPlaying();
  return { props: { nowPlaying: data.payload?.results, favorites: {} } };
};
