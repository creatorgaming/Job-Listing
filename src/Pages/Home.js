import { useEffect } from "react";
import { useSocket } from "../SocketContext";
import EVENTS from "../events";

// TODO move update listener above the v-dom tree

function Home() {
	const socket = useSocket();

	useEffect(function addSocketListener() {
		socket.on(EVENTS.CLIENT_POST_UPDATE, onUpdate);

		return function removeListener() {
			socket.off(EVENTS.CLIENT_POST_UPDATE, onUpdate);
		};

		function onUpdate(data) {
			console.log("Hello");
			console.log(data);
		}
	});

	return (
		<>
			<div>Home route</div>
		</>
	);
}

export default Home;
