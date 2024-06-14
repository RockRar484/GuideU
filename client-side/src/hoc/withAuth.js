'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    const { getToken } = useAuth();

    useEffect(() => {
      const token = getToken();
      if (!token) {
        router.push('/');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
