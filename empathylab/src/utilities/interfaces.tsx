interface IPageStructureProps {
	altoroProps: IAltoroProps;
	panelContent: JSX.Element;
	panelTitle: string;
}

// interface IVisionIssues { //todo add in for stretch goal
// 	isFixed: boolean;
// 	isSelected: boolean;
// 	issue: string;
// }
interface IAltoroProps {
	vision: {
		colorBlindnessClass: string; //className //enum EColorBlindClass
		viewMode: string;
		lightSensitivity: number; //slider
		magnification: string; //className //enum EMagnificationClss
		isFixed: boolean; //MVP
		// issuesToFix: IVisionIssues[]; //todo stretch goal
	};
	keyboard: {
		isMouseEnabled: boolean;
		isFixed: boolean; //MVP
		// issuesToFix: IVisionIssues[]; //todo stretch goal
	};
	screenReader: {
		isWebsiteVisible: boolean;
		isFixed: boolean; //MVP
		// issuesToFix: IVisionIssues[]; //todo stretch goal
	};
}

export interface IAccordionItem {
	title: string;
	content: JSX.Element;
	key: string;
}

export type { IPageStructureProps, IAltoroProps };
