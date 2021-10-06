import LandingContent from 'components/Landing';
import Navigation from './components/Navigation';
import PageStructure from 'components/PageStructure';
import React from 'react';
import { ENavigationItems, IPageStructureProps } from './utilities';
import './styles/index.scss';

function App(): JSX.Element {
	const [selectedPage, setSelectedPage] = React.useState<string>(ENavigationItems.LANDING);
	// const [altoroSettings, setAltoroSettings] = React.useState<>(ENavigationItems.LANDING); //Add in when we figure out altoro props

	const getStructureProps = (): IPageStructureProps => {
		switch (selectedPage) {
			case ENavigationItems.LANDING:
				return {
					panelTitle: 'Welcome to the IBM Accessibility Checker Experience Site!',
					panelContent: <LandingContent />,
				};
			case ENavigationItems.ACCESSIBILITY_CHECKER:
				return {
					panelTitle: 'IBM Accessibility Checker',
					panelContent: <>Import then insert Checker Component Here</>,
				};
			case ENavigationItems.VISION:
				return {
					panelTitle: 'Vision view mode',
					panelContent: <>Import then insert vision view Component Here</>,
				};
			case ENavigationItems.KEYBOARD:
				return {
					panelTitle: 'Keyboard navigation view',
					panelContent: <>Import then insert keyboard navigation Component Here</>,
				};
			case ENavigationItems.SCREEN_READER:
				return {
					panelTitle: 'Screen reader view',
					panelContent: <>Import then insert screen reader Component Here</>,
				};
			default:
				return {
					panelTitle: 'Welcome to the IBM Accessibility Checker Experience Site!',
					panelContent: <>Import then insert Landing Component Here</>,
				};
		}
	};

	return (
		<>
			<Navigation selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<PageStructure {...getStructureProps()} />
		</>
	);
}

export default App;
