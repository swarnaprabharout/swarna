var request=require('request');
var axios=require('axios');
var yargs=require('yargs');
var argv=yargs.argv;
yargs.options({
    a:{
        description:'address',
        alias:'address',
        string:true

    }
})
.help()
.argv;
var newurl=encodeURIComponent(argv.a);
var url=`https://maps.googleapis.com/maps/api/geocode/json?address=${newurl}&key=AIzaSyCGNJ_ZIhCo97diZ3ZIrFWCAMdiWZ74R_E`;
axios.get(url).then((response)=>{
console.log(response.data);

var lan=response.data.results[0].geometry.location.lat;
var lng=response.data.results[0].geometry.location.lng;
var wurl=`https://api.darksky.net/forecast/6100907c0868d2a863e202058f58c586/${lan},${lng}`;
return axios.get(wurl);

}
).then((response)=>{
console.log(response.data.currently.temperature);
//console.log(response.data);
},(e)=>{
console.log('error');
});