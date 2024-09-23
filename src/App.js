 import './App.css';
import Home from './componrnts/home/Home';
    
 
function App() {
  let expenseDate=new Date(2021,3,28);
  let expenseTitle="School Fee";
  let expenseAmount=300;

  return (
    <div className="App" >
      <Home/>
        </div>
  );
}

export default App;
