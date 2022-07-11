import styled, { css } from "styled-components";

const wrapperModifiers = {
  small: (theme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
};

export const Wrapper = styled.button`
  ${({ theme, disabled, size }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: ${disabled ? "gray" : theme.colors.primary};
    border: 0;
    border-radius: 1rem;
    cursor: ${disabled ? "not-allowed" : "pointer"};
    font-weight: 700;
    font-size: 2.4rem;
    padding: 0.8rem 2.2rem;
    text-decoration: none;
    letter-spacing: 1px;

    ${!!size && wrapperModifiers[size](theme)};

    &:focus {
      box-shadow: 0 0 0 3px lightgray;
    }
  `}
`;
