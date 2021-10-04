import React from 'react';
import { Column, Grid, Row, TitleBarModule } from '@carbon/ibm-security';

interface IPageStructureProps {
	panelContent: JSX.Element;
	panelTitle: string;
}

const PageStructure = ({ panelContent, panelTitle }: IPageStructureProps): JSX.Element => {
	return (
		<main>
			<Grid class={'page-wrapper'}>
				<Row>
					<Column className={`side-panel`} lg={3}>
						<TitleBarModule
							title={panelTitle}
							element='h2' //is this correct element??
						/>
						{panelContent}
					</Column>
					<Column lg={9}>
						<>Insert Altoro Page Component Here</>
					</Column>
				</Row>
			</Grid>
		</main>
	);
};

export default PageStructure;
