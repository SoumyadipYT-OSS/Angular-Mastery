import { Component, signal } from '@angular/core';
import { LearningComponent } from '../components/learning-component.component';
import { TweenComponent } from '../LearnGSAP/_01_QuickStart/tween.component'; 
import { TimeLineComponent } from '../LearnGSAP/_02_TimeLine/timeline.component';

@Component({
  selector: 'app-root', 
  standalone: true, 
  imports: [LearningComponent, TweenComponent, TimeLineComponent],
  template: `
    <learning-component></learning-component> 
    
    <h2>Learn GSAP in Angular</h2>

    <section>
      <tween-component></tween-component>
    </section> 

    <section>
      <timeline-component></timeline-component>
    </section>
  `, 
})
export class App {
  protected readonly title = signal('LearnAngular');
}
