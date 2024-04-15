import { SvgIcon } from '../../src/features/icons/components/SvgIcon'
import { Color, Space } from '../../src/foundation/styles/variables';
interface ButtonProps {
  $outlined: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // クリックイベントハンドラーも追加可能
}

const Button: React.FC<ButtonProps> = ({ $outlined, children, onClick }) => {

  const style = {
    borderRadius: '50%',
    backgroundColor: $outlined ? Color.MONO_0 : Color.SubFavorite,
    border: 'none',
    padding: `${Space * 1}px`,
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};


type Props = {
  enabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & JSX.IntrinsicElements['button'];

export const FavButton: React.FC<Props> = ({ enabled, onClick }) => {
  return (
    <Button
      $outlined={!enabled}
      aria-label={enabled ? 'お気に入りを解除する' : 'お気に入りに追加する'}
      onClick={onClick}
    >
      <SvgIcon
        color={enabled ? Color.Favorite : Color.MONO_40}
        height={24}
        type={enabled ? 'Favorite' : 'FavoriteBorder'}
        width={24}
      />
    </Button>
  );
};
