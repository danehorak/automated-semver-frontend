import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionService, VersionInfo } from './version.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Automated SemVer Test Application';
  frontendVersion: string = '';
  backendVersion: string = '';
  backendApiName: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.frontendVersion = this.versionService.getFrontendVersion();
    
    this.versionService.getBackendVersion().subscribe({
      next: (versionInfo: VersionInfo) => {
        this.backendVersion = versionInfo.version;
        this.backendApiName = versionInfo.api;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching backend version:', err);
        this.error = 'Failed to fetch backend version. Make sure the backend is running.';
        this.loading = false;
      }
    });
  }
}

