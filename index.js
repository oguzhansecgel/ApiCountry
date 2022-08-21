var input = document.querySelector(".inputtext");
var btn= document.querySelector(".btnbul");
const request = new XMLHttpRequest();
btn.addEventListener("click",function()
{   console.log(input.value);
    request.open("GET","https://restcountries.com/v2/name/"+input.value); //api önce get ile çağırılıyor sonra api alınıyor
    request.send();

})




request.addEventListener('load',function()
{

    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(typeof(data));
    setCountry(data[0]);
});

function setCountry(data)
{
    const html = `  
            <div class="col-4">
                <div class="card h-100"> 
                 <img src="${data.flags.png}" class="card-img-top">
                 <div class="card-body">
                    <h5 class="card-title">${data.altSpellings[1]} ve Capital ${data.capital}</h5>
                 </div>
                <ul class="list-group">
                    <li class="list-group-item">Borders: ${data.borders}</li>
                    <li class="list-group-item">Population: ${data.population} </li>
                    <li class="list-group-item">Languages: ${Object.values(data.languages[0])}</li>
                </ul>
                </div>
            </div>
    `;
    document.querySelector(".container .row").insertAdjacentHTML("beforeend",html); // container ve rowdan sonra html yazdırıyoruz
}
