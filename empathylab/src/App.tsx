import Navigation from './components/Navigation';
import PageStructure from 'components/PageStructure';
import React from 'react';
import { ENavigationItems } from './utilities';
import './styles/index.scss';

function App(): JSX.Element {
	const [selectedPage, setSelectedPage] = React.useState<string>(ENavigationItems.LANDING);
	// const [altoroSettings, setAltoroSettings] = React.useState<>(ENavigationItems.LANDING); //Add in when we figure out altoro props

	return (
		<>
			<Navigation selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			{/* Landing page example use of Page Structure */}
			{selectedPage === ENavigationItems.LANDING && (
				<PageStructure
					panelContent={<>Text Content</>} //import & insert component here
					panelTitle={'Welcome to the IBM Accessibility Checker Experience Site!'}
				/>
			)}
			{selectedPage === ENavigationItems.ACCESSIBILITY_CHECKER && (
				<PageStructure panelContent={<>Text Content</>} panelTitle={'IBM Accessibility Checker'} />
			)}
			{selectedPage === ENavigationItems.VISION && (
				<PageStructure panelContent={<>Text Content</>} panelTitle={'Vision view mode'} />
			)}
			{selectedPage === ENavigationItems.KEYBOARD && (
				<PageStructure panelContent={<>Text Content</>} panelTitle={'Keyboard navigation view'} />
			)}
			{selectedPage === ENavigationItems.SCREEN_READER && (
				<PageStructure panelContent={<>Text Content</>} panelTitle={'Screen reader view'} />
			)}
		</>
	);
}

export default App;
