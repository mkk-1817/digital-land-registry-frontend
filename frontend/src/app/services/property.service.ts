import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private apiUrl = 'http://localhost:5000/add-property';
  private driveUploadUrl = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
  private folderId = 'https://drive.google.com/drive/folders/1p4-wEf29qduuCOMLIdLGzOXTP1jQHryk?usp=drive_link'; // Set parent folder for all plot folders
  private accessToken = 'AIzaSyA5ExOotylqJeVWQf1R2ORP6jo77OW0N5E';

  constructor(private http: HttpClient) {}

  addProperty(propertyData: any): Observable<any> {
    return this.http.post(this.apiUrl, propertyData);
  }

  async uploadFileToDrive(file: File, plotNumber: string): Promise<string> {
    const folderId = await this.createFolder(plotNumber);
    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify({ name: file.name, parents: [folderId] })], { type: 'application/json' }));
    formData.append('file', file);

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.accessToken}` });
    const response: any = await this.http.post(this.driveUploadUrl, formData, { headers }).toPromise();
    return `https://drive.google.com/file/d/${response.id}/view`;
  }

  private async createFolder(plotNumber: string): Promise<string> {
    const folderMetadata = { name: plotNumber, mimeType: 'application/vnd.google-apps.folder', parents: [this.folderId] };
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' });
    const response: any = await this.http.post('https://www.googleapis.com/drive/v3/files', folderMetadata, { headers }).toPromise();
    return response.id;
  }
}
