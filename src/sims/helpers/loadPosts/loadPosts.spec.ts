import {loadPosts} from "./loadPosts";

describe("loadPosts", () => {
    it("load posts", (done) => {
        loadPosts().then((data) => {
            expect(data).toEqual([{
                id: 123,
                text: "lorem ipsum"
            }])
            done();
        })
    })
})
