import Image from './react.gif';

function addImage(){
    const img = document.createElement('img');
    img.alt = "image";
    img.width = "100";
    img.src = Image;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;