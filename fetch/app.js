alert



const content = "something interesting";
fs.appendFile('test.txt', content,err => {
    if(err){
        console.err;
        return;
    }
})
    