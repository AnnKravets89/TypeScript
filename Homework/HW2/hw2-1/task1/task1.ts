let div: HTMLDivElement = document.createElement('div');
document.body.appendChild(div);
div.innerText = 'Have a nice day!';

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

div.style.background = 'coral';
div.style.color = 'purple';
div.style.fontSize = '30px';

let divClone = div.cloneNode(true);
document.body.appendChild(divClone);
