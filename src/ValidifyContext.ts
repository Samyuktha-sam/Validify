import { IRule } from "./interfaces/Rule";

export interface IValidifyContext {
    rules: IRule[];
    addRule: (rule: IRule) => void;
    validate: (value: any) => boolean;
}

export default abstract class ValidifyContext implements IValidifyContext {
    rules: IRule[] = []; 

    constructor() {
        this.addRule = this.addRule.bind(this);
        this.validate = this.validate.bind(this);
        this.getErrorMessage = this.getErrorMessage.bind(this);
    }

    addRule(rule: IRule): void {
        this.rules.push(rule);
    }

    validate(value: any): boolean {
        return this.rules.every(rule => rule.func(value) || false);
    }

    getErrorMessage(value: any): string {
        return this.rules.map(rule => rule.func(value)).filter(result => typeof result === "string")[0];
    }
}