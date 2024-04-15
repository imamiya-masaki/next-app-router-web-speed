
import type * as CSS from 'csstype';
import React from 'react';

import type { Color, Typography } from '../styles/variables';

// const _Text = .span<{
//   $color: string;
//   $flexGrow?: CSS.Property.FlexGrow;
//   $flexShrink?: CSS.Property.FlexShrink;
//   $typography: string;
//   $weight: string;
// }>`
//   ${({ $typography }) => $typography};
//   color: ${({ $color }) => $color};
//   flex-grow: ${({ $flexGrow }) => $flexGrow};
//   flex-shrink: ${({ $flexShrink }) => $flexShrink};
//   font-weight: ${({ $weight }) => $weight};
// `;

type Props = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  color: Color;
  flexGrow?: CSS.Property.FlexGrow;
  flexShrink?: CSS.Property.FlexShrink;
  id?: string;
  typography: Typography;
  weight?: 'bold' | 'normal';
};

export const Text: React.FC<Props> = ({
  as,
  children,
  color,
  flexGrow,
  flexShrink,
  id,
  typography,
  weight = 'normal',
}) => {
  const styles: React.CSSProperties = {
    color,
    flexGrow,
    flexShrink,
    fontWeight: weight,
    ...typography
  }
  const asDom = as
  const Component = asDom ?? "span"
  return (
    <Component
      style= {
        styles
      }
      id={id}
    >
      {children}
    </Component>
  );
};
