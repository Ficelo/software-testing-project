import { expect } from "chai";
import defaultTo from "../../library/src/defaultTo.js"

describe("defaultTo.js tests", () => {

    it("Should return the original value when value = 1 and default = 10", () => {
        expect(defaultTo(1, 10)).to.equal(1);
    });

    it("Should return defaultValue when value is undefined", () => {
        expect(defaultTo(undefined, 10)).to.equal(10);
    });

    it("Should return defaultValue when value is null", () => {
        expect(defaultTo(null, 10)).to.equal(10);
    });

    it("Should return defaultValue when value is NaN", () => {
        expect(defaultTo(NaN, 10)).to.equal(10);
    });

    it("Should return the original string when value = 'hello'", () => {
        expect(defaultTo("hello", "default")).to.equal("hello");
    });

    it("Should return original boolean when value = false", () => {
        expect(defaultTo(false, true)).to.equal(false);
    });

    it("Should return original object when value = { a: 1 }", () => {
        const obj = { a: 1 };
        expect(defaultTo(obj, { a: 2 })).to.equal(obj);
    });

    it("Should return defaultValue when defaultValue is null and value is undefined", () => {
        expect(defaultTo(undefined, null)).to.equal(null);
    });

    it("Should return value even if defaultValue is undefined", () => {
        expect(defaultTo("x", undefined)).to.equal("x");
    });

});