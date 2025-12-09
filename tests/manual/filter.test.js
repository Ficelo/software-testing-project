import { expect } from "chai";
import filter from "../../library/src/filter.js";

describe("filter.js tests", () => {

    it("Should return only even numbers from an array", () => {
        const numbers = [1, 2, 3, 4, 5, 6];
        const result = filter(numbers, n => n % 2 === 0);
        expect(result).to.deep.equal([2, 4, 6]);
    });

    it("Should return only truthy values from an array", () => {
        const arr = [0, 1, false, true, "", "hello"];
        const result = filter(arr, Boolean);
        expect(result).to.deep.equal([1, true, "hello"]);
    });

    it("Should return an empty array if no elements match", () => {
        const arr = [1, 3, 5];
        const result = filter(arr, n => n % 2 === 0);
        expect(result).to.deep.equal([]);
    });

    it("Should return an empty array if the input array is empty", () => {
        const result = filter([], n => n);
        expect(result).to.deep.equal([]);
    });

    it("Should handle undefined array input gracefully", () => {
        const result = filter(undefined, n => n);
        expect(result).to.deep.equal([]);
    });

    it("Should work with objects in an array", () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false }
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).to.deep.equal([{ user: 'barney', active: true }]);
    });

});
