import React, { useState } from 'react'
import "./Formulario.css"

export const Formulario = () => {
  const [selecionado, setSelecionado] = useState(1);

  const inicio = 0;
  const fin = 10;
  const numeros = Array.from({length: fin - inicio + 1}, (_,i) =>inicio +i)

  return (

    <div className ="contenedor">
      <div className ="header">
        <h1 className= "text">Registro Hotel</h1>
        <div className='underline'></div>
      </div>

      <div className='entradas'>
        <div className='entrada'>
          <label htmlFor="identificacion" id='identificacion'>Identificación</label>
          <input type="text" />
        </div>
      
        <div className='entrada'>
          <label htmlFor="nombres" id='nombres'>Nombres</label>
          <input type="text" />
        </div>

        <div className='entrada'>
          <label htmlFor="apellidos" id='apellidos'>Apellidos</label>
          <input type="text" />
        </div>

        <div className='entrada'>
          <label htmlFor="telefono" id='telefono'>telefono</label>
          <input type="text" />
        </div>

        <div className='entrada'>
          <label htmlFor="habitacion" id='habitacion'>Habitación</label>
          <input type="text" />
        </div>

        <div className='entrada'>
          <label htmlFor="rh" id='rh'>RH</label>
          <select
            id=' numeros'
            value={selecionado}
            onChange={(e) => setSelecionado(e.target.value)}
            >
              {numeros.map((num) =>(
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
        </div>

        <div className='entrada'>
          <label htmlFor="fechae">Fecha De Entrada</label>
          <input type="date" />
        </div>
        
        <div className='entrada'>
          <label htmlFor="fechas">Fecha De Salida</label>
          <input type="date" />
        </div>
      </div>
      <div className="enviar">
        <div className="registrar">Registrar</div>
        <div className="cancelar">Cancelar</div>
      </div>

    </div>


)
}

export default Formulario
