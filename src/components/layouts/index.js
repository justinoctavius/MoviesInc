import { Header } from '../common';
import MovieProviderWrapper from '../providers';

const Layout = ({ children }) => {
  return (
    <MovieProviderWrapper>
      <Header />
      <div>{children}</div>
    </MovieProviderWrapper>
  );
};

export default Layout;
