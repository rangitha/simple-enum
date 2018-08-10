export default class SimpleEnum {
    constructor(values) {
        values.forEach((value, index) => {
            this[this[index] = value] = index;
        });
    }
}