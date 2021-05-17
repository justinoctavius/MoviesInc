import Layout from '../../components/layouts';
import { DetailsScreen } from '../../components/screens';
import { movieApi } from '../../api';

const Details = ({ data, credits, similar }) => {
  return (
    <Layout>
      <DetailsScreen data={data} credits={credits} similar={similar} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const data = await movieApi.getDetails(id, context.query?.lang);
  const credits = await movieApi.getCredits(id, context.query?.lang);
  const similar = await movieApi.getSimilar(id, context.query?.lang);

  return {
    props: { data: data, credits: credits.payload, similar: similar.payload },
  };
};

export default Details;
