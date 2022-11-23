__tests__/Intern.test.js

const Intern = require("../lib/Intern");

test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.getId()).toBe(testValue);
    });

    test("Can get email via getEmail()", () => {
        const testValue = "test@test.com";
        const e = new Engineer("Foo", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
      });


test("getRole() should return \"Intern\"", () => {
  //code goes here
    const testValue = "Intern";
    const e = new Intern("Foo", 1, testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

test("Can get school via getSchool()", () => {
  //code goes here
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Engineer("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });