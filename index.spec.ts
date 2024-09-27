import add from "./index";

test("should sum string of numbers delimited by an operator", ()=>{
    expect(add("")).toBe(0);
    expect(add("1,2")).toBe(3);
    expect(add("1,2,4")).toBe(7);
    expect(add("1\n2,4")).toBe(7);
});