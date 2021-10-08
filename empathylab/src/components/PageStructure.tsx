import React from 'react';
import { Column, Grid, Row, TitleBarModule } from '@carbon/ibm-security';
import { IPageStructureProps } from 'utilities';

//todo remove next line when Altoro component uses altoroprops
// eslint-disable-next-line
const PageStructure = ({ altoroProps, panelContent, panelTitle }: IPageStructureProps): JSX.Element => {
	return (
		<Grid className={'page-wrapper'}>
			<Row className={'structure-row'}>
				<Column className={`side-panel`} lg={3} md={2}>
					<section role='complementary' aria-label='transform main page settings'>
						<TitleBarModule
							title={panelTitle}
							element='h2' //is this correct element??
						/>
						{panelContent}
					</section>
				</Column>
				<Column lg={9} md={6}>
					<main>Insert Altoro Page Component Here</main>
					{/* <Altoro {...altoroProps }/ > // something like this */}
				</Column>
			</Row>
		</Grid>
	);
};

export default PageStructure;
