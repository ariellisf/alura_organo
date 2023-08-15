import './TextField.css'

const TextField = (props) => {

  const typing = (evento) =>{
    props.changed(evento.target.value)
  }

  return (
    <div className="textField">
      <label>{props.label}</label>
      <input value={props.valor} onChange={typing} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default TextField