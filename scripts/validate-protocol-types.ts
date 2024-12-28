import type { ProtocolTypesSchema } from '@/types/protocol-types'

import { getFile } from './_/get-file'
import { outputScriptStatus } from './_/output-script-status'
import { validateList } from './_/validate-list'

const schema = getFile('schema/protocol-types-schema.json')
const protocolTypes: ProtocolTypesSchema = getFile('src/protocol-types.json')

const validateProtocolTypes = async () => {
  const errors: Array<string> = []

  validateList({ errors, list: protocolTypes, schema })
  outputScriptStatus({ errors, type: 'Protocol types' })
}

validateProtocolTypes()
