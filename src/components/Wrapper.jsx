import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Chinese from '../lang/zh-CN.json';
import English from '../lang/en-US.json';

export const Context = React.createContext();

export const local = navigator.language;

let lang;
if (local === 'zh-CN') {
  lang = Chinese;
} else {
  lang = English;
}


const Wrapper = ({ children }) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  // 切换语言
  const selectLanguage = (e) => {
    setLocale(e.target.value);
    if (e.target.value === 'zh-CN') {
      setMessages(Chinese);
    } else {
      setMessages(English);
    }
  };

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
