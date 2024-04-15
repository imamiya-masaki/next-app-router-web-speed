import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Footer } from '../components/Footer';
import { Color, Space, Typography } from '../styles/variables';
import { SvgIcon } from '../../features/icons/components/SvgIcon';
import { Link } from '../components/Link';
import { Text } from '../components/Text';

import {type ReactNode} from 'react';

const Header: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <header style={{
    padding: `${Space * 2}px`,
    borderBottom: `1px solid ${Color.MONO_0}`,
  }}>
    {children}
  </header>
);

type Props = {
  children?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  
};



export const ActionLayout: React.FC<Props> = ({ children}) => {

  const BackToTopButton: React.FC<{to: string, children: React.ReactNode}> = ({ to, children }) => (
    <Link to={to} style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: `${Space}px`, // Space * 1 を使用
      border: 'none',
      backgroundColor: 'transparent',
    }}>
      {children}
    </Link>
  );
  return (
    <Container>
      <Header>
        <Flex align="center" justify="space-between">
        <BackToTopButton to={'/'}>
            <SvgIcon color={Color.MONO_100} height={32} type="ArrowBack" width={32} />
            <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
            トップへ戻る
            </Text>
        </BackToTopButton>
          {/* {leftContent} */}
          {/* {rightContent}  使わないはず*/} 
        </Flex>
      </Header>

      <Box as="main" height="100%" py={Space * 2}>
        {children}
      </Box>

      <Footer />
    </Container>
  );
};
