import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>

            <div className="text-block">

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/IsRoninReal"
                        >
                            <p>
                                <b>[Github Site]</b> - IsRoninReal
                            </p>
                        </a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.gg/TPfhSTkRxM">
                            <p>
                                <b>[Discord]</b> - G Dev
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            

        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
