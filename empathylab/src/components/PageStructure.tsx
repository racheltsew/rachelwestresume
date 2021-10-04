import React from 'react';
import { Column, Grid, Row, TitleBarModule } from '@carbon/ibm-security';
import { IPageStructureProps } from 'utilities';

const PageStructure = ({ panelContent, panelTitle }: IPageStructureProps): JSX.Element => {
	return (
		<Grid className={'page-wrapper'}>
			<Row className={'structure-row'}>
				<Column className={`side-panel`} lg={3} md={2}>
					<section role='complementary' aria-label={'transform main page settings'}>
						<TitleBarModule
							title={panelTitle}
							element='h2' //is this correct element??
						/>
						<p>test text</p>
						{panelContent}
					</section>
				</Column>
				<Column lg={9} md={6}>
					<main>Insert Altoro Page Component Here</main>
				</Column>
			</Row>
		</Grid>
	);
};

export default PageStructure;
