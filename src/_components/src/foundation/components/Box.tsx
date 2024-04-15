import type * as CSS from 'csstype';
import type { AriaAttributes } from 'react';
import type { Color, Radius } from '../styles/variables';
import { addUnitIfNeeded } from '../../lib/css/addUnitIfNeeded';

type Props = {
  ['aria-label']?: AriaAttributes['aria-label'];
  ['aria-labelledby']?: AriaAttributes['aria-labelledby'];
  as?: keyof JSX.IntrinsicElements;
  backgroundColor?: Color;
  bottom?: number;
  children: React.ReactNode;
  color?: Color;
  flexGrow?: CSS.Property.FlexGrow;
  flexShrink?: CSS.Property.FlexShrink;
  height?: number | string;
  left?: number;
  m?: number;
  maxHeight?: number | string;
  maxWidth?: number | string;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mx?: number;
  my?: number;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  p?: number;
  pb?: number;
  pl?: number;
  position?: CSS.Property.Position;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
  radius?: Radius;
  right?: number;
  top?: number;
  width?: number | string;
};

const addUnits = [
  'bottom', 
  'color', 
  'flex-grow', 
  'flex-shrink', 
  'height', 
  'left', 
  'margin-bottom', 
  'margin-left', 
  'margin-right', 
  'margin-top', 
  'margin', 
  'max-height', 
  'max-width', 
  'overflow-x', 
  'overflow-y', 
  'padding-bottom', 
  'padding-left', 
  'padding-right', 
  'padding-top', 
  'padding', 
  'position', 
  'right', 
  'top', 
  'width'
]


export const Box: React.FC<Props> = (val) => {
  const children = val.children

  // moltutoいい方法あるかもだけど愚直に
  const styles: React.CSSProperties = {
    "backgroundColor": val.backgroundColor,
    "borderRadius": val.radius,
    "bottom": addUnitIfNeeded(val.bottom),
    "color": val.color,
    "flexGrow": val.flexGrow,
    "flexShrink": val.flexShrink,
    "height": addUnitIfNeeded(val.height),
    "left": addUnitIfNeeded(val.left),
    "marginBottom": addUnitIfNeeded(val.my ?? val.mb),
    "marginLeft": addUnitIfNeeded(val.mx ?? val.ml),
    "marginRight": addUnitIfNeeded(val.mx ?? val.mr),
    "marginTop": addUnitIfNeeded(val.my ?? val.mt),
    "margin": addUnitIfNeeded(val.m),
    "maxHeight": addUnitIfNeeded(val.maxHeight),
    "maxWidth": addUnitIfNeeded(val.maxWidth),
    "overflowX": val.overflow ?? val.overflowX as any,
    "overflowY": val.overflow ?? val.overflowY as any,
    "paddingBottom": addUnitIfNeeded(val.py ?? val.pb),
    "paddingLeft": addUnitIfNeeded(val.px ?? val.pl),
    "paddingRight": addUnitIfNeeded(val.px ?? val.pr),
    "paddingTop": addUnitIfNeeded(val.py ?? val.pt),
    "padding": addUnitIfNeeded(val.p),
    "position": val.position,
    "right": addUnitIfNeeded(val.right),
    "top": addUnitIfNeeded(val.top),
    "width": addUnitIfNeeded(val.width),
  }
  const ariaLabel = val['aria-label'];
  const ariaLabeledBy = val["aria-labelledby"]
  const as = val["as"]
  const Component = as ?? "div"
  return (
    <Component
      style={{...styles}}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabeledBy}
      as={as}
    >
      {children}
    </Component>
  );
};
