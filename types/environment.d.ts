import { FirebaseOptions } from 'firebase/app';

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MONGODB_URI: string;
		}
	}
}
