export interface Storycard{
    id: string;
    title: string;
    description: string;
    status:string;
    comments:Comments[];
}

export interface Comments{
    id:string;
    com:string
}