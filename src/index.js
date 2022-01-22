import ReactDOM from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <>
      <header></header>
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
      <footer></footer>
    </>
  );
};

const author = "James Clear";

const Book = () => {
  const title =
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg"
        alt="Atomic Habits"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.querySelector("#root"));
