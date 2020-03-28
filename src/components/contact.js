import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Myavatar from '../myAvatar.png';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid shadow={10} className="contact-grid">
                    <Cell col={6}>
                        <h2>Michael Chairez</h2>
                        <img
                        src={Myavatar}
                        alt="avatar"
                        style={{height: '275px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}> Currently interested in SWE Interships for Summer 2020.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    a.chairezmichael@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    chairezmichael.app@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>  

                        </div>
                    </Cell>           
                 </Grid>


            </div>
        )

    }

}
export default Contact;