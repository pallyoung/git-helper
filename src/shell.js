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
      return {
        stdout:result.toString('utf-8'),
        error:null
      }
  }catch(e){
    return {
        stdout:e.stdout.toString('utf-8'),
        stderr:e.stderr.toString('utf-8'),
        error:null
    }
  }
}
execSync('git remote -v')
module.exports = {
    exec,
    execSync
}