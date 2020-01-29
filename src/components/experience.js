import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <h6>{this.props.eDates}</h6>  
                
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '20px'}}>{this.props.coName1}</h4>
                    <h6>{this.props.city1}</h6>
                    <p>{this.props.coname1Desc}</p>
                    
                    <h4 style={{marginTop: '0px'}}>{this.props.coName2}</h4>
                    <h6>{this.props.city2}</h6>
                    <p>{this.props.coname2Desc}</p>

                </Cell>



            </Grid>

        )
    }
}

export default Experience;