let path = require('path')
const fs = require("fs");
const exec = require('child_process').exec;
const pkgPath = path.join(__dirname, '../package.json');
let pkg = JSON.parse(fs.readFileSync(pkgPath));
let version = pkg.version;
let isNewVersion = 'newVersion' == process.argv[2];
console.log(version);
console.log('newVersion', isNewVersion);
const vList = version.split(".");
const vEnd = vList[vList.length - 1];
if (isNewVersion) {
  version = vList.slice(0, vList.length - 1).join(".") + "." + (parseInt(vEnd) + 1);
  console.log('=> ', version);
} else {
  if (`${vEnd}`.includes('beta')) {
    let pre = parseInt(vList[vList.length - 1]);
    let cur = 'beta' + (parseInt(vList[vList.length - 1].split('-')[1].replace(/[^\d./]/g, '') || 0) + 1);
    version = `${vList[0]}.${vList[1]}.${pre}-${cur}`;
    console.log('=> ', version);
  } else {
    let cur = parseInt(vList[vList.length - 1]) + 1;
    version = `${vList[0]}.${vList[1]}.${cur}-beta1`;
    console.log('=> ', version);
  }
}
pkg.version = version;
let pkgStr = JSON.stringify(pkg, null, 2);
fs.writeFileSync(pkgPath, pkgStr);
let cmd = `git add package.json && git commit -m 'pub-beta ${version}' && git tag ${version}`;
if (isNewVersion) {
  cmd = `git add package.json && git commit -m 'pub ${version} && git tag ${version}'`;
}
exec(cmd);
console.log('exec cmd ==> ', cmd);
