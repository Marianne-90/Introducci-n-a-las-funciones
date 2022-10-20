function alwaysTrue(){
  return true
}

const funcionAsincrona = new Promise((resolve,reject)=>{
setTimeout(()=>{
  if(true) resolve();
  else reject;
}, 5000)
})

funcionAsincrona
  .then(()=>console.log("Hola soy una promesa"))
  .catch(()=> console.log("Soy una promesa que no se cumplió :c"))

function* numPares(){
  let id=0
  while(true){
    id++
    yield id * 2;
  }
}

const generadorPares = numPares()
console.log(generadorPares.next().value)
console.log(generadorPares.next().value)
console.log(generadorPares.next().value)
