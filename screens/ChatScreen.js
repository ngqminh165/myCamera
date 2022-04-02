import React, {
	useEffect, 
	useState 
} from "react";
import {
	StyleSheet,
	View,
} from 'react-native';
import { 
	NativeBaseProvider, 
	Text 
} from "native-base";
import SwipeView from "../components/SwipeView";
import io from "socket.io-client";

// Replace this URL with your own socket-io host, or start the backend locally
const socketEndpoint = "https://429f-97-120-68-111.ngrok.io";


export const ChatScreen = () => {
	const [hasConnection, setConnection] = useState(false);
	const [time, setTime] = useState(null);
	const [message, setMessage] = useState(null);

	useEffect(function didMount() {
		const socket = io(socketEndpoint, {
			transports: ["websocket"],
		});

		socket.io.on("open", () => setConnection(true));
		socket.io.on("close", () => setConnection(false));

		socket.on("motion-detect", (data) => {
			console.log(data);
			setMessage(data);
		});

		socket.on("time-msg", (data) => {
			setTime(new Date(data.time).toString());
		});

		return function didUnmount() {
			socket.disconnect();
			socket.removeAllListeners();
		};
	}, []);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#ffffff',
		}
	})

	return (
		<View style={styles.container}>
			{!hasConnection && (
				<>
					<Text style={styles.paragraph}>
						Connecting to {socketEndpoint}...
					</Text>
					<Text style={styles.footnote}>
						Make sure the backend is started and reachable
					</Text>
				</>
			)}

			{hasConnection && (
				<>
					<Text style={[styles.paragraph, { fontWeight: "bold" }]}>
						Server time - Waiting the motion detect
					</Text>
					<Text style={styles.paragraph}>{time}</Text>
					<Text style={styles.paragraph}>{message}</Text>
					<SwipeView />
				</>
			)}
		</View>
	);
}
