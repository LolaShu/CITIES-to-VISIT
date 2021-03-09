//CityList.js
const CityList = (props) => {
    //log out the props object this component is receiving from its parent
    console.log(props);
    return (
        <div className="city-list">
            <h2>Cities I want to visit {props.bookTitle}</h2>
            {/* 
    - in React, we attach the event directly on the element on which it occurs 
        - define the click event on the button
        - define the event handler as the props method passed from the parent (App)
      */}
            <button onClick={props.removeBookFunction}>I have read this book!</button>
        </div>
    )
}
export default DisplayedBook;