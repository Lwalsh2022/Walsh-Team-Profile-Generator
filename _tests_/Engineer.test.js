__tests__/Engineer.test.js

const Engineer = require("../lib/Engineer");

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set GitHUb account via constructor", () => {
  //code goes here
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, testValue);
  expect(e.getGithub()).toBe(testValue);
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


test("getRole() should return \"Engineer\"", () => {
  //code goes here
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  //code goes here
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, testValue);
  expect(e.getGithub()).toBe(testValue);
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