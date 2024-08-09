// src/hooks/withRoleAccess.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from './useAuth';

const withRoleAccess = (allowedRoles: string[]) => (Component: React.ComponentType) => {
  const RoleAuth = (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (user && !allowedRoles.includes(user.role)) {
        router.push('/unauthorized');
      }
    }, [user, router]);

    return user && allowedRoles.includes(user.role) ? <Component {...props} /> : null;
  };

  return RoleAuth;
};

export default withRoleAccess;