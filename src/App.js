import './App.css';
import Start from './Components/Start'
import Order from './Components/Order';
import { useSelector } from 'react-redux';


function App() {
  const isAuthenticated = useSelector(state => state.isAuthenticated)

  return (
    <div className='App'>
      {isAuthenticated ? <Order /> : <Start/>}
    </div>
  );
}

export default App;
