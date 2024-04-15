import {ReactNode} from 'react';

import { BreakPoint, Color } from '../styles/variables';

const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  width: '100%',
  margin: '0 auto',
  maxWidth: `${BreakPoint.MOBILE}px`,
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: 'auto 1fr auto',
  backgroundColor: Color.MONO_A,
  borderLeft: `1px solid ${Color.MONO_30}`,
  borderRight: `1px solid ${Color.MONO_30}`,
};

// Container コンポーネントの Props の型を定義
interface ContainerProps {
  children: ReactNode; // ReactNode は React 要素の任意の型を受け入れることができます
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div style={containerStyle}>
    {children}
  </div>
);
