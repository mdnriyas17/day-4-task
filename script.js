var request = new XMLHttpRequest();

request.open("GET", 'https://restcountries.com/v3.1/all')
request.send();
request.onload = function(){
    var data= JSON.parse(this.responseText);
    printData(data);
}


function printData (data){
    if (data.length >0){
        for (let i=0; i<data.length; i++){
            const{ name={}, region ="", subregion= '',population=0,flags={} }= data[i];
            console.log(name.common,region,subregion,population,flags.png);
        }
    }
}
