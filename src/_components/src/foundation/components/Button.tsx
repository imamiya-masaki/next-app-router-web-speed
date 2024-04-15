// ""font-size: 0.875rem; letter-spacing: 0; line-height: 1.5;""

type Props = {
  children: React.ReactNode;
  addStyle: React.CSSProperties
} & JSX.IntrinsicElements['button'];

export const Button: React.FC<Props> = ({ addStyle, children, ...rest }) => {
  const styleMap: React.CSSProperties = {"fontSize": "0.875rem", "letterSpacing": "0", lineHeight: "1.5", background: "none", border: "none", padding: "0", margin: "0", cursor: "pointer"}
  for (const [key, val] of Object.entries(addStyle)) {
    // @ts-ignore
    styleMap[key] = val as any
  }
  
  const ButtonDom = <button style={styleMap} {...rest}>{children}</button>
  return ButtonDom;
};
