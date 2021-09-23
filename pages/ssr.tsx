import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

type Posts = {
  userId: number;
  title: string;
};
const Ssr: NextPage<Posts[]> = (posts) => {
  return (
    <>
      <ul>
        {posts.map((post) => {
          return <li key={post.userId}>{post.title}</li>;
        })}
      </ul>
      <Link href="/">
        <a>戻る</a>
      </Link>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
};
export default Ssr;
