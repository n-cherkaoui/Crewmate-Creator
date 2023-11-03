import { supabase } from '../client'

const Customization = ({operation, operation2, submitElement}) => {

    return (
        <form onSubmit={operation}>
            <label for="name">Name:</label>
            <input
                type="text"
                id="name"
            />
            <br />

            <label for="speed">Speed</label>
            <input
                type="text"
                id="speed"
            />
            <br />

            <label for="color">color</label>
            <input
                type="text"
                id="color"
            />
            <br />

            {submitElement}
        </form>
    )
}

export default Customization