import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { TeslaIconsService } from './tesla.icons.service';

@Component({
  selector: 'lib-tesla-icons',
  templateUrl: './tesla.icons.component.html',
  styleUrls: [
    './tesla.icons.component.scss'
  ]
})
export class TeslaIconsComponent implements OnChanges, OnInit{
  private baseURL = '';

  constructor(private teslaIconService: TeslaIconsService) {
    this.iconReady = false;
    this.baseURL = this.teslaIconService.getBaseURL();
  }

  @Input() icon: string;
  @Input() status?: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() marginLeft?: string;
  @Input() marginRight?: string;
  @Input() marginTop?: string;
  @Input() fill?: string;

  public iconType: string;
  public teslaIconSrc: string;
  public iconStatus: string;
  public iconReady: boolean;

  getIcon(path: string, extension: string = 'png') {
    if (this.baseURL == null) {
      return 'assets/icons/' + path + '.' + extension;
    }
    return this.baseURL + 'assets/icons/' + path + '.' + extension;
  }
  ngOnInit() {
    if (this.icon.split('-')[0] === 'instrument') {
      switch (this.icon.split('-')[1].toString()) {
        case '1': // Face Recognition
          this.icon = 'instrument-fr';
          break;
        case '2': // Keystroke dynamics
          this.icon = 'instrument-ks';
          break;
        case '3': // Voice Recognition
          this.icon = 'instrument-vr';
          break;
        case '4': // Forensic Analysis
          this.icon = 'instrument-fa';
          break;
        case '5': // Plagiarism
          this.icon = 'instrument-plagiarism';
          break;
      }
    }
    this.teslaIconSrc = this.getIcon(this.icon.replace('-', '/'), 'svg');
    this.updateStatus();
    this.iconReady = true;
  }

  ngOnChanges(changes: any) {
    if (this.iconReady === true) {
      this.updateStatus();
    }
  }

  private updateStatus() {
    let aux;
    if (this.status === undefined) {
      return;
    }
    switch (this.status.toString()) {
      case 'error':
      case 'success':
      case 'warning':
      case 'info':
      case 'disabled':
        aux = 'tesla-status-show-' + this.status;
        break;
      case '1':
        aux = 'tesla-status-show-info';
        break;
      case '2':
        aux = 'tesla-status-show-success';
        break;
      case '3':
        aux = 'tesla-status-show-warning';
        break;
      case '4':
        aux = 'tesla-status-show-error';
        break;
      case '0':
        aux = 'tesla-status-show-disabled';
        break;
      case '':
        aux = '';
        break;
      default:
        console.error('Status [' + this.status + '] is invalid');
        break;
    }

    if (this.fill === 'full') {
      aux += ' status_full';
    }

    this.iconStatus = aux;
  }
}
