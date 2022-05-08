const { exportAllDeclaration } = require('@babel/types');
const { default: TestRunner } = require('jest-runner');
const { isTypedArray } = require('util/types');
const { describe } = require('yargs');
const Employee = require('../lib/Employee.js');


test('creates an employee', () => {
    const employee = new Employee('Linda', 1, 'linda@company.com');
    const name = 'Linda';
    const id = 1; 
    const email = 'linda@company.com';

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
});

test('get name', () => {
    const employee = new Employee('Linda', 1, 'linda@company.com');

    const name = employee.getName();

    expect(employee.name).toBe(name);
});

test('get id', () => {
    const employee = new Employee('Linda', 1, 'linda@company.com');

    const id = employee.getId();

    expect(employee.id).toBe(id);
});

test('get email', () => {
    const employee = new Employee('Linda', 1, 'linda@company.com');

    const email = employee.getEmail();

    expect(employee.email).toBe(email);
});

test('get role', () => {
    const employee = new Employee('Linda', 1, 'linda@company.com');

    expect(employee.getRole()).toBe('Employee');
});