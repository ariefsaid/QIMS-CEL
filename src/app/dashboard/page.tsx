// src/app/dashboard/page.tsx

'use client';

import withAuth from '../../components/withAuth';
import useAuth from '../../hooks/useAuth';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user?.email}</p>
      <button 
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default withAuth(DashboardPage);
