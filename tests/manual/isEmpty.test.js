import { expect } from "chai";
import isEmpty from "../../library/src/isEmpty.js";

describe("isEmpty.js tests", () => {

    it("Should return true for null", () => {
        expect(isEmpty(null)).to.equal(true);
    });

    it("Should return true for undefined", () => {
        expect(isEmpty(undefined)).to.equal(true);
    });

    it("Should return true for true", () => {
        expect(isEmpty(true)).to.equal(true);
    });

    it("Should return true for number", () => {
        expect(isEmpty(1)).to.equal(true);
    });

    it("Should return true for empty array []", () => {
        expect(isEmpty([])).to.equal(true);
    });

    it("Should return false for non-empty array [1, 2, 3]", () => {
        expect(isEmpty([1, 2, 3])).to.equal(false);
    });

    it("Should return true for empty string ''", () => {
        expect(isEmpty("")).to.equal(true);
    });

    it("Should return false for non-empty string 'abc'", () => {
        expect(isEmpty("abc")).to.equal(false);
    });

    it("Should return true for empty arguments object", () => {
        function fn() { return isEmpty(arguments); }
        expect(fn()).to.equal(true);
    });

    it("Should return false for non-empty arguments object", () => {
        function fn() { return isEmpty(arguments); }
        expect(fn(1,2)).to.equal(false);
    });

    it("Should return true for empty Buffer", () => {
        const buf = Buffer.from([]);
        expect(isEmpty(buf)).to.equal(true);
    });

    it("Should return false for non-empty Buffer", () => {
        const buf = Buffer.from([1]);
        expect(isEmpty(buf)).to.equal(false);
    });

    it("Should return true for empty Uint8Array", () => {
        expect(isEmpty(new Uint8Array())).to.equal(true);
    });

    it("Should return false for non-empty Uint8Array", () => {
        expect(isEmpty(new Uint8Array([1]))).to.equal(false);
    });

    it("Should return true for empty Map", () => {
        expect(isEmpty(new Map())).to.equal(true);
    });

    it("Should return false for non-empty Map", () => {
        const map = new Map();
        map.set("a", 1);
        expect(isEmpty(map)).to.equal(false);
    });

    it("Should return true for empty Set", () => {
        expect(isEmpty(new Set())).to.equal(true);
    });

    it("Should return false for non-empty Set", () => {
        const set = new Set();
        set.add(1);
        expect(isEmpty(set)).to.equal(false);
    });

    it("Should return true for empty object {}", () => {
        expect(isEmpty({})).to.equal(true);
    });

    it("Should return false for object with properties", () => {
        expect(isEmpty({ a: 1 })).to.equal(false);
    });

    it("Should return true for empty object prototype", () => {
        function A() {}
        expect(isEmpty(A.prototype)).to.equal(true);
    });

    it("Should return false for prototype with properties", () => {
        function A() {}
        A.prototype.x = 1;
        expect(isEmpty(A.prototype)).to.equal(false);
    });

    it("Should return true for functions with no properties", () => {
        function f() {}
        expect(isEmpty(f)).to.equal(true);
    });

    it("Should return false for functions with properties", () => {
        function f() {}
        f.x = 1;
        expect(isEmpty(f)).to.equal(false);
    });

});
