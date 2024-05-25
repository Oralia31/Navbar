export type ButtonNavProps = {
    list: ArrayInformation[];
    onClick? : any;
    //onClick?: (value?: any) => void;
    idButton: string;
}

export type ArrayInformation = {
        id: string;
        heading: string;
        paragraph: string;
}