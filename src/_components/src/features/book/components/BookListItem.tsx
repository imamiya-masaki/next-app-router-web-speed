import './booklist.css'

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { ImageRender } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Separator } from '../../../foundation/components/Separator';
import { Spacer } from '../../../foundation/components/Spacer';
import { Text } from '../../../foundation/components/Text';
import { Color, Space, Typography } from '../../../foundation/styles/variables';
import { useBook } from '../hooks/useBook';
import { useMemo, useState } from 'react';


const WrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <li style={{ width: '100%' }}>
    {children}
  </li>
);

const LinkComponent: React.FC<{to: string; children: React.ReactNode}> = ({ to, children }) => (
  <Link to={to} style={{ width: '100%' }}>
    {children}
  </Link>
);

const ImgWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="booklistitemImgWrapper" style={{ width: '64px', height: '64px' }}>
    {children}
  </div>
);

export default async function BookListItem({ bookId }: {bookId: string}) {
  const { data: book } = await useBook({ params: { bookId } });


  return (
    <WrapperComponent>
      <LinkComponent to={`/books/${book.id}`}>
        <Spacer height={Space * 1.5} />
        <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
        <ImgWrapperComponent>
              <ImageRender alt={book.name} height={64} objectFit="cover" width={64} canvas={{ height: 64, imageId: book.image.id, width: 64 }}/>
            </ImgWrapperComponent>
          <Box width="100%">
            <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
              <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                {book.name}
              </Text>
              <Text as="p" color={Color.MONO_80} typography={Typography.NORMAL12}>
                {book.description}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Spacer height={Space * 1.5} />
        <Separator />
      </LinkComponent>
    </WrapperComponent>
  );
};