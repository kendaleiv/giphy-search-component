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

    this.constructorConfiguration = defaultConfiguration;

    if (configuration) {
      Object.assign(this.constructorConfiguration, configuration);
    }
  }

  start(domScope = this.constructorConfiguration.defaultDomScope) {
    if (!domScope) {
      return;
    }

    const instances = domScope.querySelectorAll(
      `${this.constructorConfiguration.tagName}, *[data-${this.constructorConfiguration.tagName}]`);

    [...instances].forEach(instance => {
      const configuration = Object.assign({}, this.constructorConfiguration);

      const attributeConfiguration = {};

      [...instance.attributes].forEach(x => {
        // https://stackoverflow.com/a/6661012
        // answering
        // https://stackoverflow.com/questions/6660977/convert-hyphens-to-camel-case-camelcase
        const camelCaseName = x.name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

        attributeConfiguration[camelCaseName] = x.value;
      });

      if (attributeConfiguration) {
        Object.assign(configuration, attributeConfiguration);
      }

      const giphyApi = new GiphyApi(instance.getAttribute('api-key'));
      const ui = new UI(instance, configuration, giphyApi);

      ui.start(configuration.initialSearch);
    });
  }
}

new GiphySearchComponent().start();
