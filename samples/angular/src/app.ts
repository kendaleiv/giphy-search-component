//our root app component
import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

declare var GiphySearchComponent: any;

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <app-giphy-search
        api-key="NilCckKtrJq9lDxMICbF7SrJTAN2wABk"
        embed-height="500px"
        embed-width="800px"
      >
      </app-giphy-search>
    </div>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }

  ngOnInit() {
    new GiphySearchComponent().start();
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ],

  // This is needed for <app-giphy-search></app-giphy-search>
  // Alternatively, use <div data-app-giphy-search></div>
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
