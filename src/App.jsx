import './App.css';
import Form from './Components/Form';
import logoImage from './Images/LOGOMARCA.png';


function App() {
  return (
    <>
      <div className='logo-container'>
        <img className='logomarca' src={logoImage} alt="logomarca" />
      </div>


      <div className='form-container'>
        <Form />
      </div>
    </>
  );
}

export default App;
