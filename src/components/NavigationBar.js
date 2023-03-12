import React from 'react';
import NavigationButton from './NavigationButton';
import { TopBarHeight } from './TopBar';

const ButtonMargins = 30;
export const NavBarWidth = 300;

const NavigationBar = () => {
	const NavBarTheme = {
		backgroundColor: '#E6F4F6',
		display: 'flex',
		flexDirection: 'column',
		width: NavBarWidth,
		height: `calc(100vh - ${ButtonMargins + TopBarHeight}px)`,
		gap: ButtonMargins,
		paddingTop: ButtonMargins,
		position: 'absolute',
		bottom: 0,
		left: 0,
	}

	return (
		<div style={NavBarTheme}>
			<NavigationButton text="Home" destination='HomePage'/>
			<NavigationButton text="Matchmaker" destination='QuickApplier'/>
			<NavigationButton text="Calendar" destination='InterviewCalender'/>
			<NavigationButton text="Resumes" destination='ResumeManager'/>
		</div>
	)
}

export default NavigationBar