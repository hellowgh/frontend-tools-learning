/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2024-2024. All rights reserved.
 */

class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('MyWebpackPlugin', (stats ) =>{
      console.log(111);
    })
  }
}

module.exports = MyWebpackPlugin;
