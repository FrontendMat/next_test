export function getYearArr(year: number): string[] {
    const currentYear = new Date().getFullYear();
    const yearArr: string[] = [];

    for (let i = year; i <= currentYear; i++) {
        yearArr.push(i.toString());
    }

    return yearArr;
}
