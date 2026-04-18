const longWords = (arr: string[]) => arr.every((ele) => ele.length >= 5);
const oneLongWord = (arr: string[]) => arr.some((ele) => ele.length >= 10);
const noLongWords = (arr: string[]) => arr.every((ele) => ele.length < 7);
