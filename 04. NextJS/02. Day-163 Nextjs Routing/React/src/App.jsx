
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from './routes/AppRoutes.jsx';

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
};

export default App;
