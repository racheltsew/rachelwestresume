import React from 'react';
import { Bee24, CarbonIconType, Information24, Keyboard24, Sight24, VolumeUpFilled24 } from '@carbon/icons-react';
import { ENavigationItems } from '../utilities';
import { Header, HeaderContainer, HeaderName } from 'carbon-components-react';
import { IconButtonBar } from '@carbon/ibm-security';

interface INavigationProps {
	selectedPage: string;
	setSelectedPage: (newPage: string) => void;
}
interface IconButtonBarAction {
	className: string;
	disabled: boolean;
	divider: string;
	iconClassName: string;
	label: string;
	onClick: () => void;
	renderIcon: CarbonIconType;
}

const BuildHeader = (): JSX.Element => {
	return (
		<>
			<HeaderContainer
				render={(): JSX.Element => {
					return (
						<Header aria-label='header'>
							<HeaderName href='#' prefix='IBM'>
								Accessibility
							</HeaderName>
						</Header>
					);
				}}
			/>
		</>
	);
};

const Navigation = ({ selectedPage, setSelectedPage }: INavigationProps): JSX.Element => {
	console.log('selected item', selectedPage);

	const BuildSideNav = (): JSX.Element => {
		return (
			<nav className='icon-button-bar-container' aria-label='main'>
				<IconButtonBar
					actions={navigationActions()}
					className='sidebar-icons'
					length={5}
					iconTooltipDirection={'right'}
				/>
			</nav>
		);
	};

	const navigationActions = (): IconButtonBarAction[] => {
		return [
			{
				className: `links ${selectedPage === ENavigationItems.LANDING ? 'link-selected' : ''}`,
				disabled: false,
				divider: 'sides',
				iconClassName: 'icon-link',
				label: 'Welcome',
				onClick: (): void => {
					console.log('clicked welcome nav');
					setSelectedPage(ENavigationItems.LANDING);
				},
				renderIcon: Information24,
			},
			{
				className: `links ${selectedPage === ENavigationItems.ACCESSIBILITY_CHECKER ? 'link-selected' : ''}`,
				disabled: false,
				divider: 'sides',
				iconClassName: 'icon-link',
				label: 'Accessibility Checker',
				onClick: (): void => {
					console.log('clicked checker nav');
					setSelectedPage(ENavigationItems.ACCESSIBILITY_CHECKER);
				},
				renderIcon: Bee24,
			},
			{
				className: `links ${selectedPage === ENavigationItems.VISION ? 'link-selected' : ''}`,
				disabled: false,
				divider: 'sides',
				iconClassName: 'icon-link',
				label: 'Vision view',
				onClick: (): void => {
					console.log('clicked visual nav');
					setSelectedPage(ENavigationItems.VISION);
				},
				renderIcon: Sight24,
			},
			{
				className: `links ${selectedPage === ENavigationItems.KEYBOARD ? 'link-selected' : ''}`,
				disabled: false,
				divider: 'sides',
				iconClassName: 'icon-link',
				label: 'Keyboard navigation',
				onClick: (): void => {
					console.log('clicked keyboard nav');
					setSelectedPage(ENavigationItems.KEYBOARD);
				},
				renderIcon: Keyboard24,
			},
			{
				className: `links ${selectedPage === ENavigationItems.SCREEN_READER ? 'link-selected' : ''}`,
				disabled: false,
				divider: 'sides',
				iconClassName: 'icon-link',
				label: 'Screen reader',
				onClick: (): void => {
					console.log('clicked screen reader nav');
					setSelectedPage(ENavigationItems.SCREEN_READER);
				},
				renderIcon: VolumeUpFilled24,
			},
		];
	};

	return (
		<>
			<BuildHeader />
			<BuildSideNav />
		</>
	);
};

export default Navigation;
