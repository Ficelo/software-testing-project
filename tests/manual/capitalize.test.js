import { expect } from "chai";
import capitalize from "../../library/src/capitalize.js";

describe("capitalize.js tests", () => {

    it("Should capitalize the first letter of apple", () => {
        expect(capitalize("apple")).to.equal("Apple");
    });

    it("Sould make the first letter upper case and other letters of BANANA lowercase", () => {
        expect(capitalize("BANANA")).to.equal("Banana");
    });

    it("Should not change 123", () => {
        expect(capitalize("123")).to.equal("123");
    });

    it("Should not have issues with empty strings", () => {
        expect(capitalize("")).to.equal("");
    });

    it("Should return Undefined when undefined is used as input", () => {
        expect(capitalize(undefined)).to.equal("Undefined");
    });

    it("Should return True when true is used as input", () => {
        expect(capitalize(true)).to.be.equal("True");
    })

});