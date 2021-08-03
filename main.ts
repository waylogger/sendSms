




class SMSSender {
	private gateway: string = 'http://gateway.api.sc/get/';
	private gatewaySec: string = 'https://gateway.api.sc/get/';
	private login: string;
	private password: string;
	private nameOfSender: string;
	constructor(login: string, password: string, nameOfSender: string) {
		this.login = login;
		this.password = password;
		this.nameOfSender = nameOfSender;
	}

	public async sendSMSunsec(destinationAddresses: string[], text: string): Promise<void> {
		const fetchStr = `${this.gateway}?user=${this.login}&pwd=${this.password}&sadr=${this.nameOfSender}&${destinationAddresses}&text=${text}`;
		const res = await fetch(fetchStr);
		console.log(res);
	}
}

(async () => {
	const sender = new SMSSender('79155244228','QJIqNOv5Zw','');
	sender.sendSMSunsec(['79155244228'],'авто забронировано');
})();