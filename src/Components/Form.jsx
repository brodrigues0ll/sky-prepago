/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import '../Styles/Form.css';
import arrowDown from '../Images/down-arrow.svg';
import arrowUp from '../Images/up-arrow.svg';

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cel, setCel] = useState('');
  const [civil, setCivil] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');


  const dropdownValue = document.querySelector('.dropdown');

  function optionDropdown(e) {
    dropdownValue.innerHTML = e.target.textContent;
    setIsOpen(false);
    setCivil(e.target.textContent);
  }

  function cepAutoComplete(e) {
    setCep(e.target.value.replace(/[^0-9]/g, ''));
  }

  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setUf(data.uf);
        setCidade(data.localidade);
        setBairro(data.bairro);
        setEndereco(data.logradouro);
      });
  }, [cep]);

  return (
    <form action="">
      <label htmlFor="">{`CPF:`}</label>
      <InputMask
        mask="999.999.999-99"
        placeholder='123.456.789-10'
        className='form-control'
        onChange={(e) => setCpf(e.target.value.replace(/[^0-9]/g, ''))}
      />

      <label htmlFor="">{`Identidade (RG):`}</label>
      <InputMask
        mask="99.999.999-9"
        placeholder='12.345.678-9'
        className='form-control'
        onChange={(e) => setRg(e.target.value.replace(/[^0-9]/g, ''))}
      />

      <label htmlFor="">{`Telefone para contato:`}</label>
      <InputMask
        mask="(99) 99999-9999"
        placeholder='(12) 9 1234-5678'
        className='form-control'
        onChange={(e) => setCel(e.target.value.replace(/[^0-9]/g, ''))}
      />


      <label htmlFor="">{`Estado Civil:`}</label>

      <button
        type='button'
        className='form-control dropdown'
        onClick={() => setIsOpen(!isOpen)}>



        Selecione
        {isOpen ? <img src={arrowUp} alt="" className='up-arrow' />
          : <img src={arrowDown} alt="arrow down" />}

      </button>
      {isOpen &&
        <section>
          <p onClick={optionDropdown}>{`Solteiro(a)`}</p>
          <p onClick={optionDropdown}>{`Casado(a)`}</p>
          <p onClick={optionDropdown}>{`Divorciado(a)`}</p>
          <p onClick={optionDropdown}>{`Viúvo(a)`}</p>
        </section>
      }



      <label htmlFor="">{`Email:`}</label>
      <input
        placeholder='usuario@usuario.com'
        type="email"
        className='form-control'
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="">{`CEP:`}</label>
      <InputMask
        mask="99999-999"
        placeholder='12345-678'
        className='form-control'
        onChange={cepAutoComplete}
      />

      <label htmlFor="">{`Estado (UF):`}</label>
      <input
        value={uf}
        placeholder='RJ'
        type="text"
        className='form-control'
        onChange={(e) => setUf(e.target.value)}
      />

      <label htmlFor="">{`Cidade:`}</label>
      <input
        value={cidade}
        placeholder='Cidade'
        type="text"
        className='form-control'
        onChange={(e) => setCidade(e.target.value)}
      />

      <label htmlFor="">{`Bairro:`}</label>
      <input
        value={bairro}
        placeholder='Bairro'
        type="text"
        className='form-control'
        onChange={(e) => setBairro(e.target.value)}
      />


      <label htmlFor="">{`Endereço:`}</label>
      <input
        value={endereco}
        placeholder='Rua/Avenida Pedro Alvares Cabral'
        type="text"
        className='form-control'
        onChange={(e) => setEndereco(e.target.value)}
      />

      <label htmlFor="">{`Número:`}</label>
      <input
        placeholder='123'
        type="number"
        className='form-control'
        onChange={(e) => setNumero(e.target.value)}
      />

      <button
        className='btn'
        disabled
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;