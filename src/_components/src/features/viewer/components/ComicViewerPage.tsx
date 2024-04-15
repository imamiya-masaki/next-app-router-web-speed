
'use client'

import { useMemo, useRef } from 'react';
import { useAsync } from 'react-use';

import { decrypt } from '../../../image-encrypt/src/decrypt';

import { getImageUrl } from '../../../lib/image/getImageUrl';

const CanvasComponent: React.FC<{ref: any}> = ({ref}) => (
  <canvas 
    ref={ref}
    style={{ 
      height: '100%', 
      width: 'auto', 
      flexGrow: 0, 
      flexShrink: 0,
    }} 
  />
);

type Props = {
  pageImageId: string;
};

export const ComicViewerPage = ({ pageImageId }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useMemo(async () => {
    const image = new Image();
    image.src = getImageUrl({
      format: 'jxl',
      imageId: pageImageId,
    });
    await image.decode();

    const canvas = ref.current!;
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext('2d')!;

    decrypt({
      exportCanvasContext: ctx,
      sourceImage: image,
      sourceImageInfo: {
        height: image.naturalHeight,
        width: image.naturalWidth,
      },
    });

    canvas.setAttribute('role', 'img');
  }, [pageImageId]);

  return <CanvasComponent ref={ref} />;
};
