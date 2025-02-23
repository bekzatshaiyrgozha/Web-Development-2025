import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfo } from '../product-info';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./product.component.html' ,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productInfo! : ProductInfo ; 
  getWhatsAppLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.productInfo.name + ' - ' + this.productInfo.link)}`;
  }

  getTelegramLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.productInfo.link)}&text=${encodeURIComponent(this.productInfo.name)}`;
  }
} 
