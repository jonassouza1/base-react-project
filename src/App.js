import P from './components/paragraph/paragraph'
import Button from './components/button/button';
import './App.css';

function App() {
  return (
    <>
      <div>
        <P color='blue' text='Meu primeiro projeto React' />
        <P color='red' text='agora vai 2.0' />
        <P text='agora vai 3.0' />
      </div>
      <div>
        <Button label='React events' />
      </div>

    </>
  )
}

export default App;
