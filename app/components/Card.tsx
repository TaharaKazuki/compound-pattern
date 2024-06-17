'use client';

import { createContext, PropsWithChildren, useContext } from 'react';

type CardContextType = {
  post: Post;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a Card Component');
  }
  return context;
};

type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type CardProps = PropsWithChildren<{
  post: Post;
}>;

const Card = ({ post, children }: CardProps) => {
  return (
    <CardContext.Provider value={{ post }}>
      <div className="max-w-sm rounded-2xl shadow-2xl bg-white p-6">
        <div className="px-6 py-4 space-y-3">{children}</div>
      </div>
    </CardContext.Provider>
  );
};

export default Card;

Card.Title = function CardTitle() {
  const { post } = useCardContext();
  return <div className="font-bold text-xl mb-2">{post.title}</div>;
};

Card.Content = function CardContent() {
  const { post } = useCardContext();
  return <p className="text-gray-700 text-base">{post.content}</p>;
};

Card.UserName = function CardUserName() {
  const { post } = useCardContext();
  return <p className="text-gray-700 text-sm text-center">{post.user.name}</p>;
};

Card.Action = function CardAction() {
  return (
    <div className="flex flex-row px-6 pt-4 pb-2 justify-between gap-3">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2">
        Button
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2">
        Cancel
      </button>
    </div>
  );
};
