import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import './crud.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen, faTrashAlt, faUser, faEnvelope, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faTrashAlt, faUser, faPen} from '@fortawesome/free-solid-svg-icons' 
 */
const CrudTable = () => {
  
  const [contactos, setContactos] = useState([]);

  function TableContato() {
    fetch('http://localhost:3004/contatos')
    .then((r) => r.json())
    .then((data) => setContactos(data));

  }
  useEffect(() => {
    TableContato()

  },[] )

  const handleDelete = async (contactosId) => {

    const response = await fetch(`http://localhost:3004/contatos/${contactosId}`,
      { method: 'DELETE'});
  
      if (response.ok) {
        alert('Deseja apagar contato?')
        TableContato();
      }   
      else
        console.log('ERRO');   
  
  } 

  return(
  <div className='container-table'>
    <h3>Contatos</h3>
    <Table striped bordered hover>
      <thead className='thead'>
        <tr>
          <td>Nro</td>
          <td><FontAwesomeIcon icon={faUser}/>Nome</td>
          <td><FontAwesomeIcon icon={faEnvelope}/>Email</td>
          <td><FontAwesomeIcon icon={faPhoneVolume}/>Telefone</td>
          <td></td>
        </tr>
      </thead>
      <tbody className='tbody'>
        {contactos.map((contactos,id) => {
            return (
              <tr key={id}>
                <td>{id+1}</td>
                <td>{contactos.nome}</td>
                <td>{contactos.email}</td>
                <td>{contactos.telefone}</td>
                <td>
                  <Link to={`/CrudUpdate/${contactos.id}`}><FontAwesomeIcon icon={faPen}/>Atualizar</Link>
                  <button className='' onClick={()=> handleDelete(contactos.id)}><FontAwesomeIcon icon={faTrashAlt}/>Eliminar</button>
                </td>
              </tr>
            )
          }) 
        }
      </tbody>        
    </Table>
  </div>)
}

export {CrudTable};