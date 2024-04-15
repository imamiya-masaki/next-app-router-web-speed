'use client'

import _ from 'lodash';
import { useState } from 'react';
import { useInterval, useUpdate } from 'react-use';

import ComicViewerCore from '../../../src/features/viewer/components/ComicViewerCore';
import { addUnitIfNeeded } from '../../../src/lib/css/addUnitIfNeeded';

const IMAGE_WIDTH = 1075;
const IMAGE_HEIGHT = 1518;

const MIN_VIEWER_HEIGHT = 500;
const MAX_VIEWER_HEIGHT = 650;

const MIN_PAGE_WIDTH = _.floor((MIN_VIEWER_HEIGHT / IMAGE_HEIGHT) * IMAGE_WIDTH);

const Wrapper: React.FC<{children: React.ReactNode; $maxHeight: number | string}> = ({ children, $maxHeight }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '100%',
    maxHeight: addUnitIfNeeded($maxHeight),
    overflow: 'hidden',
  }}>
    {children}
  </div>
);

type Props = {
  episodeId: string;
};

export const ComicViewer: React.FC<Props> = ({ episodeId }) => {
  // 画面のリサイズに合わせて再描画する
  const rerender = useUpdate();
  useInterval(rerender, 0);

  const [el, ref] = useState<HTMLDivElement | null>(null);

  // コンテナの幅
  const cqw = (el?.getBoundingClientRect().width ?? 0) / 100;

  // 1画面に表示できるページ数（1 or 2）
  const pageCountParView = 100 * cqw <= 2 * MIN_PAGE_WIDTH ? 1 : 2;
  // 1ページの幅の候補
  const candidatePageWidth = (100 * cqw) / pageCountParView;
  // 1ページの高さの候補
  const candidatePageHeight = (candidatePageWidth / IMAGE_WIDTH) * IMAGE_HEIGHT;
  // ビュアーの高さ
  const viewerHeight = _.clamp(candidatePageHeight, MIN_VIEWER_HEIGHT, MAX_VIEWER_HEIGHT);

  return (
    <div style={{ position: 'relative' }} ref={ref}>
      <Wrapper $maxHeight={viewerHeight}>
        {/*/ //@ts-expect-error */}
        <ComicViewerCore episodeId={episodeId} />
      </Wrapper>
    </div>
  );
};
