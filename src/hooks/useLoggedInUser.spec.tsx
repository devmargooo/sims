import {renderHook, waitFor} from "@testing-library/react";
import {useLoggedInUser} from "./useLoggedInUser";
import {AuthServiceStub, Email} from "../services/AuthService/AuthServiceDummy";

describe("useLoggedInUser", () => {
    it("returns logged in user", async () => {
        const email:Email = "abc@test.ru";
        const {result, rerender} = renderHook(useLoggedInUser, {
            initialProps: { login: email },
        })
        await waitFor(() => expect(result.current).toEqual('Katya'))
        rerender({ login: "" });
        expect(result.current).toEqual('Unknown');
    })
})
