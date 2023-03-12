import NavigationButton from '../components/NavigationButton';
import PageWrapper from '../components/PageWrapper';

export function HomePage() {
    const HomePageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20vh',
    }

    const DescriptionStyle = {
        background: 'lightgray',
        height: 150,
        width: 400,
        border: 'solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    }

    const ButtonStyle  = {
        backgroundColor: 'rgb(107, 227, 235)',
        display: 'flex',
        alignItems: 'center',
        paddingRight: 32,
        marginTop: 25,
        borderRadius: 10,
        height: 60,
    }
    
    return (
        <PageWrapper>
            <div style={HomePageStyle}>
                <h1>ResuMe</h1>
                <h3 style={DescriptionStyle}>Imagine using SCOPE</h3>
                <div style={ButtonStyle}>
                    <NavigationButton text="Look for posting" destination='QuickApplier'/>
                </div>
            </div>
        </PageWrapper>
    );
}