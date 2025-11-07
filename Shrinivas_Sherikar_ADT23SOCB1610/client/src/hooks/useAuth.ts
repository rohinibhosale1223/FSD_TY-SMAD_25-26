import { useState, useEffect } from 'react';

/**
 * A simple hook to check authentication status from localStorage.
 */
export const useAuth = () => {
  // We use state so the component re-renders when we log out
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userAuthToken'));

  // This effect listens for storage changes (e.g., from other tabs)
  // and updates the state.
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('userAuthToken'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('userAuthToken');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    // We'll navigate in the component itself
  };

  return { isLoggedIn, logout };
};