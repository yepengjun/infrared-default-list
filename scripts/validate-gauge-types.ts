import type { GaugeTypesSchema } from '@/types/gauge-types'

import { getFile } from './_/get-file'
import { outputScriptStatus } from './_/output-script-status'
import { validateList } from './_/validate-list'

const schema = getFile('schema/gauge-types-schema.json')
const protocolTypes: GaugeTypesSchema = getFile('src/gauge-types.json')

const validateGaugeTypes = async () => {
  const errors: Array<string> = []

  validateList({ errors, list: protocolTypes, schema })
  outputScriptStatus({ errors, type: 'Protocol types' })
}

validateGaugeTypes()
