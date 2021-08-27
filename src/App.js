import './App.css';
import Headers from './components/Headers/index.tsx';
import SubHeaders from './components/SubHeaders';
import HeaderCategories from './screens/Landing/components/headerCategories';
import Landing from './screens/Landing/index.tsx';

function App() {
  return (
    <div className="App">
      <Headers />
      <SubHeaders />
      <div className="main-landing">
        <HeaderCategories/>
      </div>
      <Landing />
    </div>
  );
}

export default App;
