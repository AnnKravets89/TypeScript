let forms23: HTMLCollectionOf<HTMLFormElement> = document.forms;
let userForm: HTMLFormElement = document.forms[0];

type User23 = {
    userName: string;
    userSurname: string;
    userAge: number;
}
userForm.addEventListener( 'submit', function (event: SubmitEvent): void {
    event.preventDefault();
    const userName: string = userForm.firstName.value;
    const userSurname: string = userForm.lastName.value;
    const userAge: number = +userForm.age.value;

    let user: User23 = {userName, userSurname, userAge};
    console.log(user);

    let p: HTMLParagraphElement = document.createElement('p');
    p.innerHTML = user.userName + ' ' + userSurname + ' ' + userAge;

    document.body.appendChild(p);
})
