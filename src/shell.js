var child = require('child_process');

function exec(cmd) {
    return new Promise(function (resolve, reject) {
        child.exec(cmd, function (err, stdout, stderr) {
            if (err) {
                reject({ error:err, stdout, stderr });
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

function execSync(cmd) {
  try{
      var result = child.execSync(cmd);
      return result;
  }catch(e){
    return e;
  }
}
execSync('git remote -v')
module.exports = {
    exec,
    execSync
}