'use client'

import { useEffect, useRef, useState } from 'react';

import { Color } from '../styles/variables';

const Wrapper: React.FC<{ children: React.ReactNode, ref:any }> = ({ children, ref }) => (
  <div style={{ width: '100%' }} ref={ref}>
    {children}
  </div>
);

const SeparatorComponent: React.FC<{ src: string; alt?: string, ariaHidden: any, height: any, width:any }> = ({ src, alt, ariaHidden, height, width }) => (
  <img 
    src={src} 
    alt={alt} 
    style={{ 
      display: 'block', 
      width: '100%', 
      height: '1px' 
    }}
    aria-hidden={ariaHidden}
    height={
      height
    }
    width={
      width
    }
  />
);

export const Separator: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    const width = wrapperRef.current?.clientWidth;

    const canvas = document.createElement('canvas');
    canvas.width = width ?? 0;
    canvas.height = 1;

    const ctx = canvas.getContext('2d');

    if (ctx == null) {
      return;
    }

    ctx.moveTo(0, 0);
    ctx.lineTo(width ?? 0, 0);

    ctx.strokeStyle = Color.MONO_30;
    ctx.lineWidth = 1;

    ctx.stroke();

    setImgUrl(canvas.toDataURL('image/png'));
  }, []);
  if (wrapperRef.current) {
    return (
   
      <Wrapper ref={wrapperRef}>
        {imgUrl != null ? <SeparatorComponent ariaHidden={true} height={1} src={imgUrl} width="100%" /> : null}
      </Wrapper>
    );
  } else {
    return <></>
  }
};
