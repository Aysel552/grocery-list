import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg'
import { GroceryList } from './GroceryList';

function App() {
  return (
    
    <div className='App'>
      <div className='container'>
        <img className='imageOne' src={image} width="200px" alt='Shopping' />
        </div>
      <div className='container'>
        <h1>Grocery List</h1>
        </div>
      <GroceryList />
      <div className='container'>
        <img className='imageTwo' src={imageTwo} width="200px" alt="Man" />
        </div>
    </div>
  )
      
}

export default App;
