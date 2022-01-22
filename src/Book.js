const Book = (props) => {
  const { img, imgAlt, title, author } = props

  const onClickHandler = () => {
    alert('Clicked!')
  }

  const onClickHandlerWithParams = (author) => {
    console.log(`Author? ${author}`)
  }

  return (
    <article className='book'>
      <img src={img} alt={imgAlt}></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={onClickHandler}>
        Click Me!
      </button>
      <button type='button' onClick={() => onClickHandlerWithParams(author)}>
        More...
      </button>
    </article>
  )
}

export default Book
