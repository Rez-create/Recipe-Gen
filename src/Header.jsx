import chefLogo from "./assets/chef.png"

function Header() {

    return(
        <header>
            <img src={chefLogo}/>
            <h1>Recipe Gen</h1>
        </header>
    );

}

export default Header