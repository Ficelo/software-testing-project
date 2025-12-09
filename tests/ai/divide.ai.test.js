import { expect } from "chai";
import divide from "../../library/src/divide.js";

describe("divide.js ai tests", () => {

    // ───────────────────────────────────────────────
    // Basic division
    // ───────────────────────────────────────────────
    it("Should divide 6 by 4 → 1.5", () => {
        expect(divide(6, 4)).to.equal(1.5);
    });

    it("Should divide negative numbers", () => {
        expect(divide(-10, 2)).to.equal(-5);
        expect(divide(10, -2)).to.equal(-5);
        expect(divide(-10, -2)).to.equal(5);
    });

    // ───────────────────────────────────────────────
    // Decimal division
    // ───────────────────────────────────────────────
    it("Should handle decimals correctly", () => {
        expect(divide(7.5, 2.5)).to.equal(3);
    });

    // ───────────────────────────────────────────────
    // Division by zero
    // ───────────────────────────────────────────────
    it("Should return Infinity when dividing by 0", () => {
        expect(divide(10, 0)).to.equal(Infinity);
    });

    it("Should return -Infinity when dividing a negative number by 0", () => {
        expect(divide(-10, 0)).to.equal(-Infinity);
    });

    it("Should return NaN for 0 / 0", () => {
        expect(divide(0, 0)).to.be.NaN;
    });

    // ───────────────────────────────────────────────
    // Non-number coercion (handled by createMathOperation)
    // ───────────────────────────────────────────────
    it("Should coerce string numbers correctly", () => {
        expect(divide("20", "5")).to.equal(4);
    });

    it("Should return NaN if inputs cannot be converted to numbers", () => {
        expect(divide("foo", 2)).to.be.NaN;
        expect(divide(10, "bar")).to.be.NaN;
    });

    // ───────────────────────────────────────────────
    // Missing arguments
    // ───────────────────────────────────────────────
    it("Should return default value (1) if both values are undefined", () => {
        expect(divide(undefined, undefined)).to.equal(1);
    });

    it("Should return first number if divisor is undefined (divide(x, undefined))", () => {
        // Expected: divide(x, undefined) → divide(x, 1) → x
        expect(divide(7, undefined)).to.equal(7);
    });

    it("Should return default value when dividend is undefined but divisor is valid", () => {
        // divide(undefined, 5) → divide(1, 5) → 1/5
        expect(divide(undefined, 5)).to.equal(0.2);
    });

});
