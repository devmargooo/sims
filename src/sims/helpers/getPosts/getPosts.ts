import {IAuthService} from "../../../services/AuthServiceDummy";
import {loadPosts, Post} from "../loadPosts/loadPosts";

export function getPosts(authService:IAuthService):Promise<Post[]> {
    if (authService.isLoggedIn()) {
        return loadPosts();
    }
    throw new Error("please log in");
}
