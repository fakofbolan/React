const adjectives = ['nice', 'good', 'smart'];
const nouns = ['fak', 'eat', 'bolan'];

const getRandomName = () => {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);
    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
};



export const RandomNameButton = (props) => {
    
    const handleClick = () => {
        props.onRandomName(getRandomName());
    }
    return(
        <button type="button" onClick={handleClick}>Get random name!</button>
    )
};