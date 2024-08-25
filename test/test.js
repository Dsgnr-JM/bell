 import Bell from "./your-file.js";

const btn = document.querySelector("button")

const type = ['info' , 'warning' , 'success' , 'error']

btn.addEventListener("click",()=>{

new Bell({
	title: "Nuevo tema Colors",
	description: "Llama la atencion completa del usuario",
},"error",{
	screenTime:1000000,distance:{y:100},
	position:"bottom-center",
	theme: "colors",
}).launch()
new Bell({
	title: "Nuevo tema Colors",
	description: "Llama la atencion completa del usuario",
},"warning",{
	screenTime:1000000,distance:{y:100},
	position:"bottom-center",
	theme: "colors",
}).launch()
new Bell({
	title: "Nuevo tema Colors",
	description: "Llama la atencion completa del usuario",
},"success",{
	screenTime:1000000,distance:{y:100},
	position:"bottom-center",
	theme: "colors",
}).launch()
new Bell({
	title: "Nuevo tema Colors",
	description: "Llama la atencion completa del usuario",
},"info",{
	screenTime:1000000,distance:{y:100},
	position:"bottom-center",
	theme: "colors",
}).launch()


/*const promise = new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve()
	},10000)
})
const state = {
	pending:"Promesa pendiente",
	success:"Promesa resuelta",
	error:"Promesa erronea"
}
const bell = new Bell({
	title: "Placeholder"
	},"promise",{
		screenTime: 3000,
		removeOn: "button",
		position: "bottom-right",
		customStyles:{
			container:{
				"font-family": "monospace",
				"--b_w": "220px",
				padding:"12px",
			}
		}
	})
	
bell.promise(promise, state)*/

})

