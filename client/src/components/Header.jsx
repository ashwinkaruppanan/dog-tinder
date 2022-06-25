import React from "react";
import './Header.css';

import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return <>
        <div className="header" >
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <IconButton>
                <LocalFireDepartmentIcon fontSize="large" className="red header_icon" />
            </IconButton>
            <IconButton>
                <ForumIcon fontSize="large" className=" header_icon" />
            </IconButton>
        </div>
    </>
}

export default Header;