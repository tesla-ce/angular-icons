import {NgModule} from '@angular/core';
import icons from '../assets/icons.json';
import {NbIconLibraries} from '@nebular/theme';

@NgModule({
  id: 'NbTeslaIconsModule'
})
export class NbTeslaIconsModule {
  private NAME = 'tesla';

  constructor(iconLibrary: NbIconLibraries) {
    iconLibrary.registerSvgPack(this.NAME, NbTeslaIconsModule.getIcons());
    // iconLibrary.setDefaultPack(this.NAME);
  }

  private static getIcons() {
    return {
      'common-activity': icons['common-activity'],
      'common-authorship': icons['common-authorship'],
      'common-connection': icons['common-connection'],
      'common-content': icons['common-content'],
      'common-course': icons['common-course'],
      'common-dashboard': icons['common-dashboard'],
      'common-delete': icons['common-delete'],
      'common-edit': icons['common-edit'],
      'common-identity': icons['common-identity'],
      'common-informed-consent': icons['common-informed-consent'],
      'common-integrity': icons['common-integrity'],
      'common-menu_logo': icons['common-menu_logo'],
      'common-monitoring': icons['common-monitoring'],
      'common-moreinfo': icons['common-moreinfo'],
      'common-notifications': icons['common-notifications'],
      'common-originality': icons['common-originality'],
      'common-system': icons['common-system'],
      'common-user': icons['common-user'],
      'common-view': icons['common-view'],
      'instrument-fa': icons['instrument-fa'],
      'instrument-fr': icons['instrument-fr'],
      'instrument-ks': icons['instrument-ks'],
      'instrument-plag': icons['instrument-plag'],
      'instrument-plagiarism': icons['instrument-plagiarism'],
      'instrument-vr': icons['instrument-vr'],
      'role-admin': icons['role-admin'],
      'role-instructor': icons['role-instructor'],
      'role-learner': icons['role-learner'],
      'role-legal': icons['role-legal'],
      'role-send': icons['role-send'],
      'role-superadmin': icons['role-superadmin'],
      'sensor-assessment': icons['sensor-assessment'],
      'sensor-camera': icons['sensor-camera'],
      'sensor-keyboard': icons['sensor-keyboard'],
      'sensor-microphone': icons['sensor-microphone']
    };
  }
}
