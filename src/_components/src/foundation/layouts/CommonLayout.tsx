'use client'

import { type ReactNode } from 'react';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Space } from '../styles/variables';

const Content: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div style={{
    height: '100%',
    padding: `0 ${Space * 2}px`,
  }}>
    {children}
  </div>
);

interface LayoutProps {
  children?: ReactNode; // ReactNode型を使用して、childrenの型を指定します。
}

export const CommonLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
      <Footer />
    </Container>
  );
};
