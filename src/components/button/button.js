import './button.css'
const getLabel = (label) => {
    alert(`A label desse botao é "${label}"`)
}

const Button = ({ label }) => {
    return <button className='btn' onClick={() => getLabel(label)}>clique aqui</button>
}

export default Button