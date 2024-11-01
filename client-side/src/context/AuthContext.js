'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token =localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const login = async (email,password) => {
    try{
        const response= await axios.post('https://deploy-guide-u.vercel.app/api/login/', { "email": email, "password":password });
        const token = response.data.token 
        router.push('/colleges');
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        
    } catch(error){
        if (error.response.data){
        console.log(error.response.data);
        }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/');
    setIsLoggedIn(false);
  };
   const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
