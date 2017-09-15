$(document).ready(function () {
    var container = $('#root')
    function clearContainer() {
        container.html("")
    }

    function homeScreen() {
        clearContainer();

        var input = $('<input type="text" />')
        var button = $('<button>Search</search>')

        button.click(function() {
           userScreen(input.val())
        })

        container.append(input);
        container.append(button);
    }

    function userScreen(user) {
        clearContainer();

        var userName = $('<h1></h1>')
        userName.text(user)

        container.append(userName)
    }

    function postScreen() {

    }

    function albumScreen() {

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