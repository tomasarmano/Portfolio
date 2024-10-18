import './presentation.css'
import foto from '../../assets/foto.jpg'


const Presentation = () => {
  return (
    <div className="presentacion">
        <img className='img' src={foto} width={80} />
        <h1 className="titulo">Hola, soy Tomas Armano</h1>
        <p className="txt">Estudiante, apasionado por el aprendizaje y la tecnologia</p>
        <span className="disponibilidad">Disponible para trabajar</span>
    </div>
  )
}

export default Presentation