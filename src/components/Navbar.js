import UserImg from '../img/testUser.jpeg'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Parley</span>
            <div className="user">
                <img src={UserImg} alt='' />
                <span>Jason</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar