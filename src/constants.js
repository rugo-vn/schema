export const FINAL_KEYWORDS = [
  'title',
  'description',
  'type',
  'properties',
  'default',
  'minumim',
  'maximum',
  'exclusiveMinimum',
  'exclusiveMaximum',
  'multipleOf',
  'format',
  'minLength',
  'maxLength',
  'pattern',
  'enums',
  'items',
  'minItems',
  'maxItems',
  'additionalItems',
  'contains',
  'minContains',
  'maxContains',
  'uniqueItems',
  'prefixItems',
  'additionalProperties',
  'patternProperties',
  'required',
  'allOf',
  'unevaluatedProperties',
  'if',
  'then',
  'propertyNames',
  'minProperties',
  'maxProperties'
];

export const FINAL_TYPES = [
  'string',
  'number',
  'object',
  'array',
  'boolean',
  'null'
];

export const FINAL_TRANSFORMS = [
  [{ type: 'string' }, { type: 'string', maxLength: 60 }],
  [{ type: 'text' }, { type: 'string' }],
  [{ type: 'code' }, { type: 'string' }],
  [{ type: 'relation' }, { type: 'string' }],
  [{ type: 'file' }, { type: 'string' }],
  [{ type: 'json' }, { type: 'object', properties: {} }]
];
