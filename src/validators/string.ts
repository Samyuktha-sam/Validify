import { IRule } from "../interfaces/Rule";
import ValidifyContext, { IValidifyContext } from "../ValidifyContext";

export default class StringValidatorContext extends ValidifyContext {
    rules: IRule[] = [
        {
            name: "string",
            func: (value: any) => typeof value === "string",
        },
    ];

    addRule(rule: IRule): void {
        this.rules.push(rule);
    }

    email(): StringValidatorContext {
        this.addRule({
            name: "email",
            func: (value: any) => rEmail.test(value),
        });
        return this;
    }

    url(): StringValidatorContext {
        this.addRule({
            name: "url",
            func: (value: any) => rUrl.test(value),
        });
        return this;
    }

    uuid(): StringValidatorContext {
        this.addRule({
            name: "uuid",
            func: (value: any) => rUUID.test(value),
        });
        return this;
    }

    isoDateTime(): StringValidatorContext {
        this.addRule({
            name: "isoDateTime",
            func: (value: any) => rIsoDateTime.test(value),
        });
        return this;
    }

    required(): StringValidatorContext {
        this.addRule({
            name: "required",
            func: (value: any) => value !== undefined && value !== null && value !== "",
        });
        return this;
    }

    minLength(length: number): StringValidatorContext {
        this.addRule({
            name: "minLength",
            func: (value: any) => value.length >= length,
        });
        return this;
    }

    maxLength(length: number): StringValidatorContext {
        this.addRule({
            name: "maxLength",
            func: (value: any) => value.length <= length,
        });
        return this;
    }
}

// Taken from HTML spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
let rEmail =
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

let rUrl =
    // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

// eslint-disable-next-line
let rUUID =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

let yearMonthDay = "^\\d{4}-\\d{2}-\\d{2}";
let hourMinuteSecond = "\\d{2}:\\d{2}:\\d{2}";
let zOrOffset = "(([+-]\\d{2}(:?\\d{2})?)|Z)";
let rIsoDateTime = new RegExp(`${yearMonthDay}T${hourMinuteSecond}(\\.\\d+)?${zOrOffset}$`);
