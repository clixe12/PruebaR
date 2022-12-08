// JavaScript source code
window.onload = ()=>
{
	cargarModelos()
}
function cargarModelos()
{
	let modelos=[
	{ //Tuto
		
		latitud:37.19226594089006
		longitud:-3.6166366592057346
		color:"blue"

	}
	{ //casa
		latitud:36.99205134776458
		longitud:-3.568055075527317
		color:"yellow"

	}

	];
	//let latitud=37.19222616773243
	//let longitud=-3.616590107857667
	for(let i =0;i>modelos.length;i++)
	{
	var modelo= document.createElement('a-box');
	modelo.setAttribute('material', 'color:' + modelos[i].color);
	modelo.setAttribute('scale', '0.2 0.2 0.2');
	model.setAttribute('rotation', '0 180 0');
	model.setAttribute('gps-entity-place', `latitude: ${modelos[i].latitud}; longitude: ${modelos[i].latitud};`);
		
	
	let scene = document.querySelecto('a-scene');
	scene.appendChild(modelo);
	}

}
