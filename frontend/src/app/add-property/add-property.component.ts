import { Component } from '@angular/core';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
})
export class AddPropertyComponent {
  property: any = {};
  selectedFile!: File;

  constructor(private propertyService: PropertyService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async submitProperty() {
    if (this.selectedFile) {
      this.property.property_tax_receipt = await this.propertyService.uploadFileToDrive(this.selectedFile, this.property.plot_number);
    }

    this.propertyService.addProperty(this.property).subscribe(response => {
      console.log('Property Added:', response);
      alert('Property added successfully!');
    });
  }
}
