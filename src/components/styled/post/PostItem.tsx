import type { PostType } from '../../../types/postType';
import styled, { css } from 'styled-components';

const Container = styled.div<{ $isLast: boolean }>`
  ${({ theme, $isLast }) => `
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 40px 12px;
    cursor: pointer;

    ${!$isLast && `border-bottom: 1px solid ${theme.color.gray300}`};
  `}
`;

const Title = styled.p`
  ${({ theme }) => css`
    ${theme.typography.title3};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

const Body = styled.p`
  ${({ theme }) => css`
    ${theme.typography.body3};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

type PostItemProps = {
  data: PostType;
  isLast: boolean;
};

const PostItem = ({ data, isLast }: PostItemProps) => {
  return (
    <Container $isLast={isLast}>
      <Title>{data.title}</Title>
      <Body>{data.body}</Body>
    </Container>
  );
};

export default PostItem;
