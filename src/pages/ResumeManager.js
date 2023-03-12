import PageWrapper from '../components/PageWrapper';
import BubbleBoxButton from '../components/BubbleBoxButton';
import {Header2TextStyle, MarginVerbose, Line, CaseStatus} from '../components/TextFormat';

export function ResumeManager() {
    return (
        <PageWrapper>
            <Header2TextStyle 
            textAlight='bottom' 
            marginTop={60} 
            marginLeft={30} 
            marginBottom={10} 
            text='Resume List'/>
            <Line marginLeft={30} marginRight={30}/>
            <div>
                <div>
                    <BubbleBoxButton 
                    headerText='Make a new Application' 
                    subheaderText='Apply now!' 
                    text='Go out and touch grass!' 
                    caseStatus={CaseStatus["Info"]}
                    pfpbackgroundColour={`#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`}/>
                </div>
                <div>
                    <BubbleBoxButton 
                    headerText='Position Name 1' 
                    subheaderText='Company Name 1'
                    lastActivity='6h'
                    text='Awaiting response. Resume and Cover Letter sent.' 
                    caseStatus={CaseStatus["Awaiting"]}
                    pfpbackgroundColour={`#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`}/>
                </div>
                <div>
                    <BubbleBoxButton 
                    headerText='Position Name 2' 
                    subheaderText='Company Name 2'
                    lastActivity='8h'
                    text='Invited to interview.' 
                    caseStatus={CaseStatus["Interview"]}
                    pfpbackgroundColour={`#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`}/>
                </div>
                <div>
                    <BubbleBoxButton
                    headerText='Position Name 3' 
                    subheaderText='Company Name 3' 
                    lastActivity='2d'
                    text='Rejected :(' 
                    caseStatus={CaseStatus["Rejected"]}
                    pfpbackgroundColour={`#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`}/>
                </div>
            </div>
        </PageWrapper>
    );
}