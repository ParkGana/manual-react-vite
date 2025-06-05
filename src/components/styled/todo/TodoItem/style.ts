import styled, { css } from 'styled-components';

export const Container = styled.div<{ $isLast: boolean }>`
  ${({ theme, $isLast }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    ${!$isLast && ` border-bottom: 1px solid ${theme.color.gray300}`};
  `}
`;

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

export const Text = styled.p<{ $isCompleted: boolean }>`
  ${({ theme, $isCompleted }) => css`
    ${theme.typography.body2};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 2px solid transparent;
    padding: 12px;
    cursor: pointer;
    ${$isCompleted && `color: ${theme.color.gray500}; text-decoration: line-through;`};
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 12px;
`;
