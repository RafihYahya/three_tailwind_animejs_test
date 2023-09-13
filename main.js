import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import anime from 'animejs';

//        <canvas id="c" class=" z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "></canvas>

//threejs




// config render
const canvas = document.querySelector('#c');

const renderer = new THREE.WebGLRenderer({antialias: true, canvas});


let sizes_x= window.innerWidth;
let sizes_y= window.innerHeight;


renderer.setSize( sizes_x, sizes_y  );










//config scene
const scene = new THREE.Scene();











//config camera 
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 4;
camera.position.x = 1;
camera.position.y = 1;







//Light
const color = 0xFFFFFF;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(7, 2, 4);
  scene.add(light);






//cube
const violetColor = new THREE.Color(231/255, 84/255, 128/255);

const geometry = new THREE.SphereGeometry( 1, 64, 64 );
const material = new THREE.MeshStandardMaterial( { 
  roughness: 0.25,     // Set the roughness of the material between 0 and 1
  metalness: 0.25     // Set the metalness of the material between 0 and 1 
} );
material.color.set(violetColor);

const sphere = new THREE.Mesh( geometry, material );

sphere.position.x= 1;
sphere.position.y= 1;
sphere.position.z= 1;
scene.add( sphere );



//CONTROLS


var controls = new OrbitControls(camera, canvas);

// Customize the behavior of OrbitControls
controls.enableDamping = true;  // Enable damping for smooth movement
controls.enableZoom = false;    // Enable zooming
controls.enablePan = false;    // Enable zooming
controls.autoRotate = true;    // Enable zooming
controls.autoRotateSpeed = 5  ;    // Enable zooming



//render all


  renderer.render(scene,camera);
  function render(time) {
    time *= 0.001;  // convert time to seconds
   
    sphere.rotation.x = time;
    sphere.rotation.y = time;
   
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

















//animejs
const h1main = document.querySelector('#demoh');


const divElement = document.querySelector('h1');

// Define the animation properties



const lielement = document.querySelectorAll('li');

anime({
  targets: lielement,
  
  translateY: function() { return anime.random(-1, 1)},
  translateX: function() { return anime.random(-1, 1)},
  rotate: function() { return anime.random(-360, 360); },
  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: true,
});



anime({
  targets: '#griddiv',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1.05, easing: 'easeInOutQuad', duration: 1200}
  ],
  rotate: [
    {value: function() { return anime.random(-360, 360); }, easing: 'easeOutSine', duration: 500},
    {value: function() { return anime.random(-360, 360); }, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
  direction:'alternate',
  loop:true
});






// Testing the local storage in vannilla js 



const inputpush = document.querySelector('#input_push');
const submitpush = document.querySelector('#submit_push');
const submitpush2 = document.querySelector('#submit_push2');
const submitpush3 = document.querySelector('#submit_push3');
const submitpush4 = document.querySelector('#submit_push4');
const ulpush = document.querySelector('#ul_push');


/*
anime({
  targets: 'input',
  scaleX: [
    {value: 1, easing: 'easeOutSine', duration: 500},
    {value: 1.2, easing: 'easeInOutQuad', duration: 800}
  ],
  direction:'alternate',
  loop: true

});
*/

anime({
  targets: 'h1',
  rotateX: [
    {value:-180, easing:'easeInOutSine', duration:500},
  ],
  delay: anime.stagger(50),
  direction:'alternate',

  loop: true



});

  
for (var i = 0; i < localStorage.length; i++){
    console.log( document.querySelector('#labelid').value );
    if (localStorage.key(i) != null) {
      document.querySelector('#labelid').innerHTML =  'MAKE YOUR LIST' +   ' '  + '('  + localStorage.key(i) + ' ' + localStorage.length +')';
    };
};





let my_list = [];
let j = 0 ;

const liloop = (j) => { 
for (let i = j-1; i < my_list.length  ; i++) {

  var newli = document.createElement('div');
  var newpi = document.createElement('p');
  newpi.classname = '';
  newli.id = 'newId';
  ulpush.appendChild(newli);
  newli.appendChild(newpi);
  newpi.innerHTML = my_list[i];
  newli.className = 'overflow-hidden w-full my-4 rounded-md bg-red-300/5 text-center border-2 border-red-400 p-4 text-sm';
};
};


liloop();



submitpush.addEventListener('click', () => { 

    let temp = my_list;
    temp.push(inputpush.value);
    my_list = temp;
    j++;
    liloop(j);
    inputpush.value = null;
    
  }
 );


submitpush2.addEventListener('click', () => { 

    let temp = JSON.stringify(my_list);
    localStorage.setItem('ListSTore',temp);

    
    
  }
 );


 submitpush3.addEventListener('click', () => { 

  
  let my_list = JSON.parse(localStorage.getItem('ListSTore'));

for (let i = 0; i < my_list.length  ; i++) {

  var newp = document.createElement('p');
  newp.id = 'newId';
  newp.className = 'overflow-hidden w-full my-4 rounded-lg bg-red-300/5 text-center border-2 border-red-400 p-4  text-sm';
  ulpush.appendChild(newp);
  newp.innerHTML = my_list[i];
};  
}

);

 submitpush4.addEventListener('click', () => { 

  
  localStorage.removeItem('ListSTore');

  
}
);





const firstli = document.querySelector('#navbarli');
const secondli = document.querySelector('#navbarli2');
const thirdli = document.querySelector('#navbarli3');

let toggle = false;
 
firstli.addEventListener('click',() => { 
    const listdiv  = document.querySelector('#listdiv');
    const gridsection  = document.querySelector('#gridsection');
    const c  = document.querySelector('#c');


      gridsection.className = 'w-full h-full max-w-[1550px] mx-auto flex   items-center justify-center mt-[5vh]';
 
      
      listdiv.className = 'hidden';
      c.className = 'hidden';

  
 });

secondli.addEventListener('click',() => {

    const gridsection  = document.querySelector('#gridsection');
    const listdiv  = document.querySelector('#listdiv');
    const c  = document.querySelector('#c');

              
      listdiv.className = 'w-full h-full max-w-[1550px] mx-auto flex   items-center justify-center mt-[5vh]';
      gridsection.className = 'hidden';
      c.className = 'hidden';
   
 });

thirdli.addEventListener('click',() => { 

  const gridsection  = document.querySelector('#gridsection');
  const html  = document.querySelector('#html');

    const listdiv  = document.querySelector('#listdiv');
    const c  = document.querySelector('#c');
      listdiv.className = 'hidden';
      c.className = 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full w-full  z-0';

      
      gridsection.className = 'hidden';

   
 });


 window.addEventListener('resize',() => { 

  sizes_x= window.innerWidth;
  sizes_y= window.innerHeight; 


   camera.aspect = sizes_x /sizes_y;
   camera.updateProjectionMatrix();
  
  
   renderer.setSize( sizes_x, sizes_y);

  });





