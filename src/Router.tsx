import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { OrderConfirmed } from './pages/OrderConfirmed';

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
