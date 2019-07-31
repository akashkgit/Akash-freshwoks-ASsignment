const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
var baseURL = 'https://restcountries.eu/rest/v2/name/';
const bucket = document.createElement('div');
bucket.setAttribute('class', 'bucket');
const card = document.createElement('div');
card.setAttribute('class', 'card');
bucket.appendChild(card);
var name="";
var coun_json;
app.appendChild(logo);
app.appendChild(bucket);
//get Country name and flag from api
function getCountryName(){ name=document.getElementById('TextVal').value;
callAPI(name, (d) => {
console.log(d);coun_json=d;
const country_name = document.createElement('h1');
const flag_imag = document.createElement('img');const f1 = document.createElement('h2');
flag_imag.src=d[0].flag;
console.log(f1.h2);
country_name.innerText=name.toUpperCase();
flag_imag.width="200";
flag_imag.height="200";
card.appendChild(flag_imag);
card.appendChild(country_name);
});}
//API Function
function callAPI(n, c){
fetch(baseURL+n+?fullText=true)
  .then(function(response) {
  	console.log(response	);
  		return response.json();
    
  }) .then(function(myJson) {
    console.log((myJson));
    c(myJson, null)
  });

}