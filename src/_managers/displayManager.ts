export const displayHoursAndMinutes = (totalMinutes: number) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    if (hours < 1) {
        return `${minutes} minutes`;
    } else if (minutes < 10) {
        return `${hours}h0${minutes}m`;
    } else {
        return `${hours}h${minutes}m`;
    }
};

export const changeTheDate = (date: string) => {
    const numbers = date.split('-');
    switch (numbers[1]) {
        case "01":
            return numbers[2] + ' jan.' + ' ' + numbers[0];
        case "02":
            return numbers[2] + ' fev.' + ' ' + numbers[0];
        case "03":
            return numbers[2] + ' mar.' + ' ' + numbers[0];
        case "04":
            return numbers[2] + ' avr.' + ' ' + numbers[0];
        case "05":
            return numbers[2] + ' mai.' + ' ' + numbers[0];
        case "06":
            return numbers[2] + ' juin' + ' ' + numbers[0];
        case "07":
            return numbers[2] + ' jui.' + ' ' + numbers[0];
        case "08":
            return numbers[2] + ' aou.' + ' ' + numbers[0];
        case "09":
            return numbers[2] + ' sep.' + ' ' + numbers[0];
        case "10":
            return numbers[2] + ' oct.' + ' ' + numbers[0];
        case "11":
            return numbers[2] + ' nov.' + ' ' + numbers[0];
        case "12":
            return numbers[2] + ' dec.' + ' ' + numbers[0];
        default:
            return numbers[2] + '/' + numbers[1] + '/' + numbers[0];
    }
}