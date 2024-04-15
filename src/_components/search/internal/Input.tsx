import { Color, Radius, Space } from '../../src/foundation/styles/variables';

// スタイルを JavaScript オブジェクトとして定義
const inputStyle: React.CSSProperties = {
  borderRadius: Radius.X_LARGE,
  width: `calc(100% - ${Space * 2}px)`,
  padding: `${Space * 1}px`,
  border: `2px solid ${Color.MONO_60}`,
};

// Input コンポーネントの Props の型を定義
type Props = JSX.IntrinsicElements['input'];

// Input コンポーネントの定義
export const Input: React.FC<Props> = (props) => {
  return <input style={inputStyle} {...props} placeholder="作品名を入力" />;
};