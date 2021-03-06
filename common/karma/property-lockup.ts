import { postHasura } from '../utils'
import { PropertyLockupSumValues } from './data'

export class PropertyLockupDataStore {
	private readonly _myPropertyLockupSumValues: PropertyLockupSumValues[]
	constructor() {
		this._myPropertyLockupSumValues = []
	}

	async prepare(version: string, propertyAddresses: string[]): Promise<void> {
		const query = `{
			property_lockup_sum_values(
				where: {
					property_address: {
						_in: ${JSON.stringify(propertyAddresses)}
					}
				}
				)
			{
				property_address
				sum_values
			}
		  }`
		const data = await postHasura(version, query)
		for (let record of data.property_lockup_sum_values) {
			this._myPropertyLockupSumValues.push(
				new PropertyLockupSumValues(record.property_address, record.sum_values)
			)
		}
	}

	getSumValues(property: string): number {
		const tmp = this._myPropertyLockupSumValues.filter(
			(propertyLockupSumValues) => {
				return propertyLockupSumValues.property === property
			}
		)
		if (tmp.length >= 2) {
			throw new Error('illigal data')
		}

		return tmp.length === 0 ? 0 : tmp[0].sumValues
	}
}
