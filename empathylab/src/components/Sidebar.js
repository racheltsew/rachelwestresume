import { Button, ButtonSet, HeaderContainer, Header, HeaderMenuButton, HeaderName, SideNav, SideNavItems, SideNavLink, SkipToContent } from 'carbon-components-react';
import { Bee32, Sight32, Keyboard32, VolumeUpFilled32, InformationSquareFilled32 } from '@carbon/icons-react';
import { IconButtonBar } from '@carbon/ibm-security'
import React from 'react';

import './Sidebar.scss';

class Sidebar extends React.Component {
    render() {
        return(
            <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="IBM Accessibility">
                    <SkipToContent />
                    <HeaderMenuButton 
                        aria-label="Open menu"
                        isCollapsible={false}  
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}  
                    />
                    <HeaderName href="#" prefix="IBM">
                        Accessibility
                    </HeaderName>
                    <SideNav
                    aria-label="SideNavigation"
                    expanded={isSideNavExpanded}
                    isPersistent>
                    <SideNavItems>
                        <IconButtonBar
                            actions={[
                                {
                                    className: 'links',
                                    disabled: false,
                                    divider: 'sides',
                                    iconClassName: 'icon-link',
                                    label: 'Welcome',
                                    onClick: function noRefCheck(){},
                                    renderIcon: InformationSquareFilled32
                                },
                                {
                                    className: 'links',
                                    disabled: false,
                                    divider: 'sides',
                                    iconClassName: 'icon-link',
                                    label: 'Accessibility Checker',
                                    onClick: function noRefCheck(){},
                                    renderIcon: Bee32
                                },
                                {
                                    className: 'links',
                                    disabled: false,
                                    divider: 'sides',
                                    iconClassName: 'icon-link',
                                    label: 'Visual',
                                    onClick: function noRefCheck(){},
                                    renderIcon: Sight32
                                },
                                {
                                    className: 'links',
                                    disabled: false,
                                    divider: 'sides',
                                    iconClassName: 'icon-link',
                                    label: 'Keyboard Navigation',
                                    onClick: function noRefCheck(){},
                                    renderIcon: Keyboard32
                                },
                                {
                                    className: 'links',
                                    disabled: false,
                                    divider: 'sides',
                                    iconClassName: 'icon-link',
                                    label: 'Screen Reader',
                                    onClick: function noRefCheck(){},
                                    renderIcon: VolumeUpFilled32
                                }
                            ]} 
                            className="sidebar-icons"
                            length={5}
                        />
                    </SideNavItems>
                </SideNav>
            </Header>
            )} />
        );
    }
}

export default Sidebar;