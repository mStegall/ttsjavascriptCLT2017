import myFetch from "./fetch"

export function getUserInfo(name) {
    //Make a GET request for the items to render
    return myFetch('http://jsonplaceholder.typicode.com/users?username=' + name)
        .then(function (users) {
            // Create a new unorderd list
            var user = users[0];
            if(!user){
                // What do we do if there is not a user?
                throw new Error("NOUSER")
            }
            var userId = user.id;
            var getUserPosts = myFetch('http://jsonplaceholder.typicode.com/posts?userId=' + userId);
            var getUserAlbums = myFetch('http://jsonplaceholder.typicode.com/albums?userId=' + userId);

            return Promise.all([user, getUserPosts, getUserAlbums]);
        })
}

export function getPostInfo(postId){
    //Make a GET request for the items to render
    const postData = myFetch(`http://jsonplaceholder.typicode.com/posts?id=${postId}`);
    const commentsData = myFetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`);

    return Promise.all([postData, commentsData]);
}