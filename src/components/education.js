import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <h5>{this.props.eDates}</h5>

                    <h6>Relevant Coursework</h6>
                    </Cell>



                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <h4 style={{marginTop: '0px'}}>{this.props.deg1}</h4>
                    <h4 style={{marginTop: '0px'}}>{this.props.deg2}</h4>
                    <h6>Hayward, CA</h6>
                    <p>{this.props.schoolCourses}</p>
                </Cell>



            </Grid>

        )
    }
}

export default Education;