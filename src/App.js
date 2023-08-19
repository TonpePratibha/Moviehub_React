
import './App.css';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNav';
import {Routes ,Route, BrowserRouter} from "react-router-dom"
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (<>
  <BrowserRouter>
  <Header/>
  <div className='App'>
    <Routes>
      <Route path="/" Component={Trending} exact/>
      
      <Route path="/movies" Component={Movies} exact/>
      <Route path="/series" Component={Series} />
      <Route path="/search" Component={Search} exact/>
    </Routes>

    
     </div>
  <SimpleBottomNavigation/>
  </BrowserRouter>
  </>
  )
}

export default App;
