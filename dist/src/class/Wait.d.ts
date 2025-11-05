export interface WaitInitOption {
    notice?: {
        message: string;
        offset: number;
    };
    timeout?: {
        message: string;
        offset: number;
    };
}
export type waitFunction = () => void;
declare class Wait {
    notice?: {
        show: boolean;
        message: string;
        timer: number;
    };
    timeout?: {
        message: string;
        timer: number;
    };
    list: waitFunction[];
    constructor(initOption: WaitInitOption);
    push(value: waitFunction): void;
    trigger(): void;
    destroy(): void;
}
export default Wait;
