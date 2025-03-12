import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  productos = [
    { id: 1, nombre: 'Ensalada de Quinoa', precio: 10, imagen: 'https://i.pinimg.com/736x/88/bd/57/88bd571a988673ffbd8385539dee887a.jpg' },
    { id: 2, nombre: 'Bowl de Frutas', precio: 8, imagen: 'https://i.pinimg.com/736x/6c/c8/d0/6cc8d00c6986e76e3f01a57b02efc0a9.jpg' },
    { id: 3, nombre: 'Sopa Detox', precio: 12, imagen: 'https://i.pinimg.com/736x/d7/83/dd/d783ddd0ace9cdbabc310efdfb73cd7d.jpg' },
    { id: 4, nombre: 'Tacos de Pollo y Verduras', precio: 14, imagen: 'https://i.pinimg.com/736x/b6/d3/7d/b6d37d308b56c6c6d889c5567d5ab78f.jpg' },
    { id: 5, nombre: 'Smoothie Verde', precio: 7, imagen: 'https://i.pinimg.com/736x/bc/27/4d/bc274dfceef900b7cd2479424e112255.jpg' },
    { id: 6, nombre: 'Avena con Frutas', precio: 6, imagen: 'https://i.pinimg.com/736x/8f/d4/2b/8fd42b51f40ef8ed1e43653095bf9c3d.jpg' },
    { id: 7, nombre: 'Pasta Integral con Pesto', precio: 11, imagen: 'https://i.pinimg.com/736x/bd/6f/1f/bd6f1f3d56f8dd25174337d325cbf4b3.jpg' },
    { id: 8, nombre: 'Pizza de Vegetales', precio: 15, imagen: 'https://i.pinimg.com/736x/ab/46/2f/ab462fb58e22d7ea59ed26967dd77933.jpg' },
    { id: 9, nombre: 'Hamburguesa Vegana', precio: 13, imagen: 'https://i.pinimg.com/736x/71/00/eb/7100eb3a6d6a5ae5a48ba0129699496c.jpg' },
    { id: 10, nombre: 'Tartar de Atún', precio: 18, imagen: 'https://i.pinimg.com/736x/2e/e6/c1/2ee6c173719dc678b3008149f7673bc4.jpg' }
  ];
  
  carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    const subtotal = this.carrito.reduce((total, producto) => total + producto.precio, 0);
    const iva = subtotal * 0.12; 
    const total = subtotal + iva;
    return { subtotal, iva, total };
  }

  generarFacturaPDF() {
    const { subtotal, iva, total } = this.calcularTotal();
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text('Factura de Compra', 20, 20);
    doc.setFontSize(12);
    
    let y = 30;
    doc.text('Productos comprados:', 20, y);
    
    this.carrito.forEach((producto, index) => {
      y += 10;
      doc.text(`${producto.nombre} - $${producto.precio}`, 20, y);
    });

    y += 20;
    doc.text(`Subtotal: $${subtotal}`, 20, y);
    y += 10;
    doc.text(`IVA (12%): $${iva}`, 20, y);
    y += 10;
    doc.text(`Total: $${total}`, 20, y);

    doc.save('factura.pdf');
    this.carrito = [];
  }
}


