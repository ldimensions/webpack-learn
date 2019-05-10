import './button.css'
import './button.scss'

class button {
    defaultClassName = 'class1';
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Click';
        button.classList.add(this.defaultClassName);
        const body = document.querySelector('body');
        button.onclick = function(){
            const p = document.createElement('p');
            p.innerHTML = 'Clicked';
            p.classList.add('class2');
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default button;