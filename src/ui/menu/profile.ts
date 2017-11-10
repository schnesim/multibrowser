export class Profile {
    private _urls: Array<string>;
    private _name: string;
    constructor(name: string, urls: Array<string>) {
        this._name = name;
        this._urls = urls;
    }

    get name(): string {
        return this._name;
    }

    get urls(): Array<string> {
        return this._urls;
    }
}