
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage';
import LoginForm from '../../forms/LoginForm';
import SignupForm from '../../forms/SignupForm';
import Profile from '../../pages/Profile';
import PageNotFound from '../../pages/PageNotFound';
import ProtectedRoute from '../ProtectedRoute';


function App(){
  const business = {
      imageSrc: 'https://csciprojects.us/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
  }
  
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>  
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )

}

export default App;