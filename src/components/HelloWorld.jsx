import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USERS = gql`
    {
        users {
            id
            name
        }
    }
`

export class HelloWorld extends React.Component {
    render() {
        return (
            <Query query={GET_USERS}>
                {({loading, error, data}) => {
                    if (loading) return "Loading..."
                    if (error) return `Error! ${error.message}`

                    const hellos = data.users.map(user => {
                        return <h1 key={user.id}>Hello {user.name}</h1>
                    })

                    return (
                        <div className="hello-world">
                            {hellos}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default HelloWorld
