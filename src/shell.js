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

function execAsync(cmd) {
  
}

module.exports = {
    exec,
    execAsync
}