const {
    execSync: _execSync,
    exec: _exec
} = require('child_process');

/**
 * if a string is end with '\n' ,remove it;
 */
function removeTail(src) {
    if (src && src[src.length - 1] === '\n') {
        src = src.slice(0, -1);
    }
    return src;
}

function bufferToString(buffer, encoding = 'utf-8') {
    if(buffer){
        return removeTail(buffer.toString('utf-8'));
    }else {
        return buffer;
    }
}
function exec(cmd) {
    return new Promise(function (resolve, reject) {
        _exec(cmd, function (err, stdout, stderr) {
            stdout = removeTail(stdout);
            stderr = removeTail(stderr);
            if (stderr) {
                reject({ stdout, stderr });
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}


function execSync(cmd) {
    const stdout = bufferToString(_execSync(cmd));
    return stdout;
}
 
module.exports = {
    exec,
    execSync
}