import { EColorBlindClass, EMagnificationClass, EViewModes, IAltoroProps } from 'utilities';

const defaultAltoro: IAltoroProps = {
	vision: {
		colorBlindnessClass: EColorBlindClass.NONE,
		viewMode: EViewModes.COLOR_BLINDNESS,
		lightSensitivity: 0, //todo: determine default value;
		magnification: EMagnificationClass.X1,
		isFixed: false,
	},
	keyboard: {
		isMouseEnabled: false,
		isFixed: false,
	},
	screenReader: {
		isWebsiteVisible: false,
		isFixed: false,
	},
};

export { defaultAltoro };
