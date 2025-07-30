let table: HTMLTableElement | null = document.querySelector(".tableGenerate");
let forms28: HTMLCollectionOf<HTMLFormElement> = document.forms;
let tableGeneratorForm: HTMLFormElement = document.forms[0];

tableGeneratorForm.onsubmit = function (event: SubmitEvent): void {
    event.preventDefault();
        if (!table) return;
        table.innerText = ' ';

    const inputLines: number = +tableGeneratorForm.lines.value;
    const inputColumns: number = +tableGeneratorForm.columns.value;
    const inputInfo: string = tableGeneratorForm.info.value;

    for(let i = 0; i < inputLines; i++) {
        const tr: HTMLTableRowElement = document.createElement("tr");
            for(let j = 0; j < inputColumns; j++ ) {
                const td: HTMLTableCellElement = document.createElement("td");
                td.innerText = inputInfo;
                tr.appendChild(td);
            }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};
