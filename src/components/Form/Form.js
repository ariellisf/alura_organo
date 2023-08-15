import { useState } from 'react'
import AddButton from '../AddButton/AddButton'
import DropDown from '../DropDown/DropDown'
import TextField from '../TextField/TextField'
import './Form.css'

const Form = (props) =>{

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const onSave = (event) =>{
    event.preventDefault()
    props.aoColaboradorCadastrado({
      nome, 
      cargo, 
      imagem, 
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }
  return (
  <section className='form'>
    <form onSubmit={onSave}>
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <TextField 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite seu nome"
        valor={nome}
        changed={valor => setNome(valor)}
      />
      <TextField 
        obrigatorio={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        valor={cargo}
        changed={valor => setCargo(valor)}
      />
      <TextField 
        label="Imagem" 
        placeholder="Informe o endereço da imagem" 
        valor={imagem}
        changed={valor => setImagem(valor)}
      />
      <DropDown 
        obrigatorio={true} 
        label="Time" 
        itens={props.times}
        valor={time}
        changed={valor => setTime(valor)}
      />
      <AddButton>Criar Card</AddButton>
    </form>
  </section>
  )
}

export default Form