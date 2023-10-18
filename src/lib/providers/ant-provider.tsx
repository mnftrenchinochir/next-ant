'use client';
import { type PropsWithChildren, useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, ThemeConfig } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';

export const theme: ThemeConfig = {
  hashed: false,
  token: {
    fontSize: 16,
    fontFamily: 'inherit',
    colorText: '#242424',
    colorTextDisabled: '#F0F2F6',
    colorPrimary: '#ED3237',
    colorSuccess: '#00ff00',
    colorWarning: '#2BC128',
    colorError: '#FFB119',
    colorInfo: '#FB2047',
    colorSplit: '#C9CCCF',
  },
};

export const RootStyleRegistry = ({ children }: PropsWithChildren) => {
  const [cache] = useState(() => createCache());
  useServerInsertedHTML(() => <style dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />);

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider prefixCls="x" theme={theme}>
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};
