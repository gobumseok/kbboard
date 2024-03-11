import { Response } from 'express';
export declare class MainController {
    private readonly logger;
    main_page(res: Response): Promise<void>;
    welcome(res: Response): void;
    root(res: Response): void;
    printName(res: Response): void;
    anotherLayout(res: Response): void;
    getArray(res: Response): void;
}
