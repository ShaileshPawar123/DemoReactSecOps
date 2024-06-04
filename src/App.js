import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome  <Employee/> </h1>
        <Post/>
      </header>
    </div>
  );
}

export default App;
