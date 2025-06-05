import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    ${theme.typography.body2};
    border: 2px solid ${theme.color.gray300};
    padding: 12px;

    :focus {
      border: 2px solid ${theme.color.gray900};
      outline: none;
    }
  `}
`;
