// JavaScript source code
window.onload = ()=>
{

}
function cargarModelos()
{
	let latitud=37.160760394347385
	let longitud=-3.5911209498993513

	var modelo= document.createElement('a-box')
	modelo.setAttribute('material','color:yellow')
	modelo.setAttribute('scale''15 15 15')
	model.setAttribute('gps-entity-place', `latitude: ${latitud}; longitude: ${longitud};`);
	
	let scene = document.querySelecto('a-scene');
	scene.appendChild(modelo);
}