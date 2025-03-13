import Validify from "../src/Validify";

describe("Validify", () => {
    test("should validate string type", () => {
        const v = Validify().string();
        expect(v.validate("hello")).toBe(true);
        expect(v.validate(123)).toBe(false);
    });

    test("should validate number type", () => {
        const v = Validify().number();
        expect(v.validate(123)).toBe(true);
        expect(v.validate("hello")).toBe(false);
    });

    test("should validate multiple rules", () => {
        const v = Validify().string().minLength(5).maxLength(10);
        expect(v.validate("hello")).toBe(true);
        expect(v.validate("hello world")).toBe(false);
        expect(v.validate("hi")).toBe(false);
        expect(v.validate("hello world!")).toBe(false);
    });
});

describe("String validation", () => {
    test("should validate email", () => {
        const v = Validify().string().email();
        expect(v.validate("test@example.com")).toBe(true);
        expect(v.validate("hello")).toBe(false);
    });

    test("should validate url", () => {
        const v = Validify().string().url();
        expect(v.validate("https://example.com")).toBe(true);
        expect(v.validate("hello")).toBe(false);
    });

    test("should validate uuid", () => {
        const v = Validify().string().uuid();
        expect(v.validate("550e8400-e29b-41d4-a716-446655440000")).toBe(true);
        expect(v.validate("hello")).toBe(false);
    });
    
    test("should validate empty string", () => {
        const v = Validify().string().minLength(1);
        expect(v.validate("")).toBe(false);
        expect(v.validate("not empty")).toBe(true);
    });
});