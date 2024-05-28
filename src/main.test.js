import {capitalize, createCalculator, reverseString, caesarCipher, analyzeArray} from "./main";

test("Capitalize", ()=>{
    expect(capitalize("capitalize")).toEqual("Capitalize");
})

test("CapitalizeWithoutPrefix", ()=>{
    expect(capitalize("CapitalizeWithoutPrefix")).toEqual("CapitalizeWithoutPrefix");
})

test("reverse string", () => {
    expect(reverseString("Capitalize")).toEqual("ezilatipaC");
})

test("sum", () => {
    expect(createCalculator().sum(2,3)).toBe(5)
})

test("subtract", () => {
    expect(createCalculator().subtract(2,3)).toBe(-1)
})

test("multiply", () => {
    expect(createCalculator().multiply(2,3)).toBe(6)
})

test("divide", () => {
    expect(createCalculator().divide(2,3)).toBe(2/3)
})

test("capitalized words", ()=>{
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr")
})

test("capitalized words", ()=>{
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!")
})

test("analyze array", ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4,min: 1,max: 8,length: 6})
})