__tests__/Manager.test.js

const Manager = require("../lib/Manager");

test("Can set GitHUb account via constructor", () => {
  //code goes here
    const testValue = "GitHubUser";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  //code goes here
    const testValue = "Manager";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  //code goes here
    const testValue = "GitHubUser";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getGithub()).toBe(testValue);
});