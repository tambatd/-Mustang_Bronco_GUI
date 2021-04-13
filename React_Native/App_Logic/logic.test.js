import validate from "./logic.js"
test("Returns Values Correctly",() =>{
    expect(validate(2)).toBe(2); 
});
test("Returns Values Correctly",() =>{
    expect(validate(6)).toBe("Mustang");
    
});
test("Returns Values Correctly",() =>{
    
    expect(validate(10)).toBe("Bronco");
});
test("Returns Values Correctly",() =>{
   
    expect(validate(15)).toBe("MustangBronco");
});


