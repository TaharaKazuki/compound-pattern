type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type CardProps = {
  post: Post;
};

const Card = ({ post }: CardProps) => {
  return (
    <div className="max-w-sm rounded-2xl shadow-2xl bg-white p-6">
      <div className="px-6 py-4 space-y-3">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">{post.content}</p>
        <p className="text-gray-700 text-sm text-center">{post.user.name}</p>
      </div>
      <div className="flex flex-row px-6 pt-4 pb-2 justify-between gap-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2">
          Button
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Card;
