

const p = document.createElement('p');
p.innerHTML = 'About page';
body.appendChild(p);

if(process.env.NODE_ENV === 'production'){
    console.log('production');
}else if(process.env.NODE_ENV === 'development'){
    console.log('development');
}