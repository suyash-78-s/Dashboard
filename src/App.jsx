
import {BrowserRouter,Route, Routes} from "react-router-dom"
// import Home from "./pages/Home"
import AutherTable from "./components/AutherTable"
import ActivityTable from "./components/ActivityTable"
import DayWiseActivity from "./components/DaywiseActivity"
function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<AutherTable/>}/>
              <Route path="/details/email/:name" element={<ActivityTable/>} />
              <Route path="/details/day/:name" element={<DayWiseActivity/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
