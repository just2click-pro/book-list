import ReactDOM from 'react-dom'

// Setup
import { books } from './books'
// CSS
import './index.css'

// Components
import Book from './Book'

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

ReactDOM.render(<BookList />, document.querySelector('#root'))
