import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import { ModalComponent } from './modal/modal.component'
import { RefDirective } from './ref.directive';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
  ){
    // const t = this.title.getTitle();
    this.title.setTitle('Hohoho!');
    this.meta.addTags([
      {name: 'keyWords', conten: 'Yo man!'},
      {name: 'description', content: 'Ahoy!'}
    ])
    
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(modalFactory);

    component.instance.title = 'My custom title';
    component.instance.close.subscribe(() => this.refDir.containerRef.clear())

  }
}

