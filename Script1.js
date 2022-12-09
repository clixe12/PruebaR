// JavaScript source code
window.onload = ()=>
{
	cargarModelos()
}
function cargarModelos()
{
	let modelos=[
	{ //Tuto

		latitud:37.19224678549024,
		longitud:-3.6166000151576796,
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
		
	
	let scene = document.querySelecto('a-scene');
	scene.appendChild(model);
	}

}
