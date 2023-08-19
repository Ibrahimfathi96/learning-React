"use client";
type HeaderParams = {
    text: string;
    subText: string;
}
function Header({ text, subText }: HeaderParams) {
    return (
        <>
            <h1>{text}</h1>
            <h4>{subText}</h4>
        </>
    )
}
export default Header;