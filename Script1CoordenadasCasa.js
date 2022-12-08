// JavaScript source code
window.onload = ()=>
{
	cargarModelos()
}
function cargarModelos()
{
	let modelos=[
	{
		latitud:37.19222616773243
		longitud:-3.616590107857667
		color:"blue"
		scala: 0.2
	}
	{
		latitud:37.19222616773243
		longitud:-3.616590107857667
		color:"yellow"
	}
	{
		latitud:37.19222616773243
		longitud:-3.616590107857667
		color:"red"
	}
	];
	//let latitud=37.19222616773243
	//let longitud=-3.616590107857667
	for(let i =0;i>modelos.length;i++)
	{
	var modelo= document.createElement('a-box')
	modelo.setAttribute('material','color:' + modelos[i].color)
	modelo.setAttribute('scale',""+modelos[i].escala" "+modelos[i].escala" "+modelos[i].escala)
	model.setAttribute('gps-entity-place', 'latitude: ${modelos[i].latitud}; longitude: ${modelos[i].latitud};');
	
	let scene = document.querySelecto('a-scene');
	scene.appendChild(modelo);
	}

}
