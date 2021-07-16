import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
  public icons = [];
  public status = [];

  constructor() {
    this.status = [
      '',
      'success',
      'error',
      'warning',
      'info',
      'disabled'
    ];

    this.icons = [
      'common-activity',
      'common-authorship',
      'common-connection',
      'common-content',
      'common-course',
      'common-dashboard',
      'common-delete',
      'common-edit',
      'common-identity',
      'common-informed-consent',
      'common-integrity',
      'common-menu_logo',
      'common-monitoring',
      'common-moreinfo',
      'common-notifications',
      'common-originality',
      'common-system',
      'common-user',
      'common-view',
      'instrument-fa',
      'instrument-fr',
      'instrument-ks',
      'instrument-plag',
      'instrument-plagiarism',
      'instrument-vr',
      'role-admin',
      'role-data',
      'role-instructor',
      'role-learner',
      'role-legal',
      'role-send',
      'role-superadmin',
      'sensor-assessment',
      'sensor-camera',
      'sensor-keyboard',
      'sensor-microphone'
    ];
  }
}
