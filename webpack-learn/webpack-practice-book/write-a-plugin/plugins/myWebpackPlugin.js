const { validate } = require('schema-utils');
const schema = require('./schema/schema')

class MyWebpackPlugin {
  constructor(options) {
    // 校验使用插件时传入的options是否符合schema
    validate(schema, options);

    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap('MyWebpackPlugin', (stats ) =>{
      console.log(111, this.options);
    })
  }
}

module.exports = MyWebpackPlugin;
