import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'


const CrudForm = () => {
  const [formData, setFormData] = useState({
      nome : '',
      email : '',
      telefone : ''
    })

    const navigator = useNavigate()

    const handleSubmit = async (event) => {
      event.preventDefault();
       
      const response = await fetch('http://localhost:3004/contatos/',
        { method: 'POST',
          body: JSON.stringify(formData),
          headers: {"Content-type": "application/json; charset=UTF-8"}    
        });
    
        if (response.ok) {
          setFormData({
            nome: '',
            telefone: '',
            email: ''
          });
          console.log("OKS", response.ok);
          navigator('/');
           
        }   
        else
          console.log('ERRO');   
    
    } 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return<>
  
    <form onSubmit={handleSubmit}>
    <div className="container-fluid formulario">
      <div className="row">
        <div className=" col p-3">
            <div className="row justify-content-center"> 
            <div className="col-10 col-sm-8 col-md-6 col-lg-4"> 
      <label className='form-label' htmlFor="nome">Nome:</label>
      <input type="text" name="nome" onChange={handleChange} value={formData.nome} className='form-control'/>
      <label className='form-label' htmlFor="email">Email:</label>
      <input type="email" name="email" onChange={handleChange} value={formData.email} className='form-control'/>
      <label className='form-label' htmlFor="telefone">Telefone:</label>
      <input type="text" name="telefone" onChange={handleChange} value={formData.telefone} className='form-control'/>
      <input type="submit" value="Mandar" />
      <Link to={'/'}>Cancelar</Link>
      </div>
      </div>
      </div>
      </div>
      </div>
    </form>
  </>
}

export {CrudForm};