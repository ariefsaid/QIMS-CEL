// src/app/admin/page.tsx

'use client';

import withAuth from '../../components/withAuth';
import withRoleAccess from '../../hooks/withRoleAccess';

const AdminPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {/* Admin-specific content */}
    </div>
  );
};

export default withAuth(withRoleAccess(['admin'])(AdminPage));