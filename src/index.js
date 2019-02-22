import helloWorld from './hello-world.js';
import addImage from './add-image.js';
import button from './components/button/button.js';

helloWorld();
addImage();
const buttonObj = new button();
buttonObj.render();

if(process.env.NODE_ENV === 'production'){
    console.log('production');
}else if(process.env.NODE_ENV === 'development'){
    console.log('development');
}