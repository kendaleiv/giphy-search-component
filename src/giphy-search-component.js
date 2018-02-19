import GiphyApi from './giphy-api';
import UI from './ui';
import moment from 'moment';

export default class GiphySearchComponent {
  constructor(configuration = null) {
    const defaultConfiguration = {
      defaultDomScope: document.body,
      tagName: 'app-giphy-search',
      height: '500px',
      width: '800px'
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
      const ui = new UI(instance, this.configuration, giphyApi);

      ui.start(this.configuration.initialSearch);
    });
  }
}
