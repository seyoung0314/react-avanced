import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Chat from "../Chat/chat";

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: "/:roomCode",
    element: <Chat />,
  },
]);

export default router;
