/* eslint-disable @typescript-eslint/camelcase */
import { AzureFunction, Context } from '@azure/functions'
import { ObjectType } from 'typeorm'
import { EventSaver } from '../common/base'
import { LockupLockedup } from '../entities/lockup-lockedup'
import abi from './abi.json'

class LockupdEventSaver extends EventSaver {
	getModelObject<Entity>(): ObjectType<Entity> {
		return LockupLockedup
	}

	// eslint-disable-next-line @typescript-eslint/no-untyped-public-signature
	getSaveData(event: Map<string, any>): any {
		const lockupLockedup = new LockupLockedup()
		const values = event.get('returnValues')
		lockupLockedup.from_address = values._from
		lockupLockedup.property = values._property
		lockupLockedup.token_value = values._value
		return lockupLockedup
	}

	getBatchName(): string {
		return 'lockup-lockedup'
	}

	// eslint-disable-next-line @typescript-eslint/no-untyped-public-signature
	getAbi(): any {
		return abi
	}

	getEventName(): string {
		return 'Lockedup'
	}
}

const timerTrigger: AzureFunction = async function(
	context: Context,
	myTimer: any
): Promise<void> {
	const saver = new LockupdEventSaver(context, myTimer)
	await saver.execute()
}

export default timerTrigger
