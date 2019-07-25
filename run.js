const childProcess = require('child_process')

const args = process.argv.slice(2).map(entry => {
    if(!entry.includes('='))
        return `--${entry}=true`
    const index = entry.indexOf('=')
    return `--${entry.slice(0, index)}=${entry.slice(index+1)}`
})

const child = childProcess.spawn('npm.cmd', ['run', 'dev', '--', ...args])
child.stdout.on('data', data => {
    console.log(data.toString())
})
// child.stderr.on('data', data => {
//     console.log(data.toString())
// })