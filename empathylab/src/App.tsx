import LandingContent from 'components/Landing';
import Navigation from './components/Navigation';
import PageStructure from 'components/PageStructure';
import React from 'react';
import { defaultAltoro, ENavigationItems, IAltoroProps, IPageStructureProps } from './utilities';
import './styles/index.scss';
import KeyboardContent from 'components/KeyboardContent';

function App(): JSX.Element {
	const [selectedPage, setSelectedPage] = React.useState<string>(ENavigationItems.LANDING);
	const [altoroSettings, setAltoroSettings] = React.useState<IAltoroProps>(defaultAltoro);

	const switchPage = (newPage: string): void => {
		setSelectedPage(newPage);
		//reset on page change
		setAltoroSettings(defaultAltoro);
	};

	const getStructureProps = (): IPageStructureProps => {
		switch (selectedPage) {
			case ENavigationItems.LANDING:
				return {
					altoroProps: altoroSettings,
					panelTitle: 'Welcome to the IBM Accessibility Checker Experience Site!',
					panelContent: <LandingContent />,
				};
			case ENavigationItems.ACCESSIBILITY_CHECKER:
				return {
					altoroProps: altoroSettings,
					panelTitle: 'IBM Accessibility Checker',
					panelContent: <>Import then insert Checker Component Here</>,
				};
			case ENavigationItems.VISION:
				return {
					altoroProps: altoroSettings,
					panelTitle: 'Vision view mode',
					panelContent: <>Import then insert vision view Component Here</>,
				};
			case ENavigationItems.KEYBOARD:
				return {
					altoroProps: altoroSettings,
					panelTitle: 'Keyboard navigation view',
					panelContent: <KeyboardContent />,
				};
			case ENavigationItems.SCREEN_READER:
				return {
					altoroProps: altoroSettings,
					panelTitle: 'Screen reader view',
					panelContent: <>Import then insert screen reader Component Here</>,
				};
			default:
				return {
					altoroProps: altoroSettings,
					panelTitle: 'Welcome to the IBM Accessibility Checker Experience Site!',
					panelContent: <LandingContent />,
				};
		}
	};

	return (
		<>
			<Navigation selectedPage={selectedPage} setSelectedPage={switchPage} />
			<PageStructure {...getStructureProps()} />
		</>
	);
}

export default App;
