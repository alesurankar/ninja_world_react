import QuoteBlock from "./utils/QuoteBlock";
import { RedNinja } from '../assets/images/images'

const Fetch = () => {
    return (
        <>
            <QuoteBlock
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                author="Ninja Warrior"
            />
            <QuoteBlock
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                author="Ninja Master"
            />
            <QuoteBlock
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                author="Anonymous"
            />
            <QuoteBlock
                image={RedNinja}
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                author="Red Ninja"
            />
        </>
    )
}

export default Fetch;