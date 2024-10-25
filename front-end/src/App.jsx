import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChatBot } from './pages/ChatBot';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/chatbot" element={<ChatBot/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;