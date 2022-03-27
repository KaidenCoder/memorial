import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import YoutubeLinks from './components/youtube';

function App() {
  return (
    <div className="App">
      <Layout>
        <YoutubeLinks />
      </Layout>
    </div>
  );
}

export default App;
