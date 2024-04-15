import { SvgIcon } from '../src/features/icons/components/SvgIcon';
import { Text } from '../src/foundation/components/Text';
import { Color, Radius, Space, Typography } from '../src/foundation/styles/variables';

import { HeroImage } from './HeroImage';

// _Wrapperコンポーネントのスタイル
const wrapperStyle = {
  width: `calc(100% + ${Space * 4}px)`,
  marginLeft: `-${Space * 2}px`,
  marginRight: `-${Space * 2}px`,
  marginTop: `-${Space * 2}px`,
  position: 'relative' as any,
};

// _SearchLinkコンポーネントのスタイル
const searchLinkStyle = {
  position: 'absolute' as any,
  right: `${Space * 1}px`,
  top: 0,
  padding: `${Space * 1}px ${Space * 2}px`,
  border: `2px solid ${Color.MONO_A}`,
  borderRadius: Radius.X_LARGE,
  backdropFilter: 'blur(12px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateY(50%)',
};

// Propsの型定義
interface WrapperProps {
  children: React.ReactNode;
}

interface SearchLinkProps {
  href: string;
  children: React.ReactNode;
}


const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div style={wrapperStyle}>{children}</div>;
};

const SearchLink: React.FC<SearchLinkProps> = ({ href, children }) => {
  return <a href={href} style={searchLinkStyle}>{children}</a>;
};

export const CoverSection: React.FC = () => {
  return (
    <Wrapper>
      <HeroImage />
      <SearchLink href="/search">
        <SvgIcon color={Color.MONO_A} height={24} type="Search" width={24} />
        <Text color={Color.MONO_A} typography={Typography.NORMAL16}>
          検索
        </Text>
      </SearchLink>
    </Wrapper>
  );
};
