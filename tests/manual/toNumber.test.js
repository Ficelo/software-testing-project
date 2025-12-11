import { expect } from "chai";
import toNumber from "../../library/src/toNumber.js";

describe("toNumber.js tests", () => {

    it("Should return the same number when input is a number", () => {
        expect(toNumber(3.2)).to.equal(3.2);
    });

    it("Should return Infinity for Infinity input", () => {
        expect(toNumber(Infinity)).to.equal(Infinity);
    });

    it("Should convert numeric string '3.2' to number", () => {
        expect(toNumber("3.2")).to.equal(3.2);
    });

    it("Should trim whitespace and convert '   5   ' to number", () => {
        expect(toNumber("   5   ")).to.equal(5);
    });

    it("Should return NaN for bad hex string like '-0x1'", () => {
        expect(Number.isNaN(toNumber("-0x1"))).to.equal(true);
    });

    it("Should parse binary string '0b101' as 5", () => {
        expect(toNumber("0b101")).to.equal(5);
    });

    it("Should parse octal string '0o10' as 8", () => {
        expect(toNumber("0o10")).to.equal(8);
    });

    it("Should return NaN for symbols", () => {
        expect(Number.isNaN(toNumber(Symbol("x")))).to.equal(true);
    });

    it("Should convert object with valueOf() returning number", () => {
        const obj = { valueOf: () => 7 };
        expect(toNumber(obj)).to.equal(7);
    });

    it("Should convert object that becomes string '3'", () => {
        const obj = { toString: () => "3" };
        expect(toNumber(obj)).to.equal(3);
    });

});
