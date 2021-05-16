import { createContext, useState } from 'react';

export const LanguageContext = createContext({});

const LanguageProviderWrapper = ({ children }) => {
  const [language, setLanguage] = useState('en-US');

  const languageValue = {
    setLanguage,
    language,
  };

  return (
    <LanguageContext.Provider value={languageValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProviderWrapper;
