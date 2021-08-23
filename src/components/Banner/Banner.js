import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from '../Search/Search';
import './Banner.css';
function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
            { 
                showSearch && <Search/>
            }
                <Button onClick={()=> setShowSearch(!showSearch)} 
                className="banner_searchButton" variant="outlined">
                  {showSearch ? "Hide": "Search Date"}
                </Button>
            </div>
            <div className="banner_info">
                <h1>Get Out and stretch your imagination</h1>
                <h5>
                    Plan a different life for yourself
                    and uncover the hidden truth of the world entertainment.
                </h5>
                <Button onClick={()=>history. 
                push('/search')
            }
                >Explore the world</Button>
            </div>
        </div>
    )
}

export default Banner;
