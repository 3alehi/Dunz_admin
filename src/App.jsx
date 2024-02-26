import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './_root/pages/Dashboard';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import AdsManagement from './_root/pages/AdsManagement';
import Tickets from './_root/pages/Tickets';
import TicketDetail from './_root/pages/TicketDetail';
import Finantial from './_root/pages/Finantial';
import Conversations from './_root/pages/Conversations';

function App() {
  return (
    <main className="min-h-screen">
      <Routes>
        {/* Public Pages */}
        <Route element={<AuthLayout />}></Route>
        {/* Private Pages */}
        <Route element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/ads-management' element={<AdsManagement />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/tickets/123456' element={<TicketDetail />} />
          <Route path='/finantial' element={<Finantial />} />
          <Route path='/conversations' element={<Conversations />} />
        </Route>
      </Routes>
      
    </main>
  );
}

export default App;
