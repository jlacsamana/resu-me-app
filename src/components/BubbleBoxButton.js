import React from 'react';
import { PageContext } from '../App';
import { NavBarWidth } from './NavigationBar';
import { Header3FontSize, SubheaderTextStyle, NormalTextFontSize, CaseStatus } from './TextFormat';

export const BubbleMarginSides = 20;
export const BubbleMarginTop = 22;
export const StatusColourWidth = 17;


const BubbleBoxButton = ({destination, headerText, subheaderText, text, lastActivity, caseStatus, pfpbackgroundColour, width, height}) => {
	const BubbleBoxBodyStyle = {
        position: 'relative',

		background: '#F2F2F2',        
        display: 'flex',
        flexDirection: 'row',

        outlineStyle: 'solid',
        outlineColor: 'rgba(171,171,171,0.41)',
        borderRadius: 15,
        border: 0,
        
		fontSize: 24,
		textAlign: 'left',

        width: width ?? `calc(100vw - ${2*BubbleMarginSides + NavBarWidth}px)`,
        height: height ?? '115px',

        marginTop: BubbleMarginTop,
        marginLeft: BubbleMarginSides,
        marginRight: BubbleMarginSides
	}

    const StatusColourStyle = {
        position: 'absolute',
        backgroundColor: caseStatus,
        width: StatusColourWidth,
        height: '100%',
        left: 0,
        top: 0,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    }

    const PictureIconStyle = {
        backgroundColor: caseStatus === CaseStatus["Info"] ? CaseStatus["Info"] : pfpbackgroundColour,
        width: `100px`,
        height: `100px`,
        marginTop: 7.5,
        marginLeft: 25,
        borderRadius: '50%',
    }

    const Header3TextStyle = {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 7.5,
        fontSize: Header3FontSize,
        fontWeight: 'bold',
    }
    
    const NormalTextStyle = {
        textAlign: 'left',
        marginTop: 22,
        fontSize: NormalTextFontSize,
        fontWeight: 'medium',
    }
    const LastActivityStyle = {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 8,
    }

	const {switchPage} = React.useContext(PageContext);
	return (
		<button style={BubbleBoxBodyStyle} 
			onClick={() => {
				switchPage({ type: destination });
			}}
		>
            <div style={StatusColourStyle}></div>
            <div style={PictureIconStyle}></div>
            <div style={Header3TextStyle}>
                    {headerText}
                    <div style={SubheaderTextStyle}>
                        {subheaderText}
                        <div style={NormalTextStyle}>
                            {text}
                        </div>
                    </div>
            </div>
		</button>
	)
}

export default BubbleBoxButton