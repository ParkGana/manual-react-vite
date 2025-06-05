import { useState } from 'react';
import { usePost } from '../../../hooks/tanstack/usePost';
import PostItem from './PostItem';
import clsx from 'clsx';

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
      <div className="w-full">
        {currentData.map((post, index) => (
          <PostItem key={post.id} data={post} isLast={index === currentData.length - 1} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          className={clsx('text-body3', currentPage === 1 && 'text-gray-500')}
          disabled={currentPage === 1}
          onClick={moveToPrev}
        >
          이전
        </button>
        <p className="text-body3">{currentPage}</p>
        <button
          className={clsx('text-body3', !hasNextPage && currentPage === data.pages.length && 'text-gray-500')}
          disabled={!hasNextPage && currentPage === data.pages.length}
          onClick={moveToNext}
        >
          다음
        </button>
      </div>
    </>
  );
};

export default PostList;
