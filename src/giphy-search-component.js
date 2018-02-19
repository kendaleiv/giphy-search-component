import GiphyApi from './giphy-api';
import UI from './ui';

export default class GiphySearchComponent {
  constructor(configuration = null) {
    const defaultConfiguration = {
      defaultDomScope: document.body,
      tagName: 'app-giphy-search'
    };

    this.configuration = defaultConfiguration;

    if (configuration) {
      Object.assign(this.configuration, configuration);
    }
  }

  start(domScope = this.configuration.defaultDomScope) {
    const instances = domScope.getElementsByTagName(this.configuration.tagName);

    [...instances].forEach(instance => {
      const giphyApi = new GiphyApi(instance.getAttribute('api-key'));
      const ui = new UI(instance, giphyApi);

      ui.start(this.configuration.initialSearch);
    });
  }
}
