import React, { Component } from "react"
import * as api from "../services/api"
import UserHomePosts from "./UserHomePosts"

class UserHome extends Component {
    state = {
        info: {},
        posts: [],
        albums: [],
    }

    componentDidMount() {
        const { match } = this.props
        const userName = match.params.userName;
        api.getUserInfo(userName).then(([info, posts, albums]) => {
            this.setState({ info, posts, albums })
        })
    }

    render() {
        const { match } = this.props
        const userName = match.params.userName;
        const { info, posts } = this.state

        return (
            <div>
                <h1> User home {info.name}</h1>
                <h2>Posts</h2>
                <UserHomePosts posts={posts} />
            </div>
        )

    }
}

export default UserHome;
