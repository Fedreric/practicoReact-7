import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EmpleadoList from './components/EmpleadoList';
import FooterFedeLedesma from  './components/FooterFedeLedesma'
function App() {

  return (
    <>
    <section className='mb-5 mainPage'>
      <h1 className='text-center my-4'>Lista de empleados</h1>
     <EmpleadoList></EmpleadoList>
    </section>
    <FooterFedeLedesma></FooterFedeLedesma>
    </>
  )
}

export default App
