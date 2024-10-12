import {  Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ProductsPage from './Pages/ProductPages';
import ContactPage from './Pages/ContactPage';
import InquiryPage from './Pages/InquiryPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
      </Routes>
    </div>
  );
}

export default App;