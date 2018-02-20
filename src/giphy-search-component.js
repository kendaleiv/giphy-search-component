import GiphyApi from './giphy-api';
import UI from './ui';

export default class GiphySearchComponent {
  constructor(configuration = null) {
    const defaultConfiguration = {
      defaultDomScope: document.body,
      tagName: 'app-giphy-search',
      embedHeight: '500px',
      embedWidth: '800px'
    };

    this.configuration = defaultConfiguration;

    if (configuration) {
      Object.assign(this.configuration, configuration);
    }
  }

  start(domScope = this.configuration.defaultDomScope) {
    if (!domScope) {
      return;
    }

    const instances = domScope.querySelectorAll(
      `${this.configuration.tagName}, *[data-${this.configuration.tagName}]`);

    [...instances].forEach(instance => {
      const giphyApi = new GiphyApi(instance.getAttribute('api-key'));
      const ui = new UI(instance, this.configuration, giphyApi);

      ui.start(this.configuration.initialSearch);
    });
  }
}

new GiphySearchComponent().start();
