import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './SearchContainer';
import Navbar from './Navbar'

function App() {
  return (
    <body className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <SearchContainer />
      </main>
      <footer>
        <h5>Created by: Kawika Miller | https://github.com/KMArtwork/city-explorer </h5>
      </footer>
    </body>
  );
}

export default App;
