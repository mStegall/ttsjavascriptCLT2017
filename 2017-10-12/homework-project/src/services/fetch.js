export default function myFetch(url) {
    return fetch(url)
        .then(function fetchCheck(response) {
            if (response.status >= 400) throw new Error()

            return response
        })
        .then(function (response) { return response.json() })
}
