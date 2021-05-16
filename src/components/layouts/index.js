import { Header } from '../common';
import { LanguageProviderWrapper, MovieProviderWrapper } from '../providers';

const Layout = ({ children }) => {
  return (
    <LanguageProviderWrapper>
      <MovieProviderWrapper>
        <Header />
        <div>{children}</div>
      </MovieProviderWrapper>
    </LanguageProviderWrapper>
  );
};

export default Layout;
