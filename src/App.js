import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import YoutubeLinks from './components/youtube';
import HeadingTitle from './components/header';

function App() {
  return (
    <div className="App">
      <Layout>
        <HeadingTitle />
        <YoutubeLinks />
      </Layout>
    </div>
  );
}

export default App;
