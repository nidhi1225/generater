import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div className="nav">
            <div className="logo">AI Story Generator</div>
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/about'><button>About</button></Link>
                <Link to='/contact'><button>Contact</button></Link>
                <Link to='/privacy-policy'><button>Privacy Policy</button></Link>
                <Link to='/terms-of-service'><button>Terms of Service</button></Link>
            </div>
        </div>
    )
};

export default Header