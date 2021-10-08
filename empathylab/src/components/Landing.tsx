import React from 'react';
import { Bee24, Keyboard24, Sight24, VolumeUpFilled24 } from '@carbon/icons-react';
import { DescriptionModule, Icon, TitleBarModule } from '@carbon/ibm-security';

const LandingContent = (): JSX.Element => {
	return (
		<>
			<DescriptionModule>
				{(): JSX.Element => (
					<p className={'body-long-02'}>
						Use the instructions below to begin an experience that will tranform accessibility expertise for
						your team, company, and workplace culture.
					</p>
				)}
			</DescriptionModule>
			<TitleBarModule
				title={'Instructions'}
				subsection
				element='h3' //is this correct element??
			/>
			<ul>
				<li className={'landing-section'}>
					<Icon className={'landing-icon'} renderIcon={Bee24} aria-hidden='true' />
					<p className={'body-long-02'}>
						Evaluate the state of accessibilty of the Altoro site using IBM Equal Access Accessibility
						Checker view.
					</p>
				</li>
				<li className={'landing-section'}>
					<Icon className={'landing-icon'} renderIcon={Sight24} aria-hidden='true' />
					<Icon className={'landing-icon'} renderIcon={Keyboard24} aria-hidden='true' />
					<Icon className={'landing-icon'} renderIcon={VolumeUpFilled24} aria-hidden='true' />
					<p className={'body-long-02'}>
						Click through the icons to experience navigating a website using different vision modes,
						keyboard navigation, and a screen reader.
					</p>
				</li>
				{/* <li>
					<Icon className={'landing-icon'} renderIcon={Bee24} />
					<p>Complete an exercise using keyboard navigation in Game Mode.</p>
				</li> */}
			</ul>
		</>
	);
};

export default LandingContent;
