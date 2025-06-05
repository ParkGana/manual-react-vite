import styled, { css } from 'styled-components';
import type { theme } from '../../../styles/theme';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    ${theme.typography.titleL};
    border-bottom: 2px solid ${theme.color.gray900};
    padding: 4px;
  `}
`;

export const ColorContainer = styled.div`
  display: flex;
`;

export const Color = styled.div<{ $color: keyof typeof theme.color }>`
  ${({ theme, $color }) => `
    width: 40px;
    height: 40px;
    background-color: ${theme.color[$color]};
  `}
`;

export const TypographyContainer = styled.div``;

export const Typography = styled.p<{ $text: keyof typeof theme.typography }>`
  ${({ theme, $text }) => css`
    ${theme.typography[$text]};
  `}
`;
