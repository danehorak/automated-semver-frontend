import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface VersionInfo {
  version: string;
  api: string;
}

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBackendVersion(): Observable<VersionInfo> {
    return this.http.get<VersionInfo>(`${this.apiUrl}/api/version/`);
  }

  getFrontendVersion(): string {
    return environment.version;
  }
}

