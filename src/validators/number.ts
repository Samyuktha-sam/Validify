import { IRule } from "../interfaces/Rule";
import ValidifyContext from "../ValidifyContext";

export default class NumberValidatorContext extends ValidifyContext {
    rules: IRule[] = [
        {
            name: "number",
            func: (value: any) => typeof value === "number",
        },
    ];
// Add number-specific validation methods here
    max(max: number): NumberValidatorContext {
        this.addRule({
            name: "max",
            func: (value: any) => value <= max,
        });
        return this;
    }

    min(min: number): NumberValidatorContext {
        this.addRule({
            name: "min",
            func: (value: any) => value >= min,
        });
        return this;
    }

    required(): NumberValidatorContext {
        this.addRule({
            name: "required",
            func: (value: any) => value !== undefined && value !== null && value !== "",
        });
        return this;
    }

    integer(): NumberValidatorContext {
        this.addRule({
            name: "integer",
            func: (value: any) => Number.isInteger(value),
        });
        return this;
    }

    positive(): NumberValidatorContext {
        this.addRule({
            name: "positive",
            func: (value: any) => value > 0,
        });
        return this;
    }

    negative(): NumberValidatorContext {
        this.addRule({
            name: "negative",
            func: (value: any) => value < 0,
        });
        return this;
    }

    zero(): NumberValidatorContext {
        this.addRule({
            name: "zero",
            func: (value: any) => value === 0,
        });
        return this;
    }

    notZero(): NumberValidatorContext {
        this.addRule({
            name: "notZero",
            func: (value: any) => value !== 0,
        });
        return this;
    }

    range(min: number, max: number): NumberValidatorContext {
        this.addRule({
            name: "range",
            func: (value: any) => value >= min && value <= max,
        });
        return this;
    }

    greaterThan(value: number): NumberValidatorContext {
        this.addRule({
            name: "greaterThan",
            func: (value: any) => value > value,
        });
        return this;
    }

    lessThan(value: number): NumberValidatorContext {
        this.addRule({
            name: "lessThan",
            func: (value: any) => value < value,
        });
        return this;
    }

    equal(value: number): NumberValidatorContext {
        this.addRule({
            name: "equal",
            func: (value: any) => value === value,
        });
        return this;
    }
}