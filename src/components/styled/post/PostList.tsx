import { useState } from 'react';
import { usePost } from '../../../hooks/tanstack/usePost';
import PostItem from './PostItem';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button<{ $isDisabled: boolean }>`
  ${({ theme, $isDisabled }) => css`
    ${theme.typography.body3};
    ${$isDisabled && `color: ${theme.color.gray500}`};
  `}
`;

const Page = styled.p`
  ${({ theme }) => css`
    ${theme.typography.body3}
  `}
`;

const PostList = () => {
  const {
    fetchPostsQuery: { data, fetchNextPage, hasNextPage, isPending, isError }
  } = usePost();

  const [currentPage, setCurrentPage] = useState(1);

  /* 이전 페이지로 이동 */
  const moveToPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  /* 다음 페이지로 이동 */
  const moveToNext = () => {
    if (hasNextPage && currentPage === data?.pages.length) {
      fetchNextPage();
    }

    setCurrentPage(currentPage + 1);
  };

  const currentData = data?.pages[currentPage - 1]?.data || [];

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <Container>
        {currentData.map((post, index) => (
          <PostItem key={post.id} data={post} isLast={index === currentData.length - 1} />
        ))}
      </Container>
      <PaginationContainer>
        <Button $isDisabled={currentPage === 1} disabled={currentPage === 1} onClick={moveToPrev}>
          이전
        </Button>
        <Page>{currentPage}</Page>
        <Button
          $isDisabled={!hasNextPage && currentPage === data.pages.length}
          disabled={!hasNextPage && currentPage === data.pages.length}
          onClick={moveToNext}
        >
          다음
        </Button>
      </PaginationContainer>
    </>
  );
};

export default PostList;
