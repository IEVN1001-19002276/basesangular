import { Component } from '@angular/core';
import { IProductos } from '../productos';
 
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
 
export class ProductListComponent {
 
    imageWidth: number = 50;
    imageMargin: number = 2;
    muestraImagen: boolean = false;
    listFilter: string = '';
    mostrarImagenes(): void {
      this.muestraImagen = !this.muestraImagen;
    }
    productos: IProductos[] = [
        {
            "ProductoID": 1,
            "Modelo": "sentra",
            "Descripcion": "5 puertas",
            "Year": "marzo 12 2021",
            "Precio": 120000,
            "Marca": "nisan",
            "Color": "blanco",
            "ImageURL": "https://i.pinimg.com/originals/c4/dd/8c/c4dd8c121ef1da932ac9ad463554fe4a.jpg"
       
        },
        {
            "ProductoID": 2,
            "Modelo": "a4",
            "Descripcion": "4 puertas",
            "Year": "marzo 12 2021",
            "Precio": 130000,
            "Marca": "volsvagen",
            "Color": "negro",
            "ImageURL": "https://somoskudasai.com/wp-content/uploads/2020/08/EgocUdbU4AABJgL.jpg"
       
        },
        {
            "ProductoID": 3,
            "Modelo": "a5",
            "Descripcion": "2 puertas",
            "Year": "marzo 12 2021",
            "Precio": 150000,
            "Marca": "chevrolet",
            "Color": "rojo",
            "ImageURL": "https://img.remediosdigitales.com/a301c8/itasha-ferrari-430/1366_2000.jpg"
       
        },  
    ]
  }