import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function ContactoUpdate() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const navigator = useNavigate()
    const {id}= useParams()
    const datos= {
        nome: nome,
        email: email,
        telefone: telefone,
    }

    useEffect (() =>
    {
        axios.get(`http://localhost:3004/contatos/${id}`)
               .then((r) => { 
                 setNome(r.data.nome);
                 setTelefone(r.data.telefone);
                 setEmail(r.data.email);
                }) 
    }, [id]);

    function Update(e){
        e.preventDefault();
        axios.put(`http://localhost:3004/contatos/${id}`, datos)
        .then(navigator('/'))

    }

    return (
    <form>
      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" onChange={(e)=>setNome(e.target.value)} value={nome}/>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <label htmlFor="telefone">Telefone:</label>
      <input type="text" name="telefone" onChange={(e)=>setTelefone(e.target.value)} value={telefone}/>
      {/* <input type="submit" value="Atualizar" onClick={Update()}/> */}
      {/* <button className="Edi" onClick={()=> Update(contacto.id)}>Atualizar</button>  */}
      <button className="Edi" onClick={Update}>Atualizar</button> 

    </form>) 
    }
export {ContactoUpdate}