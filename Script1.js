// JavaScript source code
window.onload = ()=>
{
	cargarModelos()
}
function cargarModelos()
{

	let latitud=37.19222616773243
	let longitud=-3.616590107857667

	var modelo= document.createElement('a-box')
	modelo.setAttribute('material','color:yellow')
	modelo.setAttribute('scale''0.5 0.5 0.5')
	model.setAttribute('gps-entity-place', `latitude: ${latitud}; longitude: ${longitud};`);
	
	let scene = document.querySelecto('a-scene');
	scene.appendChild(modelo);
}