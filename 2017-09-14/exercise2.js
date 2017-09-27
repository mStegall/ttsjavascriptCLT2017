$(document).ready(function () {
    var container = $('#root')
    function clearContainer() {
        container.html("")
    }

    function homeScreen(error) {
        clearContainer();


        var input = $('<input type="text" />')
        var button = $('<button>Search</search>')

        button.click(function () {
            getUserInfo(input.val())
                .then(function(response){
                    userScreen.apply(null, response)
                })
                .catch(err => {
                    if(err.message === "NOUSER"){
                        return homeScreen("<script>alert('hey you screwed up')</script>")
                    }

                    alert(err);
                })
        })

        if (error){
            // Render your error
            const errorMessage = $(`<div>${error}</div>`)
            container.append(errorMessage)
        }

        container.append(input);
        container.append(button);
    }

    function userScreen(userInfo, postData, albumData) {
        clearContainer();
        console.log("User info: ", JSON.stringify(userInfo))
        console.log("Post data: ", JSON.stringify(postData))
        console.log("Album data: ", JSON.stringify(albumData))

        // var userName = $('<h1></h1>')
        // userName.text(user)

        // container.append(userName)
    }

    function postScreen() {

    }

    function albumScreen() {

    }

    function myFetch(url) {
        return fetch(url)
            .then(function fetchCheck(response) {
                if (response.status >= 400) throw new Error()

                return response
            })
            .then(function (response) { return response.json() })
    }

    function getUserInfo(name) {
        clearContainer();
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

    function getPosts() {
        clearContainer();
        //Make a GET request for the items to render
        $.get('http://jsonplaceholder.typicode.com/posts', function (posts) {
            // Create a new unorderd list
            var list = $('<ul></ul>');
            //Iterate over the response, adding elements to DOM
            posts.forEach(function (post) {
                var li = $('<li></li>');
                li.text(post.title);
                list.append(li);
            })
            container.append(list)
        })
    }

    homeScreen()
})