let nextbtn = document.getElementById('nextbtn');
let prevbtn = document.querySelector('#prevbtn')
let allDish = document.querySelectorAll('.dishs')
let searchinput = document.getElementById('searchinput')
let searchbtn = document.getElementById('searchbtn')
//har value btn ke sath search ho to
let btnkesathsearch =  document.querySelectorAll('.dish');
let count = 0; 

const getdata=async (value)=>{
    try{
        
    let datas =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    let json = await datas.json();
    console.log(json)
    document.querySelector('.showmeal').innerHTML = '';
    json.meals.forEach((item)=>{
        // console.log(item)
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        
        <img src=${item.strMealThumb} alt="">
        <p>${item.strMeal}</p>
        <button>view more</button>
        `
        document.querySelector('.showmeal').appendChild(div)
    })
    }catch(error){
        document.querySelector('.showmeal').innerHTML = '<h1>meal not found those you enter</h1>'
    }
}

searchbtn.addEventListener('click', function(){
    let btnvalue = searchinput.value;
    if(btnvalue == ''){
        alert('plz enter a text first');
    }else{
        getdata(btnvalue);
    }
})


// btn ke sath search wala

btnkesathsearch.forEach(function(data){
    data.addEventListener('click', function(){
        getdata(data.value)
    })
})

















//slider
allDish.forEach(function(slide,index){
    slide.style.left = `${index*100}%`
 })

 function myfunct (){
    allDish.forEach(function(item){
        item.style.transform = `translateX(-${count*100}%)`
    })
 }

 nextbtn.addEventListener('click', function(){
    count++;
    if(count == allDish.length){
        count=0;
    }
    myfunct();
 })
 

 prevbtn.addEventListener("click", function(){
    count--;
    if(count == -1){
        count=allDish.length-1;
    }
    myfunct();
})
