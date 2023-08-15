import './DropDown.css'

const DropDown = (props) =>{
  
  return(
    <div className='dropDown'>
      <label>{props.label}</label>
      <select onChange={evento => props.changed(evento.target.value)} required={props.obrigatorio} value={props.valor}>
        <option value=""></option>
        {props.itens.map(item => {return <option key={item}>{item}</option>})}
      </select>
    </div>
  )
}

export default DropDown