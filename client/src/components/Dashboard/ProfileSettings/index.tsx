import React from 'react';

import { FlexContainer } from '../../../ui/container.styles';
import { H2 } from '../../../ui/text-tags.styles';

import ProfileSettingsSectionContent from './ProfileSettingsSectionContent';

const ProfilleSettingsSection: React.FC = () => {
    return (
        <>
            <FlexContainer $flexDirection='row' $justifyContent='space-between'>
                <H2>Profile Settings</H2>
            </FlexContainer>
            <hr />
            <ProfileSettingsSectionContent />
        </>
    );
};

export default ProfilleSettingsSection;
