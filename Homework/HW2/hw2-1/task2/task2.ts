const arr22: string[] = ['Main', 'Products', 'About us', 'Contacts'];
let menu: HTMLUListElement = document.createElement('ul');

for (const item of arr22) {
    let li: HTMLLIElement = document.createElement('li');
    li.innerText = item;

    menu.appendChild(li);
    document.body.appendChild(menu);
}
