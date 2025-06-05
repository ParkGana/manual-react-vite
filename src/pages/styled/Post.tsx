import styled, { css } from 'styled-components';
import PostList from '../../components/styled/post/PostList';

const Wrap = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  margin: 0 auto;
`;

const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.typography.title1};
    text-align: center;
  `}
`;

const StyledPostPage = () => {
  return (
    <Wrap>
      <Title>POST LIST</Title>
      <PostList />
    </Wrap>
  );
};

export default StyledPostPage;
