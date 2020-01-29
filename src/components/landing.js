import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Myavatar from '../myAvatar.png';



class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src={Myavatar}
                    alt="avatar"
                    className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Full Stack Developer </h1>

                    <hr/>

                    <p>Java | C++ | Python | JavaScript | React | NodeJS </p>
                <div className="social-links">
                    {/* LinkedIn  */}
                    <a href="https://www.linkedin.com/in/michael-chairez-42a679168/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>

                    {/* Github  */}
                    <a href="https://github.com/CSchairez" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>

                    {/*  Instagram */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-instagram" aria-hidden="true"/>
                    </a>

                </div>

                <div className="bottom-links">
                    <h1>Michael Angelo Chairez</h1>
                </div>    
                    </div>            
                    </Cell>
                </Grid>
            </div>

        )
    }
}
export default Landing;