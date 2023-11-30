import './App.css';
import Person from './Componants/person.jsx';
import Button from './Componants/Button.jsx';
import Header from './Componants/header.jsx';
import List from './Componants/list.jsx';

function App() {
  const itemList = ['apple', 'mango', 'fruit', 'carrot'];
  return (
    <div className="App">
      <h1>Person Componant Example</h1>
      <Person name="Suraj"  age="23" />  
      <Button text="Count me!" onClick={() => console.log("Button clicked")} /> 
      <Header title="Welcome to learn React"  /> 
      <List items={itemList} />
    </div>
  );
}

export default App;
