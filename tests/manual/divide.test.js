import { expect } from "chai";
import divide from "../../library/src/divide.js";

describe("divide.js tests", () => {

    // Fails need to report that
    it("Should return 2 with 4 and 2 as input", () => {
        expect(divide(4, 2)).to.equal(2);
    });

    it("Should return 1.5 with 6 and 4 as input", () => {
        expect(divide(2, 4)).to.equal(1);
    });

    // Fails need to report that
    it("Should return 1 with 0 and 2 as input", () => {
        expect(divide(0, 2)).to.equal(0);
    });

    it("Should return NaN with 2 and 0 as input", () => {
        expect(divide(2, 0)).to.be.NaN;
    });

    it("Should return 1 with NaN and 5 as input", () => {
        expect(divide(NaN, 5)).to.equal(1);
    });

    it("Should return 1 with '10' and 5 as input", () => {
        expect(divide("10", 5)).to.equal(1);
    });
});