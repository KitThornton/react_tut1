// Here we will explore tutorial #8 which involves manipulating lists and keys.
/*
For example, if you extract a ListItem component, you should keep the key on the
<ListItem /> elements in the array rather than on the <li> element in the ListItem
itself.

Keys serve as a hint to React but they don’t get passed to your components.
If you need the same value in your component, pass it explicitly as a prop with
a different name:
 */
import React from "react"

class ListsAndKeys extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numbers: [1, 2, 3, 4, 5, 6]};
    }

    render(){

        return(
            NumbersList(this.state)
        )
    }
}

function Double(props) {
    const items = props.numbers;
    const doubled = items.map((item) => item * 2);

    return doubled
}

function ListItem(props) {
    return(
        <li>
            {props.value}
        </li>
    )
}

function NumbersList(props) {
    const numbers = Double(props);

    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number}/>
            )}
        </ul>
    )
}

export default ListsAndKeys