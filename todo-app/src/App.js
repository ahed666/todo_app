import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    
    <div className=" h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <TodoList />

      </div>
    </div>
  );
}

export default App;
