
import './bookcard.css'

import { ReactNode, Suspense } from 'react';

import { Flex } from '../../../foundation/components/Flex';
import { ImageRender } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { Color, Space, Typography } from '../../../foundation/styles/variables';
import { useBook } from '../hooks/useBook';

type Book = Awaited<ReturnType<typeof useBook>>["data"];

type BookCardInfo = {
  name: string;
  image: {
    alt: string;
    id: string;
  },
  author: {
    name: string,
    image: {
      id: string,
    }
  }
}

type Props = {
  bookId: string;
  bookData?: BookCardInfo;
};


const Wrapper:React.FC<{href: string, children: ReactNode}> = ({ href, children }) => {
  return (
    <Link to={href} className="bookcard-wrapper">
      {children}
    </Link>
  );
};

const ImgWrapper: React.FC<{ children: ReactNode}> = ({ children }) => {
  return <div className="bookcard-imgWrapper">{children}</div>;
};

const AvatarWrapper: React.FC<{ children: ReactNode}> = ({ children }) => {
  return <div className="bookcard-avatarWrapper">{children}</div>;
};

// @ts-ignore
const BookCard: React.FC<Props>= async({ bookId, bookData }) => {
  let book: BookCardInfo;
  if (!bookData) {
    console.log('BookCard:fetch')
    const data = await useBook({ params: { bookId } });
    book = data.data
  } else {
    book = bookData
  }
  return (
    <Wrapper href={`/books/${bookId}`}>
        <ImgWrapper>
          <ImageRender alt={book.image.alt} height={128} objectFit="cover" width={192} canvas={{ height: 128, imageId: book.image.id, width: 192 }}/>
        </ImgWrapper>
      <Flex align="stretch" direction="column" flexGrow={1} gap={Space * 1} justify="space-between" p={Space * 2}>
        <Text color={Color.MONO_100} typography={Typography.NORMAL14} weight="bold">
          {book.name}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
            <AvatarWrapper>
              <ImageRender alt={book.author.name} height={32} objectFit="cover" width={32} canvas={{ height: 32, imageId: book.author.image.id, width: 32 }}/>
            </AvatarWrapper>
          <Text color={Color.MONO_100} typography={Typography.NORMAL12}>
            {book.author.name}
          </Text>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

const BookCardWithSuspense: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={null}>
      <BookCard {...props} />
    </Suspense>
  );
};

export { BookCardWithSuspense as BookCard };