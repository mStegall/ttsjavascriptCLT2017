import React, { Component } from "react"

import { Link } from "react-router-dom"

const UserHomePost = ({ post }) => (
    <li><Link to={`../posts/${post.id}`}>{post.title}</Link></li>
)

export default class UserHomePosts extends Component {
    render() {
        const { posts } = this.props
        return (
            <ul>
                {posts.map(post => <UserHomePost key={post.id} post={post} />)}
            </ul>
        )
    }
}