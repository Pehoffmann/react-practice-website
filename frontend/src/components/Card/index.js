import "./style.css";
const Card = (props) => {
  const { title, description } = props;
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </article>
  );
};
export default Card;
