var request=require('request');
var yargs=require('yargs');

const argv=yargs.options({
    a:{
        string:true,
        describe:'weather detail'
    }
}

)
.help()
.argv;
var newurl=encodeURIComponent(argv.a);
console.log(newurl);
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//6100907c0868d2a863e202058f58c586
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${newurl}&key=AIzaSyCGNJ_ZIhCo97diZ3ZIrFWCAMdiWZ74R_E`,
    json:true
},(error,response,body)=>{
//console.log(body);
console.log(newurl);
console.log(`${body.results[0].geometry.location.lat}`);
var lan=`${body.results[0].geometry.location.lat}`;
var lng=`${body.results[0].geometry.location.lng}`;
console.log(`${body.results[0].geometry.location.lng}`);
console.log(`${body.results[0].formatted_address}`);
const wether=(lan,lng)=>{
    const call=(error,response,body)=>{

        console.log(`${body.currently.temperature}`);
    }
       
    request({
            url:`https://api.darksky.net/forecast/6100907c0868d2a863e202058f58c586/${lan},${lng}`,
            json:true
        },call);
        

        }

wether(lan,lng);
}



);

