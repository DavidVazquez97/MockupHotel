import React, { useState } from 'react';
import './Formulario.css';

export const Formulario = () => {
  const [form, setForm] = useState({
    identificacion: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    habitacion: '',
    rh: 1,          // valor inicial del select
    fechaEntrada: '',
    fechaSalida: ''
  });

  const [errors, setErrors] = useState({});

  const inicio = 0;
  const fin = 10;
  const numeros = Array.from({ length: fin - inicio + 1 }, (_, i) => inicio + i);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
    // opcional: limpiar error de ese campo al escribir
    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Reglas de "obligatorio"
    if (!form.identificacion.trim()) newErrors.identificacion = 'La identificación es obligatoria.';
    if (!form.nombres.trim()) newErrors.nombres = 'Los nombres son obligatorios.';
    if (!form.apellidos.trim()) newErrors.apellidos = 'Los apellidos son obligatorios.';
    if (!form.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio.';
    if (!form.habitacion.trim()) newErrors.habitacion = 'La habitación es obligatoria.';
    if (form.rh === '' || form.rh === null || form.rh === undefined) newErrors.rh = 'Selecciona un valor.';
    if (!form.fechaEntrada) newErrors.fechaEntrada = 'La fecha de entrada es obligatoria.';
    if (!form.fechaSalida) newErrors.fechaSalida = 'La fecha de salida es obligatoria.';

    // Reglas adicionales
    if (form.telefono && !/^\d{7,15}$/.test(form.telefono)) {
      newErrors.telefono = 'El teléfono debe contener solo números (7 a 15 dígitos).';
    }

    if (form.fechaEntrada && form.fechaSalida) {
      const entrada = new Date(form.fechaEntrada);
      const salida = new Date(form.fechaSalida);
      if (salida < entrada) {
        newErrors.fechaSalida = 'La fecha de salida no puede ser anterior a la entrada.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegistrar = () => {
    if (!validate()) {
      // Hay errores: no "envía"
      return;
    }
    // ✅ Aquí iría tu lógica de envío (API, etc.)
    console.log('Datos válidos:', form);

    // Ejemplo: limpiar formulario tras “enviar”
    // setForm({
    //   identificacion: '',
    //   nombres: '',
    //   apellidos: '',
    //   telefono: '',
    //   habitacion: '',
    //   rh: 1,
    //   fechaEntrada: '',
    //   fechaSalida: ''
    // });
    // setErrors({});
  };

  const handleCancelar = () => {
    setForm({
      identificacion: '',
      nombres: '',
      apellidos: '',
      telefono: '',
      habitacion: '',
      rh: 1,
      fechaEntrada: '',
      fechaSalida: ''
    });
    setErrors({});
  };

  return (
    <div className="contenedor">
      <div className="header">
        <h1 className="text">Registro Hotel</h1>
        <div className="underline"></div>
      </div>

      <div className="entradas">
        <div className="entrada">
          <label htmlFor="identificacion">Identificación</label>
          <input
            id="identificacion"
            name="identificacion"
            type="text"
            value={form.identificacion}
            onChange={onChange}
            className={errors.identificacion ? 'input-error' : ''}
          />
          {errors.identificacion && <span className="error">{errors.identificacion}</span>}
        </div>

        <div className="entrada">
          <label htmlFor="nombres">Nombres</label>
          <input
            id="nombres"
            name="nombres"
            type="text"
            value={form.nombres}
            onChange={onChange}
            className={errors.nombres ? 'input-error' : ''}
          />
          {errors.nombres && <span className="error">{errors.nombres}</span>}
        </div>

        <div className="entrada">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            id="apellidos"
            name="apellidos"
            type="text"
            value={form.apellidos}
            onChange={onChange}
            className={errors.apellidos ? 'input-error' : ''}
          />
          {errors.apellidos && <span className="error">{errors.apellidos}</span>}
        </div>

        <div className="entrada">
          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            name="telefono"
            type="text"
            value={form.telefono}
            onChange={onChange}
            className={errors.telefono ? 'input-error' : ''}
          />
          {errors.telefono && <span className="error">{errors.telefono}</span>}
        </div>

        <div className="entrada">
          <label htmlFor="habitacion">Habitación</label>
          <input
            id="habitacion"
            name="habitacion"
            type="text"
            value={form.habitacion}
            onChange={onChange}
            className={errors.habitacion ? 'input-error' : ''}
          />
          {errors.habitacion && <span className="error">{errors.habitacion}</span>}
        </div>

        <div className="entrada">
          <label htmlFor="rh">RH</label>
          <select
            id="rh"
            name="rh"
            value={form.rh}
            onChange={onChange}
            className={errors.rh ? 'input-error' : ''}
          >
            {numeros.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors.rh && <span className="error">{errors.rh}</span>}
        </div>

        <div className="entrada">
          <label htmlFor="fechaEntrada">Fecha De Entrada</label>
          <input
            id="fechaEntrada"
            name="fechaEntrada"
            type="date"
            value={form.fechaEntrada}
            onChange={onChange}
            className={errors.fechaEntrada ? 'input-error' : ''}
          />
          {errors.fechaEntrada && <span className="error">{errors.fechaEntrada}</span>}
        </div>

        <div className="entrada">
          <label htmlFor="fechaSalida">Fecha De Salida</label>
          <input
            id="fechaSalida"
            name="fechaSalida"
            type="date"
            value={form.fechaSalida}
            onChange={onChange}
            className={errors.fechaSalida ? 'input-error' : ''}
          />
          {errors.fechaSalida && <span className="error">{errors.fechaSalida}</span>}
        </div>
      </div>

      <div className="enviar">
        <button className="registrar" onClick={handleRegistrar}>Registrar</button>
        <button className="cancelar" onClick={handleCancelar} type="button">Cancelar</button>
      </div>
    </div>
  );
};

export default Formulario;