import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';


export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Ronin</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at my own company.
                </p>
                <br />
            </div>

            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    Hi mine first name is daglar :).
                    From a young age, I have had a curiosity about how things
                    worked. This naturally led me to become absolutely obsessed
                    with Lego and I fell in love with building things. In
                    elementary school, I joined the Robotics team at my
                    local middle school, which was my first real exposure to
                    programming.          

                </p>

                <br />

                <p>
                    After that i start programming fivem(lua) scripts and making some money on that.
                    First time i started real-time making fivem scripts was 8x dev team.
                    After 2 years i created mine server <b>G Dev: </b> 
                    <a target="_blank" href="https://discord.gg/TPfhSTkRxM">
                        Discord
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
