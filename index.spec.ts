import add from "./index";

test("should sum string of numbers delimited by an operator", ()=>{
    expect(add("")).toBe(0);
    expect(add("1,2")).toBe(3);
    expect(add("1,2,4")).toBe(7);
    expect(add("1\n2,4")).toBe(7);
    expect(add("1\n2\n4,5")).toBe(12);
    expect(add("1\n2\n4,5,6,7\n8")).toBe(33);
    expect(add("//;\n1\n2\n4;5;6;7\n8")).toBe(33);
    expect(add("//:\n1\n2\n4:5:6:7\n8")).toBe(33);
    expect(()=>{add("//:\n1\n2\n-4:5:-6:7\n8")}).toThrow("Negative numbers are not allowed:-4,-6");
});