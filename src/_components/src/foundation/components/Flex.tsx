import type * as CSS from 'csstype';

import { addUnitIfNeeded } from '../../lib/css/addUnitIfNeeded';

type Props = {
  align: CSS.Property.AlignItems;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  direction?: CSS.Property.FlexDirection;
  flexGrow?: CSS.Property.FlexGrow;
  flexShrink?: CSS.Property.FlexShrink;
  gap?: number;
  justify: CSS.Property.JustifyContent;
  p?: number;
  pb?: number;
  pl?: number;
  position?: CSS.Property.Position;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
};

export const Flex: React.FC<Props> = (val) => {
  const children = val.children
  const as = val["as"]
  const styles: React.CSSProperties = {
    "alignItems": val.align,
    "display": "flex",
    "flexDirection": val.direction,
    "flexGrow": val.flexGrow,
    "flexShrink": val.flexShrink,
    "gap": `${val.gap ?? 0}px`,
    "justifyContent": val.justify,
    "paddingBottom": addUnitIfNeeded(val.py ?? val.pb),
    "paddingLeft": addUnitIfNeeded(val.px ?? val.pl),
    "paddingRight": addUnitIfNeeded(val.px ?? val.pr),
    "paddingTop": addUnitIfNeeded(val.py ?? val.pt),
    "padding": val.p ? addUnitIfNeeded(val.p) : undefined,
  };

  const Component = as ?? "div"
  return (
    <Component
    style={styles}
    >
      {children}
    </Component>
  );
};
