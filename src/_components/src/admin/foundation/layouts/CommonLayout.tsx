import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import {type ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode; // ReactNode型を使用して、childrenの型を指定します。
}

export const CommonLayout: React.FC<LayoutProps> = ({ children }) => {

  const content = children || null;

  return (
    <Flex align="stretch" direction="row" height="100vh" justify="space-between" width="100%">
      <Box bg="gray.100" flexGrow={0} flexShrink={0} p={2} w={200}>
        <Text fontSize="xl" fontWeight="bold" p={2}>
          管理画面
        </Text>
        <nav>
          <Link passHref href="/admin">
            <Text p={2}>ログイン</Text>
          </Link>
          <Link passHref href="/admin/authors">
            <Text p={2}>作者一覧</Text>
          </Link>
          <Link passHref href="/admin/books">
            <Text p={2}>作品一覧</Text>
          </Link>
        </nav>
      </Box>
      <Box flexGrow={1} flexShrink={1} overflowY="auto" p={4}>
        <Box height="100%" marginX="auto" maxWidth="100ch" width="100%">
          { content }
        </Box>
      </Box>
    </Flex>
  );
};
