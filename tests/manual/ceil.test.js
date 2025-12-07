import { expect } from "chai";
import ceil from "../../library/src/ceil.js";

describe("ceil.js tests", () => {

    it("Should round 4.006 up to 5", () => {
        expect(ceil(4.006)).to.equal(5);
    });

    it("Should round 6.004 to 2 decimal places → 6.01", () => {
        expect(ceil(6.004, 2)).to.equal(6.01);
    });

    it("Should round 6040 with -2 precision → 6100", () => {
        expect(ceil(6040, -2)).to.equal(6100);
    });

    it("Should return the same number if already an integer", () => {
        expect(ceil(12)).to.equal(12);
    });

    it("Should round negative numbers correctly", () => {
        expect(ceil(-1.2)).to.equal(-1);   // up means toward +∞
    });

    it("Should round negative numbers with precision", () => {
        expect(ceil(-1.234, 2)).to.equal(-1.23);
    });

    it("Should clamp precision > 292 to 292", () => {
        const result = ceil(1.123456, 500);
        expect(result).to.equal(ceil(1.123456, 292));
    });

    it("Should clamp precision < -292 to -292", () => {
        const result = ceil(12345, -500);
        expect(result).to.equal(ceil(12345, -292));
    });

    it("Should handle null precision as 0", () => {
        expect(ceil(4.1, null)).to.equal(5);
    });

    it("Should handle undefined precision as 0", () => {
        expect(ceil(4.1, undefined)).to.equal(5);
    });

});
