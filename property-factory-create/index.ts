import { AzureFunction, Context } from '@azure/functions'
import { ObjectType } from 'typeorm'
import { EventSaver } from '../common/base'
import { PropertyFactoryCreate } from '../entities/property-factory-create'
import abi from './abi.json'

class CreateEventSaver extends EventSaver {
	getModelObject<Entity>(): ObjectType<Entity> {
		return PropertyFactoryCreate
	}

	// eslint-disable-next-line @typescript-eslint/no-untyped-public-signature
	getSaveData(event: Map<string, any>): any {
		const propertyFactoryCreate = new PropertyFactoryCreate()
		const values = event.get('returnValues')
		// eslint-disable-next-line @typescript-eslint/camelcase
		propertyFactoryCreate.from_address = values._from
		propertyFactoryCreate.property = values._property
		return propertyFactoryCreate
	}

	getBatchName(): string {
		return 'property-factory-create'
	}

	// eslint-disable-next-line @typescript-eslint/no-untyped-public-signature
	getAbi(): any {
		return abi
	}

	getEventName(): string {
		return 'Create'
	}
}

const timerTrigger: AzureFunction = async function(
	context: Context,
	myTimer: any
): Promise<void> {
	const saver = new CreateEventSaver(context, myTimer)
	await saver.execute()
}

export default timerTrigger
