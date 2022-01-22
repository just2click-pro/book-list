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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg"
      alt="Atomic Habits"></img>
  );
};

const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      James Clear
    </h4>
  );
};

const Title = () => {
  return (
    <h1>
      Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
    </h1>
  );
};

ReactDOM.render(<BookList />, document.querySelector("#root"));
