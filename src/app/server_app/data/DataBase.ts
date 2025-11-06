import { generateRandomId } from "./IdGenerator";

type ObjectWithId = {
    id?: string
}

export class DataBase<T extends ObjectWithId> {

    private elements: T[] = [];

    public async insert(arg: T) {
        arg.id = generateRandomId();
        this.elements.push(arg);
        return arg.id;
    }

    public async getBy<K extends keyof T>(argName: K, argValue: T[K]): Promise<T | undefined> {
        return this.elements.find(x => x[argName] === argValue);
    }

    public async findAllBy<K extends keyof T>(argName: K, argValue: T[K]): Promise<T[]> {
        return this.elements.filter(x => x[argName] === argValue);
    }

    public async update<K extends keyof T>(id: string, argName: K, argValue: T[K]): Promise<void> {
        const index = this.elements.findIndex(x => x.id === id);
        if (index >= 0) {
            const item = this.elements[index];
            if (item) {
                (item as any)[argName] = argValue;
                this.elements[index] = item;
            }
        }
    }

    public async delete(id: string): Promise<void> {
        const index = this.elements.findIndex(x => x.id === id);
        if (index >= 0) {
            this.elements.splice(index, 1);
        }
    }

    public async getAllElements(): Promise<T[]> {
        return this.elements;
    }

}