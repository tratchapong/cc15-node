
console.log(process.platform)
console.log(process.cwd())
console.log(process.env.USER)
console.log(process.env.HOME)
console.log(process.env.AAA)

process.env.AAA = "OK"

console.log(process.env.AAA)