import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.p`
  ${({ theme }) => css`
    ${theme.typography.body2};
    color: ${theme.color.gray500};
    text-align: center;
  `}
`;
