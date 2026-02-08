import { Log } from "./Log";
import home from "./home.json";
import dijkstrafinder from "./dijkstrafinder.json"
import piggyhttp from "./piggyhttp.json"
import devhttp from "./devhttp.json"
import spaceSimulation from "./space-simulation.json"


export function ReadLogs(filename : string): Log[] {
	let data
	switch (filename) {
		case "dijkstrafinder.json":
			data = dijkstrafinder
			break;
		case "piggyhttp.json":
			data = piggyhttp
			break;
		case "devhttp.json":
			data = devhttp;
			break;
		case "space-simulation.json":
			data = spaceSimulation;
			break;
	
		default:
			data = home
			break;
	}
	if (!Array.isArray(data)) return [];
	return data.map((item: any) => ({
		commitHash: item.hash ?? '',
		author: item.author ?? '',
		date: item.date ?? '',
		message: item.message ?? ''
	}));
}

export default ReadLogs;

