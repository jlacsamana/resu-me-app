import BubbleBoxButton from '../components/BubbleBoxButton';
import PageWrapper from '../components/PageWrapper';
import { CaseStatus, Header2Text, Header3Text, Line} from '../components/TextFormat';

export function ResumeEntry() {

    const BigPictureIconStyle = {
        backgroundColor: '#88FF88',
        width: `178px`,
        height: `178px`,
        marginTop: 32,
        marginLeft: 25,
        borderRadius: '50%',
    }

    const flexContainerHeaderRow = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'left',
    }

    const flexContainerHeaderCol = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    }

    const flexContainerHeaderCol2 = {
        position: 'relative',
        display: 'flex',
        width: '50%',
        height: '100%',
        flexDirection: 'column',
        textAlign: 'left',
    }

    return (
        <PageWrapper>
            <div style={flexContainerHeaderRow}>
                <div style={BigPictureIconStyle}></div>
                <div>
                    <Header2Text
                    textAlign='bottom' 
                    marginTop={100} 
                    marginLeft={42} 
                    text='Position Name'/>
                    <Header3Text
                    textAlign='left' 
                    marginLeft={42} 
                    text='Company Name'/>
                </div>
            </div>
            <Line marginLeft={30} marginRight={30} boxShadow='1px 2px 20px #ccc'/>
            <div style={flexContainerHeaderRow}>
                <div style={flexContainerHeaderCol2}>
                    <BubbleBoxButton 
                        headerText='Position Name 1' 
                        subheaderText='Company Name 1'
                        lastActivity='6h'
                        text='Awaiting response. Resume and Cover Letter sent.' 
                        caseStatus={CaseStatus["Awaiting"]}
                        pfpbackgroundColour={`#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`}
                        destination='ResumeEntry'
                        width='95%'/>
                </div>
                <div style={flexContainerHeaderCol2}>
                    <BubbleBoxButton 
                        headerText='Position Name 1' 
                        subheaderText='Company Name 1'
                        lastActivity='6h'
                        text='Awaiting response. Resume and Cover Letter sent.' 
                        caseStatus={CaseStatus["Awaiting"]}
                        pfpbackgroundColour={`#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`}
                        destination='ResumeEntry'
                        width='95%'/>
                </div>
            </div>
        </PageWrapper>
    );
}