import NumberValidatorContext from "./validators/number";
import StringValidatorContext from "./validators/string";
import { IValidifyContext } from "./ValidifyContext";

function Validify(): IValidifyContextBuilder {
    return new ValidifyBuilder();
}

export interface IValidifyContextBuilder {
    string(): StringValidatorContext;
    number(): NumberValidatorContext;
}
class ValidifyBuilder {
    string(): StringValidatorContext {
        return new StringValidatorContext();
    }

    number(): NumberValidatorContext {
        return new NumberValidatorContext();
    }
}

export default Validify;