import {Headers} from 'angular2/http';

export class User {
	public roles: string[];
	public languages: string[];

	public spanish = false;
	public english = false;
	public portuguese = false;

	public tourist = false;
	public guide = false;

	constructor(
		public name: string,
		public email: string,
		public phone: string,
		public address: string,
		public medicalConsiderations: string
	) { }
}