import { Component, AfterViewInit, OnDestroy, ElementRef } from "@angular/core";
import gsap from "gsap";

@Component({
  selector: 'timeline-component',
  standalone: true,
  templateUrl: 'timeline.html',
  styleUrl: 'timeline.css'
})
export class TimeLineComponent implements AfterViewInit, OnDestroy {
  // Keep a reference to the context so we can kill it when the user leaves the page
  private ctx?: gsap.Context;

  // Inject ElementRef to get the 'host' of this component
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // 1. Create the context scoped to this component's HTML
    this.ctx = gsap.context(() => {
      
      // Now we use CLASSES instead of IDs safely! 
      // It won't touch the boxes in your 'TweenComponent'.
      const tl = gsap.timeline({ 
        defaults: { duration: 1, ease: "power2.out" } 
      });

      tl.to(".green", { x: 400 }) 
        .addLabel("midpoint")
        .to(".purple", { rotation: 360 }, "midpoint") 
        
        // Starts exactly at 1s in the master timeline
        .to(".blue", { x: 400 }, 1) 

        // Starts at the same time as the purple animation
        .to(".orange", { x: 400 }, "<")

        // 0.2s after our midpoint label
        .to(".pink", { scale: 1.5 }, "midpoint+=0.2");

    }, this.el.nativeElement); // <--- This is the magic "scope" parameter
  }

  ngOnDestroy() {
    // 2. Clean up: This prevents memory leaks and "ghost" animations
    this.ctx?.revert();
  }
}