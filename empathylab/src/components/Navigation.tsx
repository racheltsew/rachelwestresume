import { Header, HeaderContainer, HeaderName } from 'carbon-components-react';
import { Bee24, CarbonIconType, Information24, Keyboard24, Sight24, VolumeUpFilled24 } from '@carbon/icons-react';
import { IconButtonBar } from '@carbon/ibm-security';
import React from 'react';

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
						<Header>
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

const navigationActions = (): IconButtonBarAction[] => {
	return [
		{
			className: 'links',
			disabled: false,
			divider: 'sides',
			iconClassName: 'icon-link',
			label: 'Welcome',
			onClick: (): void => {
				console.log('clicked welcome nav');
			},
			renderIcon: Information24,
		},
		{
			className: 'links',
			disabled: false,
			divider: 'sides',
			iconClassName: 'icon-link',
			label: 'Accessibility Checker',
			onClick: (): void => {
				console.log('clicked checker nav');
			},
			renderIcon: Bee24,
		},
		{
			className: 'links',
			disabled: false,
			divider: 'sides',
			iconClassName: 'icon-link',
			label: 'Visual',
			onClick: (): void => {
				console.log('clicked visual nav');
			},
			renderIcon: Sight24,
		},
		{
			className: 'links',
			disabled: false,
			divider: 'sides',
			iconClassName: 'icon-link',
			label: 'Keyboard Navigation',
			onClick: (): void => {
				console.log('clicked keyboard nav');
			},
			renderIcon: Keyboard24,
		},
		{
			className: 'links',
			disabled: false,
			divider: 'sides',
			iconClassName: 'icon-link',
			label: 'Screen Reader',
			onClick: (): void => {
				console.log('clicked screen reader nav');
			},
			renderIcon: VolumeUpFilled24,
		},
	];
};

const BuildSideNav = (): JSX.Element => {
	return (
		<div className='icon-button-bar-container'>
			<IconButtonBar actions={navigationActions()} className='sidebar-icons' length={5} />
		</div>
	);
};

const Navigation = (): JSX.Element => {
	return (
		<>
			<BuildHeader />
			<BuildSideNav />
		</>
	);
};

export default Navigation;
