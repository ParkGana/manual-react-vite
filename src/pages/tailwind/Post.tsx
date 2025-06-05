import PostList from '../../components/tailwind/post/PostList';

const TailwindPostPage = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-8 p-10 m-auto">
      <h1 className="text-title1 text-center">POST LIST</h1>
      <PostList />
    </div>
  );
};

export default TailwindPostPage;
