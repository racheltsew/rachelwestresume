enum ENavigationItems {
	ACCESSIBILITY_CHECKER = 'accessibility-checker',
	KEYBOARD = 'keyboard',
	LANDING = 'landing',
	SCREEN_READER = 'screen-reader',
	VISION = 'vision',
}

enum EViewModes {
	COLOR_BLINDNESS = 'color-blindness',
	LIGHT_SENSITIVITY = 'light-sensitivity',
	MAGNIFICATION = 'magnification',
}

enum EColorBlindClass {
	DEUTERANOPIA = 'deuteranopia',
	GRAYSCALE = 'grayscale',
	PROTANOPIA = 'protanopia',
	NONE = '',
}

enum EMagnificationClass {
	X1 = '1x',
	X2 = '2x',
	X3 = '3x',
	X4 = '4x',
}

export { ENavigationItems, EColorBlindClass, EMagnificationClass, EViewModes };
