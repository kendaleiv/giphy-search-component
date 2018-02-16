export default class GiphySearchComponent {
  constructor(configuration = null) {
    const defaultConfiguration = {
      defaultDomScope: document.body
    };

    this.configuration = defaultConfiguration;

    if (configuration) {
      Object.assign(this.configuration, configuration);
    }
  }

  start() {
  }
}
