import { expect } from "chai";
import reduce from "../../library/src/reduce.js";

describe("reduce.js tests", () => {

    it("Should sum numbers in an array with an explicit accumulator", () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
        expect(result).to.equal(6);
    });

    it("Should sum numbers in an array without an explicit accumulator", () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n);
        // First element (1) becomes the initial accumulator → 1 + 2 + 3 = 6
        expect(result).to.equal(6);
    });

    it("Should reduce an object by grouping keys by their values", () => {
        const result = reduce(
            { a: 1, b: 2, c: 1 },
            (acc, value, key) => {
                (acc[value] || (acc[value] = [])).push(key);
                return acc;
            },
            {}
        );

        expect(result).to.deep.equal({
            1: ["a", "c"],
            2: ["b"]
        });
    });

    it("Should return undefined for an empty array with no accumulator", () => {
        const result = reduce([], (acc, n) => acc + n);
        expect(result).to.equal(undefined);
    });

    it("Should return the initial accumulator for an empty array", () => {
        const result = reduce([], (acc, n) => acc + n, 10);
        expect(result).to.equal(10);
    });

    it("Should handle null input", () => {
        const result = reduce(null, (acc, n) => acc + n, 5);
        expect(result).to.equal(5);
    });

    it("Should handle undefined input", () => {
        const result = reduce(undefined, (acc, n) => acc + n, 5);
        expect(result).to.equal(5);
    });

    it("Should work with string concatenation", () => {
        const result = reduce(["a", "b", "c"], (acc, char) => acc + char, "");
        expect(result).to.equal("abc");
    });

    it("Should pass correct parameters to iteratee", () => {
        const arr = [10, 20, 30];
        const calls = [];

        reduce(arr, (acc, value, index, collection) => {
            calls.push({ acc, value, index, collection });
            return acc + value;
        }, 0);

        expect(calls.length).to.equal(3);
        expect(calls[0]).to.deep.include({ acc: 0, value: 10, index: 0 });
        expect(calls[0].collection).to.equal(arr);
    });

});
