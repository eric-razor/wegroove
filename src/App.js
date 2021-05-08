
import Login from './components/Login'


const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI} = process.env

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
