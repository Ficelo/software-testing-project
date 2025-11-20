import { expect } from "chai";
import add from "../../library/src/add.js";

describe("add.js tests", () => {

    it("Should return 5 with 2 & 3 as input", () => {
        expect(add(2, 3)).to.equal(5);
    });

    it("Should return 5 with 3 & 2 as input", () => {
        expect(add(3, 2)).to.equal(5);
    });
    
    it("Should return 3 with -1 & 4 as input", () => {
        expect(add(-1, 4)).to.equal(3);
    });

    it("Should return 3 with 4 & -1 as input", () => {
        expect(add(4, -1)).to.equal(3);
    });

    it("Should return 0 with 0 & 0 as inputs", () => {
        expect(add(0, 0)).to.equal(0);
    });

    it("Should return 2 with 2 & 0 as inputs", () => {
        expect(add(2, 0)).to.equal(2);
    });

    it("Should return 2 with 0 & 2 as inputs", () => {
        expect(add(0, 2)).to.equal(2);
    });

    it("Should return '84' with '8' & '4' as inputs" , () => {
        expect(add("8", "4")).to.equal('84');
    });

    it("Should return 2 with null & 2 as inputs", () => {
        expect(add(null, 2)).to.equal(2)
    });

    it("Should return 2 with 2 & null as inputs", () => {
        expect(add(null, 2)).to.equal(2)
    });

    it("Should return 0 with null & null as inputs", () => {
        expect(add(null, null)).to.equal(0)
    });
});
