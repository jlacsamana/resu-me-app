import React from 'react';
import NavigationBar, { NavBarWidth } from './NavigationBar';
import TopBar, { TopBarHeight } from './TopBar';

const PageWrapper = ({children}) => {
	const PageSheme = {
		backgroundColor: '#E6F4F6',
	}

    const BodyStyle = {
        paddingTop: TopBarHeight,
        paddingLeft: NavBarWidth,
    }

	return (
		<div style={{PageSheme}}>
			<NavigationBar/>
            <TopBar/>
            <div style={BodyStyle}>
                {children}
            </div>
		</div>
	)
}

export default PageWrapper