import { createBrowserRouter } from "react-router-dom";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Timeline />,
    errorElement: 'Deu erro2'
  },
  {
    path: '/status',
    element: <Status />,
  }
])

export default router;