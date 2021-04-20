//sync approach
const { readFileSync, writeFileSync} = require('fs');
console.log('starting');
const first = readFileSync('./content/first.txt' ,'utf8');
const second = readFileSync('./content/second.txt' ,'utf8');
console.log(first, second);

writeFileSync(
    './content/result.txt',
    `this is result file: ${first}  ${second}`,
    {flag: 'a'},
    console.log('done with this task')
)
console.log('moving to next');

//async approach
const { readFile, writeFile} = require('fs');
console.log('starting');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
        }
        const second = result;

        writeFile(
            './content/result.txt',
            `Both files are: ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                }
                console.log('this task is done');
            }
        )
    })
})
console.log('moving to next one');

//in async approach the next task is also running with previous one and in sync it dones line by line.