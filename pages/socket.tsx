import io from "socket.io-client";
import { server } from "./static/links";

const socket = io(server); // Connect to your WebSocket server

export default socket;
