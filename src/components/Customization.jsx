import { supabase } from '../client'
import "./Customization.css"

const Customization = ({operation, operation2, submitElement}) => {

    return (
        <form onSubmit={operation}>
            <div className="inputBoxes">
            <div className="inputBox">
            <label for="name"><h3>Name:</h3></label>
            <input
                type="text"
                id="name"
                placeholder="Enter Crewmate Name"
            />
            </div>
            {/* <br /> */}

            <div className="inputBox">
            <label for="speed"><h3>Speed:</h3></label>
            <input
                type="text"
                id="speed"
                placeholder="Enter Speed in mph"
            />
            </div>
            {/* <br /> */}

            <div className="inputBox">
            <label for="color"><h3>Color:</h3></label>
            <li>
                <input id="Red" name="color" type="radio" value="Red"></input>
                Red
            </li>
            <li>
                <input id="Red" name="color" type="radio" value="Green"></input>
                Green
            </li>
            <li>
                <input id="Red" name="color" type="radio" value="Blue"></input>
                Blue
            </li>
            <li>
                <input id="Red" name="color" type="radio" value="Purple"></input>
                Purple
            </li>
            <li>
                <input id="Red" name="color" type="radio" value="Yellow"></input>
                Yellow
            </li>
            <li>
                <input id="Red" name="color" type="radio" value="Orange"></input>
                Orange
            </li>
            </div>
            </div>

            {submitElement}
        </form>
    )
}

export default Customization