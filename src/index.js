import ReactDOM from 'react-dom'

// CSS
import './index.css'

// Setup
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81V8R5aqDYL._AC_UL200_SR200,200_.jpg',
    imgAlt: 'American Marxism',
    author: 'Mark R Levin',
    title: 'American Marxism',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
    imgAlt: 'Atomic Habits',
    author: 'James Clear',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    imgAlt: 'If Animals Kissed Good Night',
    author: 'Ann Whitford Paul',
    title: 'If Animals Kissed Good Night',
  },
]

const BookList = () => {
  return (
    <>
      <header></header>
      <section className='booklist'>
        {books.map((book) => {
          return <Book key={book.id} {...book} />
        })}
      </section>
      <footer></footer>
    </>
  )
}

const Book = (props) => {
  const { img, imgAlt, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt={imgAlt}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  )
}

ReactDOM.render(<BookList />, document.querySelector('#root'))
