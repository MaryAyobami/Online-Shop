import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home'
import AdminUpload from './AdminUpload'
import Checkout from './Checkout'

class AppRouter extends Component {
    render() {
      return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home/>  
            }
             />    
        <Route path="/admin/upload" element={
            <AdminUpload  />  
            }
             />  
        <Route 
            path="/user/checkout"
            element={
                <Checkout/>
            }
        />
        </Routes>
        </BrowserRouter>
      )
    }
  }
  
  export default AppRouter