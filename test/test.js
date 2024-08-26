 import Bell from "./index.js";

const btn = document.querySelector("button")

const type = ['info' , 'warning' , 'success' , 'error']

btn.addEventListener("click",()=>{
	new Bell({title:"hola undo"},"info",{isColored:true,typeAnimation:"bound-2",theme:"colors",screenTime:100000}).launch()
})