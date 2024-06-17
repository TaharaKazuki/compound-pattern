'use client';
import Card from './components/Card';

const dummyPostData = {
  id: 1,
  title: 'タイトル',
  content: 'サンプルコンテンツ',
  user: {
    id: 10,
    name: 'ユーザー1',
  },
};

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-sky-200">
      <Card post={dummyPostData}>
        <Card.Title />
        <Card.Content />
        <Card.UserName />
        <Card.Action />
      </Card>
    </main>
  );
}
