import './episodelistitem.css'

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { ImageRender } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Separator } from '../../../foundation/components/Separator';
import { Spacer } from '../../../foundation/components/Spacer';
import { Text } from '../../../foundation/components/Text';
import { Color, Space, Typography } from '../../../foundation/styles/variables';
import { useEpisode } from '../hooks/useEpisode';
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
  <div className="episodeListItemImgWrapper" style={{ width: '96px', height: '96px' }}>
    {children}
  </div>
);

type Props = {
  bookId: string;
  episodeId: string;
};

export default async function EpisodeListItem ({ bookId, episodeId }: {bookId: string, episodeId: string})  {
  const episode  = await useEpisode({ params: { episodeId } });

  return (
    <WrapperComponent>
      <LinkComponent to={`/books/${bookId}/episodes/${episode.id}`}>
        <Spacer height={Space * 1.5} />
        <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
          <ImgWrapperComponent>
            <ImageRender alt={episode.name} height={96} objectFit="cover" width={96} canvas={{ height: 96, imageId: episode.image.id, width: 96 }}/>
          </ImgWrapperComponent>
          <Box width="100%">
            <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
              <Flex align="center" justify="flex-start">
                <Text color={Color.MONO_100} flexShrink={0} typography={Typography.NORMAL16} weight="bold">
                  第{episode.chapter}話
                </Text>
                <Spacer width={Space * 2} />
                <Text color={Color.MONO_80} typography={Typography.NORMAL14} weight="bold">
                  {`- ${episode.name} -`}
                </Text>
              </Flex>
              <Text as="p" color={Color.MONO_80} typography={Typography.NORMAL12}>
                {episode.description}
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
