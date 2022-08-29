export type Post = {
    id: number;
    text: string;
}

export function loadPosts():Promise<Post[]> {
    return Promise.resolve([{
        id: 123,
        text: "lorem ipsum"
    }])
}
