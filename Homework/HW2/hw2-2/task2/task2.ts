let forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
let myForm: HTMLFormElement = document.forms[0];

type UserAgeType = number;
myForm.onsubmit = function (event: SubmitEvent): void {
    let user: UserAgeType = myForm.age.value;
    if (user < 18) {
        event.preventDefault();

        let msg: HTMLParagraphElement = document.createElement('p');
        msg.innerText = 'you are not 18 years old';
        msg.style.color = 'red';

        document.body.appendChild(msg);
    }
}
