type Session = string;
type SavedSession = string | null;

let savedSession: SavedSession = localStorage.getItem('sessionsList');
let sessions: Session[] = [];

if (savedSession) {
    sessions = JSON.parse(savedSession);
}

const today: Date = new Date();
const sessionTime: Session = today.toLocaleString();
sessions.push(sessionTime);

localStorage.setItem('sessionsList', JSON.stringify(sessions));

if(location.pathname.includes('sessionsListPage.html')) {
    const h1: HTMLHeadingElement = document.createElement('h1');
    h1.innerText = 'Visit history';

    const ul: HTMLUListElement = document.createElement('ul');

    sessions.forEach((session ) => {
        const li: HTMLLIElement = document.createElement('li');
        li.innerText = session;
        ul.appendChild(li);

    })

    document.body.append(h1, ul);
}
