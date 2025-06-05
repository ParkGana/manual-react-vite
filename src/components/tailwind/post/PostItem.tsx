import clsx from 'clsx';
import type { PostType } from '../../../types/postType';

type PostItemProps = {
  data: PostType;
  isLast: boolean;
};

const PostItem = ({ data, isLast }: PostItemProps) => {
  return (
    <div className={clsx('flex flex-col gap-3 px-3 py-10 cursor-pointer', !isLast && 'border-b border-gray-300')}>
      <p className="truncate text-title3">{data.title}</p>
      <p className="truncate text-body3">{data.body}</p>
    </div>
  );
};

export default PostItem;
