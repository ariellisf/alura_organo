import './AddButton.css'

const AddButton = (props) => {
  return(
    <button className='button'>{props.children}</button>
  )
}

export default AddButton