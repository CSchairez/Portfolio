import React from 'react';
import {Tab, Tabs, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText, Cell, Grid } from 'react-mdl';

const ReactGrid = (props) => (

    /* Project 1 */
 
    <div className="projects-grid">
    <Card shadow={10} style={{minWidth: '450', margin: 'auto', background: '#696969'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
            {props.name}
        </CardTitle>
        <CardText style={{color: '#fff'}}>
            You're currently exploring this project. To peek at the code click the GitHub button below.
        </CardText>
        <CardActions border>
        <a href="https://github.com/CSchairez" rel="noopener noreferrer" target="_blank">
            <Button style={{color: "#678AFF"}}>GitHub</Button>
        </a>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    </div>
);

const JavaGrid = (props) => (

    /* Project 2 */
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
            {props.name}
        </CardTitle>
        <CardText>
            Java projects.
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
);

const PythonGrid = (props) => (

    /* Project 3 */
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
            {props.name}
        </CardTitle>
        <CardText>
            Python projects.
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
);

const CGrid = (props) => (

    /* Project 4 */
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
            {props.name}
        </CardTitle>
        <CardText>
            C++ projects..bleh.
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
);

const RaspberryGrid = (props) => (

    /* Project 5 */
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
            {props.name}
        </CardTitle>
        <CardText>
            Raspberry Pi and electronics projects.
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
);

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    
    toggleCategories() {
        switch(this.state.activeTab) {
            case 0:
                return (<div><ReactGrid name="This is ReactJS"/></div>);
            case 1:
                return (<div><JavaGrid name="This is Java"/></div>);
            case 2:
                return (<div><PythonGrid name="This is Python"/></div>);
            case 3:
                return(<div><CGrid name="This is C++"/></div>);
            default:
                return (<div><RaspberryGrid name="This is Raspberry Pi"/></div>);
        }
    }

    render() {
        return (

           
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                    <Tab>C++</Tab>
                    <Tab>Raspberry Pi</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>

        
        );
    }
}

export default Projects;