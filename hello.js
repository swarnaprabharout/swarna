

console.log("hi i am swarna");
var os=require('os');
var fs=require('fs');
var st=require('lodash');
var yargs=require('yargs');
var val=os.userInfo();
var {greeting,addnote, add,note}=require('./send');
yargs.command('add','adds a note',{
    title:{
        alias:'t'
    }
}
)
.help().argv;
console.log(`${add()}`);
console.log(yargs.argv);
var res=`${addnote(yargs.argv.title,yargs.argv.body)}`;
console.log(yargs.argv.title);
note.push(yargs.argv.title);

fs.writeFileSync("./store.js",note);
console.log("bye"+res);
console.log("hiiii"+st.isString('yeah'));
console.log(val);
var arg=process.argv;
console.log(arg);