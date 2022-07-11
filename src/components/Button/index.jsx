import * as S from "./styles";

export function Button({
  children,
  onClick,
  disabled = false,
  size,
  ...props
}) {
  return (
    <S.Wrapper onClick={onClick} disabled={disabled} size={size} {...props}>
      {children}
    </S.Wrapper>
  );
}
