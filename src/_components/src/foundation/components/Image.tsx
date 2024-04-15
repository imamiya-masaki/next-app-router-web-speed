'use client'

import type * as CSS from 'csstype';

import NextImage from 'next/image'

import { addUnitIfNeeded } from '../../lib/css/addUnitIfNeeded';

import { useAsync } from 'react-use';

import { getImageUrl } from '../../lib/image/getImageUrl';
import { useEffect, useMemo, useState } from 'react';

const useImage = ({ height, imageId, width }: { height: number; imageId: string; width: number }) => {
  const { value } = useAsync(async () => {
    const dpr = window?.devicePixelRatio;

    const img = new Image();
    img.src = getImageUrl({
      format: 'jpg',
      height: height * dpr,
      imageId,
      width: width * dpr,
    });

    await img.decode();

    const canvas = document.createElement('canvas');
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext('2d')!;

    // Draw image to canvas as object-fit: cover
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const targetAspect = width / height;

    if (imgAspect > targetAspect) {
      const srcW = img.naturalHeight * targetAspect;
      const srcH = img.naturalHeight;
      const srcX = (img.naturalWidth - srcW) / 2;
      const srcY = 0;
      ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, width * dpr, height * dpr);
    } else {
      const srcW = img.naturalWidth;
      const srcH = img.naturalWidth / targetAspect;
      const srcX = 0;
      const srcY = (img.naturalHeight - srcH) / 2;
      ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, width * dpr, height * dpr);
    }

    return canvas.toDataURL('image/png');
  }, [height, imageId, width]);

  return value;
};


const ImageComponent: React.FC<{
  src?: string;
  alt?: string;
  $height: number | string;
  $objectFit:CSS.Property.ObjectFit;
  $width: number | string;
  loading:  "eager" | "lazy"
}> = ({ src, alt, $height, $objectFit, $width, loading }) => (
  <img 
    src={src} 
    alt={alt} 
    style={{ 
      objectFit: $objectFit,
      width: addUnitIfNeeded($width),
      height: addUnitIfNeeded($height),
      display: 'block',
    }} 
    loading={loading}
  />

);

type Props = {
  height: number | string;
  objectFit: CSS.Property.ObjectFit;
  width: number | string;
  canvas?: { height: number; imageId: string; width: number }
  src?:string
  alt?:string
} & JSX.IntrinsicElements['img'];

export const ImageRender: React.FC<Props> = ({ height, loading = 'eager', objectFit, width, canvas, src,alt ,...rest }) => {
  const [imageURL, setImageURL] = useState<string | undefined>(src)
  const [dpr, setDpr] = useState<number>(1)

  useEffect(() => {
    setDpr(2)
  },[2])

  const {height: canvasHeight, imageId: canvasImageId, width:canvasWidth} = canvas!
  // useEffect(()=>{(async () => {
  //   const dpr = window.devicePixelRatio;
  //   if (!canvas) {
  //     return;
  //   }
  //   const img = new Image();
  //   const imageurl = getImageUrl({
  //     format: 'jpg',
  //     height: canvasHeight * dpr,
  //     imageId: canvasImageId,
  //     width: canvasWidth * dpr,
  //   });
  //   img.src = imageurl;

  //   await img.decode();

  //   const canvasElement = document.createElement('canvas');
  //   canvasElement.width = canvasWidth * dpr;
  //   canvasElement.height = canvasHeight * dpr;
  //   const ctx = canvasElement.getContext('2d')!;

  //   // Draw image to canvas as object-fit: cover
  //   const imgAspect = img.naturalWidth / img.naturalHeight;
  //   const targetAspect = canvasWidth / canvasHeight;

  //   if (imgAspect > targetAspect) {
  //     const srcW = img.naturalHeight * targetAspect;
  //     const srcH = img.naturalHeight;
  //     const srcX = (img.naturalWidth - srcW) / 2;
  //     const srcY = 0;
  //     ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, canvasWidth * dpr, canvasHeight * dpr);
  //   } else {
  //     const srcW = img.naturalWidth;
  //     const srcH = img.naturalWidth / targetAspect;
  //     const srcX = 0;
  //     const srcY = (img.naturalHeight - srcH) / 2;
  //     ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, canvasWidth * dpr, canvasHeight * dpr);
  //   }

  //   const url =  canvasElement.toDataURL('image/png') ?? imageurl;
  //   setImageURL(url)
  // })()}, [canvasHeight, canvasImageId, canvasWidth]);
  const imageu = getImageUrl({
    format: 'jpg',
    height: canvasHeight * dpr,
    imageId: canvasImageId,
    width: canvasWidth * dpr,
  }) ?? src;
  return  <NextImage
  src={imageu ?? ''}
  alt={alt ?? ''}
  style={ {objectFit,
    display: 'block',}}
    width={Number(width)}
    height={Number(height)}
  loading={loading}
  />

  return <ImageComponent src={imageu} {...rest} $height={height} $objectFit={objectFit} $width={width} loading={loading} />
};
