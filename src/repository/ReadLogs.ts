import { Log } from "./Log";
import data from "./home.json";


export function ReadLogs(filename : string): Log[] {
	if (!Array.isArray(data)) return [];
	return data.map((item: any) => ({
		commitHash: item.hash ?? '',
		author: item.author ?? '',
		date: item.date ?? '',
		message: item.message ?? ''
	}));
}

export default ReadLogs;

