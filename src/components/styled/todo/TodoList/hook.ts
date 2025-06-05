import { useState } from 'react';

export const useTodoList = () => {
  const [updatedItem, setUpdatedItem] = useState<string | null>(null);

  /* 수정할 할 일 변경 */
  const handleChangeUpdatedItem = (id: string | null) => {
    setUpdatedItem(id);
  };

  return {
    updatedItem,
    handleChangeUpdatedItem
  };
};
