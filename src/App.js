import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0) 


    return (
      <div>
      <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        height='5px'
        progress={progress}
      />

      <Routes>
        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="general" country="in" category="general"/>} />
        <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="business" country="in" category="business"/>} />
        <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="entertainment" country="in" category="entertainment"/>} />
        <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="general" country="in" category="general"/>} />
        <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="health" country="in" category="health"/>} />
        <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="science" country="in" category="science"/>} />
        <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="sports" country="in" category="sports"/>} />
        <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="technology" country="in" category="technology"/>} />
      </Routes>
      </BrowserRouter>

        {/* <Router>
          <Navbar />
          
          <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="sports"/>
          <Switch>
            <Route path="/"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="general"/></Route>
            <Route path="/business"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="business"/></Route>
            <Route path="/entertainment"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="entertainment"/></Route>
            <Route path="/general"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="general"/></Route>
            <Route path="/health"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="health"/></Route>
            <Route path="/science"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="science"/></Route>
            <Route path="/sports"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="sports"/></Route>
            <Route path="/technology"><News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="technology"/></Route>
          </Switch>
        </Router> */}
      </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
