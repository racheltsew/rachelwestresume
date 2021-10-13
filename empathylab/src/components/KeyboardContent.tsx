import React from 'react';
import { DescriptionModule } from '@carbon/ibm-security';
// import CheckboxAccordion from 'components/CheckboxAccordion';
import { IAccordionItem } from 'utilities/interfaces';
import { Accordion, AccordionItem } from 'carbon-components-react';

const FocusIndicator = (): JSX.Element => {
	return (
		<>
			<div className='issue-set'>
				<div className='issue-subheading'>Violation</div>
				<div className='issue-subdescription'>Focus indicator is vague or nonexistant</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Why is this an issue?</div>
				<div className='issue-subdescription'>
					Any keyboard operable user interface needs to have a mode of operation where the keyboard focus
					indicator is visible.
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Solution</div>
				<div className='issue-subdescription'>
					Incorporate descriptive alternative text into all images presented. For example, &quot;An image of a
					blue car sitting on the edge of a cliff with a forest in the background.&quot;
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Learn more</div>
				<div className='issue-subdescription'>
					<a href='#'>2.4.7 Focus visible</a>
				</div>
			</div>
		</>
	);
};

const MouseOperable = (): JSX.Element => {
	return (
		<>
			<div className='issue-set'>
				<div className='issue-subheading'>Violation</div>
				<div className='issue-subdescription'>
					It is not possible to exit out of the modal without using the mouse.
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Why is this an issue?</div>
				<div className='issue-subdescription'>
					Any keyboard operable user interface needs to have a mode of operation where the keyboard focus
					indicator is visible.
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Solution</div>
				<div className='issue-subdescription'>
					Make sure that the initial focus is visible and distinguishable. Every time a key press/action
					changes focus, the visual indicator follows.
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Learn more</div>
				<div className='issue-subdescription'>
					<a href='#'>2.1.2 No Keyboard Trap</a>
				</div>
			</div>
		</>
	);
};

const TabOrder = (): JSX.Element => {
	return (
		<>
			<div className='issue-set'>
				<div className='issue-subheading'>Violation</div>
				<div className='issue-subdescription'>Complex functionality.</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Why is this an issue?</div>
				<div className='issue-subdescription'>
					There are a lot of nested elements so the browser, by default, doesn’t know what to do with them.
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Solution</div>
				<div className='issue-subdescription'>
					Place your website components in logical order with ease of flow.
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Learn more</div>
				<div className='issue-subdescription'>
					<a href='#'>IBM Able: Tab Order</a>
				</div>
			</div>
		</>
	);
};

const KeyboardTrap = (): JSX.Element => {
	return (
		<>
			<div className='issue-set'>
				<div className='issue-subheading'>Violation</div>
				<div className='issue-subdescription'>Keyboard operations are not defined.</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Why is this an issue?</div>
				<div className='issue-subdescription'>
					The user cannot dismiss the modal and are stuck within the modal.
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Solution</div>
				<div className='issue-subdescription'>
					Define the keyboard operations so the website will know when the user wants to exist the modal via
					keyboard.
				</div>
			</div>

			<div className='issue-set'>
				<div className='issue-subheading'>Learn more</div>
				<div className='issue-subdescription'>
					<a href='#'>2.1.2 No Keyboard Trap</a>
				</div>
			</div>
		</>
	);
};

const accordionItemData: IAccordionItem[] = [
	{
		title: 'Focus indicator',
		content: <FocusIndicator />,
		key: 'focus-indicator-accordion-item',
	},
	{
		title: 'Mouse operable components',
		content: <MouseOperable />,
		key: 'mouse-operable-components-accordion-item',
	},
	{
		title: 'Tab order',
		content: <TabOrder />,
		key: 'tab-order-accordion-item',
	},
	{
		title: 'Keyboard trap',
		content: <KeyboardTrap />,
		key: 'keyboard-trap-accordion-item',
	},
];
const KeyboardContent = (): JSX.Element => {
	return (
		<>
			<DescriptionModule>
				{(): JSX.Element => (
					<p className={'body-long-02'}>
						Mouse/trackpad use is disabled on the AltoroMutual site in this view.
						<br />
						<br />
						Try navigating the site using the keyboard operations on the right.
					</p>
				)}
			</DescriptionModule>
			<h2 className='issues-heading'>Issues</h2>
			<Accordion size={'md'}>
				{accordionItemData.map((item: IAccordionItem) => {
					return (
						<AccordionItem title={item.title} key={item.key}>
							{item.content}
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
};

export default KeyboardContent;
