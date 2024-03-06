module.exports = function (source) {
  const options = this.getOptions();
  // 获取 loader 的选项
  const prefix = options.prefix;

  if(!prefix) {
    return source;
  }

  source = `"${prefix}"\r\n${source}`;

  // 返回处理后的代码
  return source;
}
