import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home.jsx'
import CreateView from "./views/CreateView.jsx"
import UpdateView from "./views/UpdateView.jsx"

function App() {

  return (
    <>
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/authors' element={<Home />}></Route>
        <Route path='/authors/new' element={<CreateView></CreateView>}></Route>
        <Route path='/author/:id/edit' element={<UpdateView></UpdateView>} ></Route>
      </Routes>
    </>
  )
}

export default App
