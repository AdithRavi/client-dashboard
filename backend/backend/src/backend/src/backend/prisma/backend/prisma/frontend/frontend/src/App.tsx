import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });
  }, []);

  return <h1>Dashboard Running</h1>;
}
