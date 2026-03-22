import { Component, AfterViewInit, OnDestroy, ElementRef } from "@angular/core";
import gsap from "gsap";

@Component({
  selector: 'tween-component',
  standalone: true,
  templateUrl: 'tween.html',
  styleUrl: 'tween.css'
})
export class TweenComponent implements AfterViewInit, OnDestroy {
  // Store the context to revert it later
  private ctx?: gsap.Context;

  // Inject ElementRef to define the 'scoping' boundary
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // 1. Initialize the context scoped to this component
    this.ctx = gsap.context(() => {
      
      // All these selectors now only search inside this component
      gsap.to(".green", { 
        rotation: 360, 
        x: 100, 
        duration: 1, 
        repeat: -1, 
        yoyo: true 
      });

      gsap.from(".purple", { 
        rotation: -360, 
        x: -100, 
        duration: 1, 
        repeat: -1, 
        yoyo: true 
      });

      gsap.fromTo(".blue", 
        { x: -100 }, 
        { rotation: 360, x: 100, duration: 1, repeat: -1, yoyo: true }
      );

    }, this.el.nativeElement); // <--- This is the "Magic Scope"
  }

  ngOnDestroy() {
    // 2. Kill all animations and reset styles when component is destroyed
    this.ctx?.revert();
  }
}