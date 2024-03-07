const { validate } = require('schema-utils');
const schema = require('./schema/schema')

class MyWebpackPlugin {
  static defaultOptions = {
    name: 'My Webpack Plugin'
  }

  constructor(options = {}) {
    // 校验插件传入的options是否符合schema
    validate(schema, options, {
      name: 'My Webpack Plugin',
      baseDataPath: 'options',
    });

    this.options = { ...MyWebpackPlugin.defaultOptions, ...options };
  }

  apply(compiler) {
    compiler.hooks.done.tap('MyWebpackPlugin', (stats ) =>{
      console.log(111, this.options);
    })
  }
}

module.exports = MyWebpackPlugin;
