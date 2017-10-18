import React, { Component } from "react"

import { getPostInfo } from "../services/api"

export default class PostView extends Component {
    state = {
        post: {},
        comments: [],
    }

    componentDidMount() {
        const { match } = this.props
        const { postId } = match.params;

        getPostInfo(postId).then(([posts, comments]) => this.setState({
            post: posts[0],
            comments
        }))
    }

    render() {
        const { post } = this.state
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    }
}