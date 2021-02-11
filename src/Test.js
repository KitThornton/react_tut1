// So here we will test adding in an additional file

function Test() {

    const user = {
        firstName: 'Kit',
        lastName: 'Thornton'
    };

    return (
        <fragment>
            {PopulateElement(user)}
            {PopulateElement()}
            {TickingClock()}
            <Welcome firstName="Nanhah" lastName="Cute"/>
        </fragment>
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

function TickingClock()
{
    return (
        <div>
            It is currently {new Date().toLocaleTimeString()}
        </div>
    )
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

export default Test;
