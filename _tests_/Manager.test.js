__tests__/Manager.test.js

const Manager = require("../lib/Manager");

test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

test("Can set Phone number account via constructor", () => {
  //code goes here
    const testValue = "123-456-7890";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getPhone()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  //code goes here
    const testValue = "Manager";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can set Email via constructor", () => {
    //code goes here
    const testValue = "test@test.com";
    const e = new Engineer("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  test("Can set ID via constructor", () => {
    //code goes here
    const testValue = 100;
    const e = new Engineer("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });

  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("Can get Phone number via getPhone()", () => {
    //code goes here
    const testValue = "123-456-7890";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getPhone()).toBe(testValue);
    });



test("Can get GitHub username via getGithub()", () => {
  //code goes here
    const testValue = "GitHubUser";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getGithub()).toBe(testValue);
});