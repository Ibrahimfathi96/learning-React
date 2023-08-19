"use client";
type ListParams = {
    description: string;
}
function List(props: ListParams) {
    return (
        <p>A List of details {props.description}</p>
    )
}
export default List;