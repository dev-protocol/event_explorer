// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3')

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getApprovalBlockNumber() {
	const web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_URL!))
	const currentBlockNumber = await web3.eth.getBlockNumber()
	return currentBlockNumber - Number(process.env.APPROVAL!)
}

export class Event {
	private readonly _web3: any
	private _contract: any
	constructor() {
		this._web3 = new Web3(
			new Web3.providers.HttpProvider(process.env.WEB3_URL!)
		)
	}

	// eslint-disable-next-line @typescript-eslint/no-untyped-public-signature
	public async generateContract(
		abi: any,
		contractAddress: string
	): Promise<void> {
		this._contract = await new this._web3.eth.Contract(abi, contractAddress)
	}

	public async getEvent(
		eventName: string,
		firstBlock: number,
		lastBlock: number | string
	): Promise<Array<Map<string, any>>> {
		const events = await this._contract.getPastEvents(eventName, {
			fromBlock: firstBlock,
			toBlock: lastBlock
		})
		return events
	}
}
