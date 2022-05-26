import React, { useState } from 'react'
import { auth } from '../../firebase-config'
import '../../App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from '../Login';
import AccountInfo from '../AccountInfo';
import Register from '../Register'



function Account() {

  const logout =   async () => {
    
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={auth.currentUser ? <AccountInfo /> : <Navigate to="/account/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default Account;
