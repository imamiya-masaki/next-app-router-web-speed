import './featurecard.css'
import { Suspense } from 'react';

import { Flex } from '../../../foundation/components/Flex';
import { ImageRender } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';
import { useBook } from '../../book/hooks/useBook';

const WrapperComponent: React.FC<{to: string; children: React.ReactNode}> = ({ to, children }) => (
  <Link to={to} style={{
    display: 'grid',
    gap: `${Space}px`,
    backgroundColor: Color.MONO_A,
    padding: `${Space * 1.5}px`,
    borderRadius: Radius.SMALL,
    gridTemplateColumns: 'auto 1fr',
    flexShrink: 0,
    border: `1px solid ${Color.MONO_30}`,
  }}>
    {children}
  </Link>
);

const ImgWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="FeatureCardImgWrapper" style={{ width: '96px', height: '96px' }}>
    {children}
  </div>
);

const ContentWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div style={{
    display: 'grid',
    gap: `${Space}px`,
    maxWidth: '200px',
    width: '100%',
  }}>
    {children}
  </div>
);

const AvatarWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="FeatureCardAvatarWrapper" style={{ width: '32px', height: '32px' }}>
    {children}
  </div>
);

type FeatureCardBookInfo = {
  name: string;
  description: string;
  image: {
    id: string;
    alt: string;
  }
  author: {
    name: string;
    image: {
      id: string;
    }
  }
}

type Props = {
  bookId: string;
  bookData?: FeatureCardBookInfo;
};

export default async function FeatureCard ({ bookId, bookData }: Props){
  let book: FeatureCardBookInfo;
  if (!bookData) {
    console.log('RankingCard:fetch')
    const data = await useBook({ params: { bookId } });
    book = data.data
  } else {
    book = bookData
  }

  return (
    <Suspense fallback={null}>
    <WrapperComponent to={`/books/${bookId}`}>
        <ImgWrapperComponent>
          <ImageRender alt={book.image.alt} height={96} objectFit="cover" width={96} canvas={{ height: 96, imageId: book.image.id, width: 96 }}/>
        </ImgWrapperComponent>

      <ContentWrapperComponent>
        <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
          {book.name}
        </Text>
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL14}>
          {book.description}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
            <AvatarWrapperComponent>
              <ImageRender alt={book.author.name} height={32} objectFit="cover" width={32} canvas={{ height: 32, imageId: book.author.image.id, width: 32 }}/>
            </AvatarWrapperComponent>
          <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
            {book.author.name}
          </Text>
        </Flex>
      </ContentWrapperComponent>
    </WrapperComponent>
    </Suspense>
  );
};