var loader = new THREE.FontLoader();
loader.load( '/fonts/helvetiker_regular.typeface.json', function ( font ) {

    load( font );
    animate();

} );

function load( font ) {
    container = document.getElementById( 'sphere' );
    var theText = "Frits van Turnhout \n  Web developer ";
    var secondtext = "Web developer";
    // var hash = document.location.hash.substr( 1 );

    // if ( hash.length !== 0 ) {

    //     theText = hash;

    // }
    var geometry = new THREE.TextGeometry( theText, {
        font: font,
        size: 70,
        height: 20,
        curveSegments: 2
    });


    geometry.computeBoundingBox();
    var centerOffset = -0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
    var materials = [
        new THREE.MeshBasicMaterial( { color:  0xffffff, overdraw: 0.5 } ),
        new THREE.MeshBasicMaterial( { color: 0x000000, overdraw: 0.5 } )
    ];

    var mesh = new THREE.Mesh( geometry, materials );

    mesh.position.x = centerOffset;
				mesh.position.y = 100;
				mesh.position.z = 0;

				mesh.rotation.x = 0;
				mesh.rotation.y = Math.PI * 2;

				group = new THREE.Group();
				group.add( mesh );

				scene.add( group );
}