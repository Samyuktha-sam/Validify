export interface IRule {
    name: string;
    func: (value: any, ...args: any[]) => boolean | string;
    args?: any[];
}