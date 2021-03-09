//Form.js
import { useState } from 'react';

const Form = (props) => {
    const [userChoice, setUserChoice] = useState("")
    console.log(userChoice)
    return (
        <form className="cityChoice" onSubmit={(e) => {
            e.preventDefault();
            props.getPhotos(userChoice);}
        }>
            <select
                value={userChoice}
                id="userChoice"
                name="userChoice"
                onChange={(e) => setUserChoice(e.target.value)}
            >
                <option value="placeholder" defaultValue>pick city:</option>
                <option value="paris">paris</option>
                <option value="new york">New York</option>
                <option value="london">London</option>
                <option value="toronto">Toronto</option>
                <option value="vancouver">Vancouver</option>
                <option value="amsterdam">Amsterdam</option>
                <option value="rome">Rome</option>
                <option value="venice">Venice</option>
                <option value="milan">Milan</option>
                <option value="istanbul">Istanbul</option>
                <option value="chicago">Chicago</option>
                <option value="bruges">Bruges</option>
                <option value="kyoto">Kyoto</option>
                <option value="Queenstown">Queenstown</option>
                <option value="beijing">Beijing</option>
                <option value="dubai">Dubai</option>
                <option value="berlin">Berlin</option>
                <option value="shanghai">Shanghai</option>
            </select>
            <button type="submit">this city</button>
        </form>
    )
}

export default Form;