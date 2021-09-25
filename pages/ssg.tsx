import { GetStaticProps, NextPage } from "next";
import { Cards } from "./components/Cards";

type Props = {
  posts: Array<{ id: string; title: string }>;
};
const Ssg: NextPage<Props> = (props) => {
  const { posts } = props;
  return <Cards posts={posts} title={"SSG"} />;
};
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
};
export default Ssg;
