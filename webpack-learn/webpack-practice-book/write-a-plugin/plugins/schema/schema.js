// 简单scheme
const schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
  },
  "additionalProperties": false
}

// 复杂schema
// const schema = {
//   "type": "object",
//   "properties": {
//     "name": {
//       "type": "string"
//     },
//     "test": {
//       "anyOf": [
//         { "type": "array" },
//         { "type": "string" },
//         { "instanceof": "RegExp" }
//       ]
//     },
//     "transform": {
//       "instanceof": "Function"
//     },
//     "sourceMap": {
//       "type": "boolean"
//     }
//   },
//   "additionalProperties": false
// }

module.exports = schema;
