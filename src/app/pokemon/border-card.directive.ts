import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  // ElementRef : reference vers la carte ddu dom
  constructor(private el: ElementRef) {
    // Appel des méthodes
    this.setHeigth(180);
    this.setBordeur('#F5F5F5');

   }

   @Input('pkmnBorderCard') borderColor: string;

   @HostListener('mouseenter') onMouseEnter(){
    // Modifier couleur bordure
    this.setBordeur(this.borderColor || '#009688'); // alias
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBordeur('#f5f5f5');
   }

// Hauteur pour tous les éléments
setHeigth(height: number){
    // Definie une hauteur à mon niveau
    this.el.nativeElement.style.hauteur = `${height}px`;
  }

// Bordeur
setBordeur(color: string){
  this.el.nativeElement.style.border = `solid 4px ${color}`;
}
}
