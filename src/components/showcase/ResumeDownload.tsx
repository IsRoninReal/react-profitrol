import React from 'react';
import printer from '../../assets/resume/printer.gif';
import Resume from '../../assets/resume/Henry_Heffernan_S22_Resume.pdf';

export interface ResumeDownloadProps {
    altText?: string;
}



const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
    },
};

