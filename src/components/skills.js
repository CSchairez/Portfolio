import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                <h4>Languages</h4>
                    <p>{this.props.languages}</p>
                <h6>Other Technologies</h6>
                    <p>{this.props.otherTech}</p>
                </Cell>

                <Cell col={8}>
                <h4>Technical Projects</h4>
                <p>Personal Website using Javascript, HTML, CSS, NodeJS, React.</p>

                </Cell>



            </Grid>

        )
    }
}

export default Skills;