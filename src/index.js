import ReactDOM from 'react-dom'

// CSS
import './index.css'

// Setup
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81V8R5aqDYL._AC_UL200_SR200,200_.jpg',
  imgAlt: 'American Marxism',
  author: 'Mark R Levin',
  title: 'American Marxism',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg',
  imgAlt: 'Atomic Habits',
  author: 'James Clear',
  title:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
}

const BookList = () => {
  return (
    <>
      <header></header>
      <section className='booklist'>
        <Book
          img={firstBook.img}
          imgAlt={firstBook.imgAlt}
          author={firstBook.author}
          title={firstBook.title}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            aliquam facere! Dignissimos veniam necessitatibus repudiandae neque
            iure cumque id blanditiis!
          </p>
        </Book>
        <Book
          img={secondBook.img}
          imgAlt={secondBook.imgAlt}
          author={secondBook.author}
          title={secondBook.title}
        />
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
