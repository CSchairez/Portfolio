import React from 'react';
import {Tab, Tabs, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText, Cell, Grid } from 'react-mdl';

const ReactGrid = (props) => (

    /* Project 1 */
 
    <div className="projects-grid">
    <Card shadow={10} style={{minWidth: '450', margin: 'auto', background: '#696969', borderRadius:"10px"}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
            
        </CardTitle>
        <CardText style={{fontWeight: 'bold', color: '#434C6A'}}>
            You're currently exploring this project. To peek at the code click the GitHub link below.
        </CardText>
        <CardActions border>
        <a href="https://github.com/CSchairez/Portfolio" rel="noopener noreferrer" target="_blank">
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
    <div className="projects-grid">
    <Card shadow={5} style={{minWidth: '450', margin: 'auto', color: '#323337', borderRadius:"10px"}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.creativeintl.net/wp-content/uploads/2015/05/java-logo.png) center / cover', backgroundColor: '#323337'}} >
            
        </CardTitle>
        <CardText style={{fontWeight: 'bold', color: '#434C6A'}}>
            Java projects.
        </CardText>
        <CardActions border>
            <p colored>Coming soon!</p>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    </div>
);

const PythonGrid = (props) => (

    <div className="projects-grid">
    <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:"10px"}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/python-restful/logo.png) center / cover'}}>
            
        </CardTitle>
        <CardText style={{fontWeight: 'bold', color: '#434C6A'}}>
            Python projects.
        </CardText>
        <CardActions border>
        <p colored>Coming soon!</p>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    </div>
);

const WebGrid = (props) => (

    /* Project 4 */
    <div className="projects-grid">
    <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:"10px"}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pngimage.net/wp-content/uploads/2018/06/html-css-png-2.png) center / cover'}} >
            
        </CardTitle>
        <CardText style={{fontWeight: 'bold', color: '#434C6A'}}>
            Web Development projects.
        </CardText>
        <CardActions border>
        <a href="https://github.com/CSchairez/clubProject" rel="noopener noreferrer" target="_blank">
            <Button style={{color: "#678AFF"}}>GitHub</Button>
        </a>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    </div>
);

const RaspberryGrid = (props) => (

    /* Project 5 */
    <div className="projects-grid">
    <Card shadow={5} style={{minWidth: '450', margin: 'auto', backgroundColor: '#000000', borderRadius:"10px"}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lofrev.net/wp-content/photos/2016/06/raspberry_pi-_logo-250x150.png) center / cover'}} >
            
        </CardTitle>
        <CardText style={{fontWeight: 'bold', color: '#ffff'}}>
            Raspberry Pi and electronics projects.
        </CardText>
        <CardActions border>
        <p style={{color:"#fff"}}>Coming soon!</p>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    </div>
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
                return(<div><WebGrid name="This is WebDev"/></div>);
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
                    <Tab>Web Dev</Tab>
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