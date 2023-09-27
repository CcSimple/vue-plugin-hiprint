/*
 * @Date: 2023-09-14 23:11:39
 * @LastEditors: admin@54xavier.cn
 * @LastEditTime: 2023-09-15 01:14:13
 * @FilePath: /vue-plugin-hiprint/src/utils/index.js
 */
/**
 * @description: 解析版本号信息
 * @param {String} ver 版本号
 * @return {Object} 解析后的版本号信息
 */
export function decodeVer(ver) {
  var matchObj =
    ver.match(
      /(?<range>\^|~)?(?<version>(?<mainver>\d+(\.\d+){0,2})(?<appendver>-\w+)?)?/
    )?.groups || {};
  matchObj = { ...matchObj, ver };
  matchObj.mainVal =
    matchObj.mainver
      ?.split(".")
      ?.map((v, i) => v * Math.pow(10, 6 - i * 3))
      ?.reduce((acc, curr) => acc + curr, 0) || 0;
  matchObj.appendVal = (matchObj.appendver?.match(/[0-9]+/) || 0) * 1;
  matchObj.verVal = `${matchObj.mainVal}.${matchObj.appendVal}` * 1;
  return matchObj;
}