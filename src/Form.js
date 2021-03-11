//Form.js
import { useEffect, useState } from "react";

const Form = (props) => {
    const [userChoice, setUserChoice] = useState("placeholder")    
    useEffect(() => {
        if (userChoice !== "placeholder") {
            props.getPhotos(userChoice);
        }
    })
    return (
        <form className="city-choice">
            <label htmlFor="userChoice" className="sr-only">Select the city</label>
            <select
                value={userChoice}
                id="userChoice"
                name="userChoice"
                onChange={(e) => setUserChoice(e.target.value)}
                required
            >
                <option value="placeholder" disabled>Pick city</option>
                <option value="paris">Paris</option>
                <option value="new york">New York</option>
                <option value="london">London</option>
                <option value="amsterdam">Amsterdam</option>
                <option value="rome">Rome</option>
                <option value="venice">Venice</option>
                <option value="milan">Milan</option>
                <option value="istanbul">Istanbul</option>
                <option value="kyoto">Kyoto</option>
                <option value="beijing">Beijing</option>
                <option value="dubai">Dubai</option>
                <option value="berlin">Berlin</option>
                <option value="shanghai">Shanghai</option>
            </select>
        </form>
    )
}

export default Form;