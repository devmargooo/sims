export type Item = {
    id:number;
    sectionId?:number;
    title:string;
}


export type Node = {
    id: number,
    title: string;
    sections: Node[];
};

export type PreparedNode = {
    id: number,
    title: string;
    sections: Node[];
    sectionId?:number;
} | null;
