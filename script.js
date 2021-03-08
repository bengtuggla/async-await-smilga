const h1 = document.querySelector('.one')
const h2 = document.querySelector('.two')
const h3 = document.querySelector('.three')

const btn = document.querySelector('.btn')

btn.addEventListener('click',async() => {
 let test = await addColor(1000, h1, 'red')
 await addColor(2000, h2, 'blue')
 await addColor(1000, h3, 'green')
 console.log(test);
})

function addColor(time, element, color){
 return new Promise((resolve,reject)=>{
   if(element){
    setTimeout(()=>{
     element.style.color = color;
     resolve();
    },time)
   }else {
     reject(new Error(`There is no element ${element}`))
   }
 })
}