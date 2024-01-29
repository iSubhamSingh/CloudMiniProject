import '../App.css';

const Header = () => {
    const logo = "https://imgs.search.brave.com/ByznXcI9NNe1fDA7hCmAauY2bzFkaZxO46t3s3uqGTU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pdGNo/cm9uaWNsZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEwL3NwZWVjaC10/by10ZXh0LTEwMjR4/NjgzLmpwZw";

    return (
        <> 
        <img src = {logo} alt = "logo"  className="logo"/>
        <h2>Text to Speech </h2>
        </>
    )
}

export default Header;