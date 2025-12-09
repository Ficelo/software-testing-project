import { expect } from "chai";
import camelCase from "../../library/src/camelCase.js";

describe("camelCase.js ai tests", () => {

    // ───────────────────────────────────────────────
    // Basic expected behaviors
    // ───────────────────────────────────────────────
    it("Should convert 'Foo Bar' to 'fooBar'", () => {
        expect(camelCase("Foo Bar").trim()).to.equal("fooBar");
    });

    it("Should convert '--foo-bar--' to 'fooBar'", () => {
        expect(camelCase("--foo-bar--").trim()).to.equal("fooBar");
    });

    it("Should convert '__FOO_BAR__' to 'fooBar'", () => {
        expect(camelCase("__FOO_BAR__").trim()).to.equal("fooBar");
    });

    // ───────────────────────────────────────────────
    // Unicode & apostrophe handling
    // ───────────────────────────────────────────────
    it("Should strip straight and curly apostrophes", () => {
        expect(camelCase("ma’am").trim()).to.equal("maam");
        expect(camelCase("rock'n'roll").trim()).to.equal("rocknroll");
    });

    // ───────────────────────────────────────────────
    // Words with numbers
    // ───────────────────────────────────────────────
    it("Should camel case words containing numbers", () => {
        expect(camelCase("version 2 update 4").trim()).to.equal("version2Update4");
    });

    it("Should camel case alphanumeric tokens", () => {
        expect(camelCase("abc123 xyz456").trim()).to.equal("abc123Xyz456");
    });

    // ───────────────────────────────────────────────
    // Mixed delimiters
    // ───────────────────────────────────────────────
    it("Should handle mixed delimiters (spaces, hyphens, underscores)", () => {
        expect(camelCase("hello_world-TEST case").trim()).to.equal("helloWorldTestCase");
    });

    // ───────────────────────────────────────────────
    // Case normalization
    // ───────────────────────────────────────────────
    it("Should lowercase the first word and upperFirst subsequent words", () => {
        expect(camelCase("HELLO WORLD TEST").trim()).to.equal("helloWorldTest");
        expect(camelCase("hello world test").trim()).to.equal("helloWorldTest");
        expect(camelCase("HeLLo WoRLD TeST").trim()).to.equal("helloWorldTest");
    });

    // ───────────────────────────────────────────────
    // Leading/trailing/multiple spaces
    // ───────────────────────────────────────────────
    it("Should handle extra whitespace cleanly", () => {
        expect(camelCase("   hello   world   ").trim()).to.equal("helloWorld");
    });

    it("Should collapse multiple internal spaces", () => {
        expect(camelCase("foo    bar    baz").trim()).to.equal("fooBarBaz");
    });

    // ───────────────────────────────────────────────
    // Empty input / null / undefined
    // ───────────────────────────────────────────────
    it("Should return empty string for empty input", () => {
        expect(camelCase("").trim()).to.equal("");
    });

    it("Should return empty string for undefined input", () => {
        expect(camelCase(undefined).trim()).to.equal("");
    });

    it("Should return empty string for null input", () => {
        expect(camelCase(null).trim()).to.equal("");
    });

    // ───────────────────────────────────────────────
    // Non-string input coercion (handled by toString)
    // ───────────────────────────────────────────────
    it("Should handle numbers by converting them to strings", () => {
        expect(camelCase(12345).trim()).to.equal("12345");
    });

    it("Should handle arrays via toString()", () => {
        expect(camelCase(["Hello", "WORLD"]).trim()).to.equal("helloWorld");
    });

    // ───────────────────────────────────────────────
    // Single-word cases
    // ───────────────────────────────────────────────
    it("Should return lowercase version for a single word", () => {
        expect(camelCase("HELLO").trim()).to.equal("hello");
    });

    // ───────────────────────────────────────────────
    // Non-ASCII characters
    // ───────────────────────────────────────────────
    it("Should handle accented characters", () => {
        expect(camelCase("café au lait").trim()).to.equal("caféAuLait");
    });

});
