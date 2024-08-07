import withAuth from '../components/withAuth';
import Layout from '../components/Layout';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </div>
    </Layout>
  );
};

export default withAuth(DashboardPage);
