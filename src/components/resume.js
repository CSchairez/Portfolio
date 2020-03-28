import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Myavatar from '../myAvatar.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div className="resume-grid">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center', paddingTop: '5px'}}>
                            <img
                            src={Myavatar}
                            alt="avatar"
                            style={{height: '275px'}}
                            />
                            </div>
                            
                            <h2 style={{paddingTop: '2em'}}>Michael Chairez</h2>
                            <h4 style={{color: 'black'}}>Computer Science Student (Senior)</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                            <p>Rising Senior at CSUEB, I am currently interested in Software Development internships for Summer 2020.</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                            <h5>School</h5>
                            <p>California State University, East Bay</p>
                            <p>Hayward, CA</p>
                            <h5>Phone</h5>
                            <p>(408) 627-9595</p>
                            <h5>Email</h5>
                            <p>a.chairezmichael@gmail.com</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>                    
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>


                    <Education 
                    eDates="2016 - Fall 2020"
                    schoolName="California State University, East Bay"
                    deg1="B.A. History, Concentration - U.S. History"
                    deg2="B.S. Computer Science"
                    schoolCourses="Data Structures and Algorithms, Software Engineering, 
                            Computer Architecture, Linear Algebra, Discrete Math, Computer Networks"
                    />

                    <hr style={{borderTop: "3px solid #fff"}} />

                    <h2>Experience</h2>
                    <Experience
                    eDates="July 2018 - Present"
                    city1="Lafayette, CA"
                    coName1="Murphy McKay and Associates"
                    coname1Desc="Perform the disconnect and reconnecting of user workstations as requested by clients. 
                        Complete all necessary forms, labeling, bagging and QA inspections of user equipment. "

                    />
                    <Experience
                    eDates="October 2017 - March 2018"
                    city2="East Palo Alto, CA"
                    coName2="Ricoh USA"
                    coname2Desc="Greet and welcome clients and visitors to the new corporate tech site in East Palo Alto, CA. 
                        Perform daily tasks such as issuing badges, granting building access to appropriate individuals, schedule meetings, 
                        and other administrative tasks."
                    />

                    <hr style={{borderTop: "3px solid #fff"}} />

                    <h2>Technical Skills</h2>
                    <Skills
                    languages="C++, Java, Python, JavaScript"
                    otherTech="React, NodeJS, HTML, CSS, Git"
                    />
                    </Cell>
                    

                </Grid>
            </div>

        )

    }

}
export default Resume;