import { Suspense } from 'react';

import invariant from 'tiny-invariant';

import { useBook } from '../../../../../_components/src/features/book/hooks/useBook';
import  EpisodeListItem from '../../../../../_components/src/features/episode/components/EpisodeListItem';
import { useEpisode } from '../../../../../_components/src/features/episode/hooks/useEpisode';
import { Box } from '../../../../../_components/src/foundation/components/Box';
import { Flex } from '../../../../../_components/src/foundation/components/Flex';
import { Separator } from '../../../../../_components/src/foundation/components/Separator';
import { Space } from '../../../../../_components/src/foundation/styles/variables';

import { ComicViewer } from '../../../../../_components/books/episodes/internal/ComicViewer';
import { ActionLayout } from '../../../../../_components/src/foundation/layouts/ActionLayout';

export default async function Page ({params}: {params: {bookId: string, episodeId: string}}){
  const { bookId, episodeId } = params
  invariant(bookId);
  invariant(episodeId);

  const { data: book } = await useBook({ params: { bookId } });
  const episode = await useEpisode({ params: { episodeId } });

  return (
    <ActionLayout>
    <Suspense fallback={<div>Loading...</div>}>
    <Box>
      <section aria-label="漫画ビューアー">
        <ComicViewer episodeId={episode.id} />
      </section>

      <Separator />

      <Box aria-label="エピソード一覧" as="section" px={Space * 2}>
        <Flex align="center" as="ul" direction="column" justify="center">
          {book.episodes.map((episode) => (
            // @ts-expect-error
            <EpisodeListItem key={episode.id} bookId={bookId} episodeId={episode.id} />
          ))}
        </Flex>
      </Box>
    </Box>
    </Suspense>
    </ActionLayout>
  );
};

// export { EpisodeDetailPageWithSuspense as EpisodeDetailPage };
