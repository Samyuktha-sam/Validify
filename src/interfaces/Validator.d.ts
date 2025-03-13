export type SimpleValidator = (value: any) => boolean;
export type ErrorMessageValidator = (value: any) => string;
export type Validator = SimpleValidator | ErrorMessageValidator;