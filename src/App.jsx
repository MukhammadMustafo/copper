
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import { Context } from './components/Context/Context';
import About from './components/pages/about/About';
import Buy from './components/pages/buy/Buy';
import Catalog from './components/pages/catalog/Catalog';
import Catalog__product from './components/pages/catalog/catalog_product/Catalog__product';
import Home from './components/pages/home/Home';
import News from './components/pages/news/News';
import News_inside from './components/pages/news/news-inside/News_inside'
import NotFound from './components/pages/NotFound/NotFound';
import Succefull from './components/pages/succefull/Succefull';

function App() {
  const local = useLocation()
  const {userId} = useParams()
  let navig = local.pathname.split('/catalog/').join('') 
  const {number, setNumber} = useContext(Context)
  useEffect(()=>{
    setNumber(navig)
  }, [navig])
  const alona = '/catalog/' + number
  const {page, setPage} = useContext(Context)
  setPage(alona)
  
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>} />
        <Route path='/catalog' element={<Catalog/>}>
          <Route path=':userId'>
          </Route>
        </Route>
        <Route path={number <= 9? alona : ''} element={<Catalog__product/>} />
        <Route path='/news' element={<News/>}>
          <Route path=':userId'/>
        </Route>
        <Route path='/news-inside' element={<News_inside/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/succefull' element={<Succefull/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
