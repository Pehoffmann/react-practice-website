import MainBanner from "../../components/MainBanner";
import Shelf from "../../components/Shelf";
import Form from "../../components/Form";
import Main from "../../components/Main";
import "./style.css";
import { content } from "../../Helpers";

const Produto = () => {
  const { categories, posts } = content;
  const renderCategories = () => {
    return categories.map((category) => {
      const { id, title } = category;
      const catPosts = posts.filter((post) => post.cat_id === id);
      return <Shelf title={title} key={id} posts={catPosts} />;
    });
  };
  return (
    <Main>
      <MainBanner title="Produto" />
      {renderCategories()}
      <Form />
    </Main>
  );
};

export default Produto;
