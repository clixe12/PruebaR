// JavaScript source code
window.onload = ()=>
{
	let camara = document.querySelector('a-camara');
	camara.addEventListener("gps-camera-update-position",()=>{
		let div = document.getElementByid('Mensaje');
		div.innerHTML = "prueba";
		});
	cargarModelos()
}
function cargarModelos()
{
	let modelos=[
	{ //Tuto

                latitud: 37.192249,
                longitud: -3.616615,
		color:"blue",

	},
	{ //casa
		latitud:36.99205134776458,
		longitud:-3.568055075527317,
		color:"yellow",

	},

	];

	for(let i =0;i<modelos.length;i++)
	{
	var model= document.createElement('a-box');
	model.setAttribute('material', 'color:' + modelos[i].color);
	model.setAttribute('scale', '0.2 0.2 0.2');
	model.setAttribute('rotation', '0 180 0');
	model.setAttribute('gps-entity-place', `latitude: ${modelos[i].latitud}; longitude: ${modelos[i].latitud};`);
		
	
	let scene = document.querySelector('a-scene');
	scene.appendChild(model);
	}

}
