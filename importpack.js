Hooks.once('SBPackageManagerReady', () => {

    // User contributions should be added here. Please include any valid licensing information in your pack folder, and link to the licensing info using `licenseUrl`
    // You can separate your work into multiple packs if you want, allowing users to enable and disable packs through settings

    const moduleName = 'SoundBoard-BlitzCommunityPack',
        moduleLink = 'https://github.com/BlitzKraig/fvtt-SoundBoard-BlitzCommunityPack';

    SoundBoard.packageManager.addSoundPack(game.i18n.localize('SBCOMMUNITY.Rive.painCombat.title'), 'modules/SoundBoard-BlitzCommunityPack/communityAudio/Rive/PainCombat', moduleName, {
        description: game.i18n.localize('SBCOMMUNITY.Rive.painCombat.description'),
        licenses: [{
            licenseUrl: 'https://raw.githubusercontent.com/BlitzKraig/fvtt-SoundBoard-BlitzCommunityPack/master/communityAudio/Rive/LICENSE',
            licenseType: 'CC0',
            licenseDescription: game.i18n.localize('SBCOMMUNITY.Rive.licenseDescription')
        }],
        author: 'Rive',
        link: moduleLink
    });
    SoundBoard.packageManager.addSoundPack(game.i18n.localize('SBCOMMUNITY.Rive.hideousLaughter.title'), 'modules/SoundBoard-BlitzCommunityPack/communityAudio/Rive/HideousLaughter', moduleName, {
        description: game.i18n.localize('SBCOMMUNITY.Rive.hideousLaughter.description'),
        licenses: [{
            licenseUrl: 'https://raw.githubusercontent.com/BlitzKraig/fvtt-SoundBoard-BlitzCommunityPack/master/communityAudio/Rive/LICENSE',
            licenseType: 'CC0',
            licenseDescription: game.i18n.localize('SBCOMMUNITY.Rive.licenseDescription')
        }],
        author: 'Rive',
        link: moduleLink
    });
});