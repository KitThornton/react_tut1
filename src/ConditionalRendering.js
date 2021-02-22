// Tutorial #7
import React from "react"

class conditionalRendering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedOn: true};

    }

    render() {

        function UserGreeting() {
            return <h1>Welcome back!</h1>
        }

        function GuestGreeting() {
            return <h1>Sign up!</h1>
        }

        const isLoggedIn = this.state.isLoggedOn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
}

export default conditionalRendering