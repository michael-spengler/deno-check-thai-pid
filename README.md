# deno-check-thai-pid

[![tag](https://img.shields.io/github/v/tag/thiti-y/deno-check-thai-pid)](https://github.com/thiti-y/deno-check-thai-pid/tags)

Check thai personal ID

# Usage

````javascript
import checkThaiPid from 'https://deno.land/x/deno_check_thai_pid/mod.ts'

const personalID = "9999999999999" //string or number

let outStr = checkThaiPid(personalID) ? 'Personal ID is correct' : "Personal ID is incorrect"

console.log(outStr)
````
