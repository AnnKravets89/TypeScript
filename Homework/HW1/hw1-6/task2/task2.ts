function upCaseStr(strings: string[]): void {
    for (const s of strings) {
        console.log(s.toUpperCase());
    }
}
upCaseStr(['hello world', 'lorem ipsum', 'javascript is cool']);
