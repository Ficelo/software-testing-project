import { expect } from "chai";
import camelCase from "../../library/src/camelCase.js";

describe("camelCase.js tests", () => {

    // Seems like all the results have an extra ' ' at the start

    it("Should return fooBar with 'Foo Bar' as input", () => {
        expect(camelCase("Foo Bar")).to.equal("fooBar");
    });

    it("Should return fooBar with '---foo-bar---' as input", () => {
        expect(camelCase("---foo-bar---")).to.equal("fooBar");
    });

    it("Should return fooBar with '__FOO_BAR__' as input", () => {
        expect(camelCase("__FOO_BAR__")).to.equal("fooBar");
    });

    it("Should return '14' with 14 as input", () => {
        expect(camelCase(14)).to.equal("14");
    });

    it("Should return 'true' with true as input", () => {
        expect(camelCase(true)).to.equal("true");
    });

    it("Should return 'undefined' with undefined as input", () => {
        expect(camelCase(undefined)).to.equal("undefined");
    });

});