import { Add, Edit, Home } from "./pages"
import { Layout } from "./components";
import { Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
          <Route path="/add" element={<Add/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App