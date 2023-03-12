import React from 'react';
import { PageContext } from '../App';
import { NavBarWidth } from './NavigationBar';

const BubbleMarginSides = 20;
const BubbleMarginTop = 22;
const StatusColourWidth = 17;
const JobNameFontSize = 32;
const CompanyNameFontSize = 20;
const NormalTextFontSize = 16;

const BubbleBoxButton = ({destination, text, caseStatus}) => {
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

        width: `calc(100vw - ${2*BubbleMarginSides + NavBarWidth}px)`,
        height: '115px',

        marginTop: BubbleMarginTop,
        marginLeft: BubbleMarginSides,
        marginRight: BubbleMarginSides
	}

    const StatusColourStyle = {
        position: 'absolute',
        backgroundColor: '#88FF88',
        width: StatusColourWidth,
        height: '100%',
        left: 0,
        top: 0,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    }

    const PictureIconStyle = {
        backgroundColor: '#BADA55',
        width: `100px`,
        height: `100px`,
        marginTop: 7.5,
        marginLeft: 25,
        borderRadius: '50%',
    }

    const JobNameHeaderStyle = {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 7.5,
        fontSize: JobNameFontSize,
        fontWeight: 'bold',
    }

    const CompanyNameHeaderStyle = {
        textAlign: 'left',
        fontSize: CompanyNameFontSize,
        fontWeight: 'normal',
    }

    const StatusHeaderStyle = {
        textAlign: 'left',
        marginTop: 22,
        fontSize: NormalTextFontSize,
        fontWeight: 'normal',
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
            <div style={JobNameHeaderStyle}>
                    {text}
                    <div style={CompanyNameHeaderStyle}>
                        Apply now!
                        <div style={StatusHeaderStyle}>
                            Status here.
                        </div>
                    </div>
            </div>
		</button>
	)
}

export default BubbleBoxButton