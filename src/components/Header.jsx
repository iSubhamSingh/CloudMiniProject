import '../App.css';

const Header = () => {
    const logo = "https://shorturl.at/lmrP3";

    return (
        <> 
        <img src = {logo} alt = "logo"  className="logo"/>
        <h2>Text to Speech </h2>
        </>
    )
}

export default Header;
