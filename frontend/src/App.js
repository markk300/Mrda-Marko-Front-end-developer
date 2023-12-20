
import './App.css';
import { Banner } from './Banner/Banner';
import { Capsules } from './Capsules/Capsules';

import { Header } from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Capsules />
    </div>
  );
}

export default App;
