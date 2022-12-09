// JavaScript source code
window.onload = ()=>
{
	let camera = document.querySelector('a-camera');
	camera.addEventListener("gps-camera-update-position",()=>{
		let div = document.getElementByid('Mensaje');
		div.innerHTML = "prueba";
		});
	cargarModelos()
}
function cargarModelos()
{
        var modelos = [
            {
                latitud: 37.192249,
                longitud: -3.616615,
                color: "yellow",
                coso: "a-box"
            },
            {
                latitud: 37.192246, 
                longitud: -3.616596,
                color: "red",
                coso: "a-cylinder"
            },
            {
                latitud: 37.192262,
                longitud: -3.616535,
                color: "blue",
                coso: "a-octahedron"
            },
            {
                latitud: 37.192196, 
                longitud: -3.616572,
                color: "pink",
                coso: "a-triangle"
            },
            {
                latitud: 37.192235, 
                longitud: -3.616582,
                color: "white",
                coso: "a-sphere"
            }
        ];

        
        for (var i = 0; i < modelos.length; i++){
            var modelo = document.createElement(modelos[i].coso);
            modelo.setAttribute('material', 'color:' + modelos[i].color);
            modelo.setAttribute('scale', '0.5 0.5 0.5');
            modelo.setAttribute('gps-entity-place', `latitude: ${modelos[i].latitud}; longitude: ${modelos[i].longitud};`);

            var scene = document.querySelector('a-scene');
            scene.appendChild(modelo);
        }
