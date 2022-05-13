
import './App.scss';
import Banner from './components/Banner/Banner';
import Header from './components/Nav/Nav';
import Row from './components/Row/Row';
import {
  netflixOriginals,
  trendingNow,
  romance,
  scienceFiction,
  documentary,
  drama,
  family

} from './requests/Request'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row title='Netflix Originals' url={netflixOriginals} largeRow />
      <Row title='Trending Now' url={trendingNow} />
      <Row title='Romance' url={romance} />
      <Row title='Science Fiction' url={scienceFiction} />
      <Row title='Documentary' url={documentary} />
      <Row title='Drama' url={drama} />
      <Row title='Family' url={family} />
    </div>
  );
}

export default App;
