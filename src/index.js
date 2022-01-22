import ReactDOM from 'react-dom'

// CSS
import './index.css'

// Setup
const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81V8R5aqDYL._AC_UL200_SR200,200_.jpg',
    imgAlt: 'American Marxism',
    author: 'Mark R Levin',
    title: 'American Marxism',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
    imgAlt: 'Atomic Habits',
    author: 'James Clear',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  },
]

const BookList = () => {
  return (
    <>
      <header></header>
      <section className='booklist'>
        {books.map((book) => {
          const { img, imgAlt, author, title } = book
          return (
            <Book img={img} imgAlt={imgAlt} author={author} title={title} />
          )
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
