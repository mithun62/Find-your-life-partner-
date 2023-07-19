
var btn=document.querySelector("button")

var girls=[
  "",
  "Toshlima",
  "Trisha",
  "Fariya",
  "Susmita",
  "Munira",
  "Mitfar",
  "Sanjana",
  "Sumaiya",
  "Kunkum",
  "Rumaiya",
  "Nilima",
  "Pinky",
  "Jannatul Mawa",
  "Taneema ahnaf",
  "Prima",
  "Sohana",
  "Umme Salma",
  "Sarmin Trisha",
  "Shahanaj",
  "Ridisha",
  "Mukta devi",
  "Jennifer zoe",
  "Hima das",
  "Saima akter",
  "Nishu",
  "Munmun",
  "Ikra ara",
  "Adiba Yeasmin",
  "Ayesha akter",
  "Sormila hasan",
  "Jannatul ferdous",
  "Oishe acharjee",
  "Jubyda gulsan",
  "Julia sultana",
  "Lija akter",
  "Sormi datta",
  "Joyshree de"
  ]
var girlsLength=girls.length-1


btn.addEventListener("click",find )
function find(){
  
  var randomNumber=Math.floor(Math.random()*girlsLength+1)
  
  var msg=document.querySelector(".message")
  var name=document.querySelector(".name")
  var result=document.querySelector(".result")
  
  if (name.value == "") {
    alert("Please enter your name.")
  }
  else if (name.value.length <= 3) {
    alert("Must be 4 word")
  }else{
  
  result.value="Finding please wait..."
  btn.innerText="Finding..."
  btn.style.color="green"
  setTimeout(function() {
    result.value=girls[randomNumber]
    btn.innerText="Find Him"
    btn.style.color="red"
    msg.innerText="Take screenshot and share with your friends.no cheating mind it."
  }, 3000);
  }
  
  
}



