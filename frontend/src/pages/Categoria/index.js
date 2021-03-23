import { useParams } from "react-router-dom";
import Main from "../../components/Main";
import MainBanner from "../../components/MainBanner";
import Shelf from "../../components/Shelf";
import { clearString, content, firstCharUpper } from "../../Helpers";
import "./style.css";
const Categoria = () => {
  const { categoria } = useParams();
  const { categories, posts } = content;
  const renderCategories = () =>
    categories.map((category) => {
      if (
        !categoria ||
        (categoria !== {} &&
          clearString(categoria) === clearString(category.title))
      ) {
        const { id, title } = category;
        const catPosts = posts.filter((post) => post.cat_id === id);
        return <Shelf title={title} key={id} posts={catPosts} />;
      } else {
        return null;
      }
    });
  return (
    <>
      <small>
        Você está na página{" "}
        {categoria ? `Categorias > ${firstCharUpper(categoria)}` : "Categorias"}
      </small>
      <Main>
        <MainBanner
          title={categoria ? categoria.toUpperCase() : "CATEGORIAS"}
        />
        {renderCategories()}
      </Main>
    </>
  );
};
export default Categoria;
