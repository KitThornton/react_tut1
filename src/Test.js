// So here we will test adding in an additional file

function Test() {

    const user = {
        firstName: 'Kit',
        lastName: 'Thornton'
    };

    return (
        <div>
            {PopulateElement(user)}
            {PopulateElement()}
        </div>
    );
};

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

export default Test;
