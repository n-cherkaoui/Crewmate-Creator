import { supabase } from '../client'
import "./Customization.css"

const Customization = ({operation, operation2, submitElement}) => {

    return (
        <form onSubmit={operation}>
            <div className="inputBoxes">
            <div className="inputBox">
            <label for="name">Name:</label>
            <input
                type="text"
                id="name"
                placeholder="Enter Crewmate Name"
            />
            </div>
            {/* <br /> */}

            <div className="inputBox">
            <label for="speed">Speed</label>
            <input
                type="text"
                id="speed"
                placeholder="Enter Speed in mph"
            />
            </div>
            {/* <br /> */}

            <div className="inputBox">
            <label for="color">Color</label>
            <input
                type="text"
                id="color"
                placeholder="Enter Crewmate color"
            />
            </div>
            </div>

            {submitElement}
        </form>
    )
}

export default Customization