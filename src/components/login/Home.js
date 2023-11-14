import React from 'react';

const Home = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user = JSON.parse(localStorage.getItem('user'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    return (
        <div>
            <div>
                <div>
                    <div>
                        Profile
                    </div>
                    <div>
                        <button onClick={handleMenu} color="inherit">
                            <img src={user.avatar} alt='' />
                        </button>
                        <div>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        Welcome {user.fname} {user.lname}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;