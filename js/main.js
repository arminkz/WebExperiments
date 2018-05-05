var glHost;
var camera , scene , renderer ,composer;


function initialize(){

	//Basic Setup
	glHost = document.getElementById('glHost');
	//fov - aspect - near - far
	camera = new THREE.PerspectiveCamera(50,window.innerWidth / window.innerHeight,1,300);
	camera.position.set(0,2.5,4);

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x121316);
	scene.fog = new THREE.Fog(0x121316,1,15);


	var geometry = new THREE.PlaneBufferGeometry( 5, 20, 32 );
	var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} , wireframe: true);
	var plane = new THREE.Mesh( geometry, material );
	scene.add( plane );


	//Renderer
	renderer = new THREE.WebGLRenderer({antialias: false});
	renderer.setPixelRatio(window.devicePixelRatio); //Resolution Setting Here
	glHost.appendChild(renderer.domElement);
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	camera.lookAt(new THREE.Vector3(0,1,-4));


	//PostProcessing
	composer = new THREE.EffectComposer(renderer);
	composer.addPass(new THREE.RenderPass(scene,camera));
	/*displacementPass = new THREE.ShaderPass({
		uniforms : {
			time: {type: "f", value:1.0},
			power: {type: "f", value:1.0},
			resolution: {type: "v2", value: new THREE.Vector2()},
			tDiffuse: {value: null},
			tText: {type: "sampler2D", value: null}
		},
		vertexShader: vertShader,
		fragmentShader: fragShader
	});
	displacementPass.renderToScreen = true;
	composer.addPass(displacementPass);*/
	composer.render();

	window.addEventListener( 'resize', onWindowResize, false);
	onWindowResize();
}


function onWindowResize(){
	var aspect = window.innerWidth/window.innerHeight;
	camera.aspect = aspect;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	composer.setSize(window.innerWidth, window.innerHeight);
}

