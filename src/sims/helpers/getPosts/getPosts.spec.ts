import {AuthServiceStub, Email, Phone} from "../../../services/AuthService/AuthServiceDummy";
import {getPosts} from "./getPosts";
import {waitFor} from "@testing-library/react";
jest.mock("../loadPosts/loadPosts", () => (
    {
        loadPosts: () => Promise.resolve([{ id: 1, text: "test" }]),
    }
))

describe("getPosts", () => {
    it("get posts if user is logged in", async () => {
        const authServiceStub = new AuthServiceStub(true);
        const result = await getPosts(authServiceStub);
        expect(result).toEqual([{ id: 1, text: "test" }]);
    })
    it("call AuthService.isLoggedIn", async () => {
        const isLoggedIn = jest.fn(() => true);
        const authServiceStub = {
            loginByPhone: (p: Phone) => Promise.resolve(""),
            loginByEmail: (e:Email) => Promise.resolve(""),
            logout: () => Promise.resolve(),
            isLoggedIn,
        }
        getPosts(authServiceStub);
        await waitFor(() => expect(isLoggedIn).toHaveBeenCalledTimes(1));
    })
})

jest.spyOn(window.navigator, "userAgent", "get")
    .mockImplementation(() => 'Chrome/104.0.0.0')



it("mock works", () => {
    const mockCallback = jest.fn(x => 42 + x);
    [0, 1].forEach(mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
})

describe("setup and reset", () => {
    beforeAll(() => { console.log("start all tests...") })
    afterAll(() => { console.log("finish all tests...") })

    beforeEach(() => { console.log("start next test") })
    afterEach(() => { console.log("finished one test") })
})
