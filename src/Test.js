// So here we will test adding in an additional file

import {Fragment} from "react";

function Test() {

    const user = {
        firstName: 'Kit',
        lastName: 'Thornton'
    };

    return (
        <Fragment>
            {PopulateElement(user)}
            {PopulateElement()}
            <Welcome firstName="Nanhah" lastName="Cute"/>
            <Comment text="hello you cunt" date={ new Date() }/>
        </Fragment>
    );
}

function PopulateElement(user)
{
    let elem;

    if (user){
        elem = (
            <div>
                Hello {FormatUserName(user)}
            </div>
        )
    } else {
        elem = (
            <div>
                Hello you stranger cunt
            </div>
        )
    }

    return elem;
}

function FormatUserName(user)
{
    return user.firstName + ' ' + user.lastName;
}

function Welcome(props){
    return (
        <ol>
            <li>First: {FormatUserName(props)}</li>
            <li>Second: Jonty</li>
            <li>Third: Kit</li>
        </ol>
    )
}

function Comment(props){
    return (
        <div className="Comment">
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>

    )
}

function formatDate(date) {
    return date.toLocaleDateString();
}


export default Test;
