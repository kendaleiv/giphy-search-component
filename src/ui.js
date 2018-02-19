export default class UI {
  constructor(instance, configuration, giphyApi) {
    if (!instance) {
      throw new Error('instance must be provided');
    }

    if (!configuration) {
      throw new Error('configuration must be provided.');
    }

    if (!giphyApi) {
      throw new Error('giphyApi must be provided.');
    }

    this.instance = instance;
    this.configuration = configuration;
    this.giphyApi = giphyApi;

    this.base64PoweredByApi = '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';
    this.containerClass = 'giphy-search-component-container';
    this.resultsContainerClass = 'giphy-search-component-results-container';
    this.controlsContainerClass = 'giphy-search-component-controls-container';
    this.searchClass = 'giphy-search-component-search';
    this.poweredByGiphyClass = 'giphy-search-component-powered-by-giphy';
  }

  start(initialSearch) {
    const html = `
      <style>
        .${this.containerClass} {
          border: 1px solid #ccc;
          display: block;
          position: relative;
          height: ${this.configuration.height};
          width: ${this.configuration.width};
        }

        .${this.resultsContainerClass} {
          height: calc(${this.configuration.height} - 36px);
          overflow: auto;
        }

        .${this.controlsContainerClass} {
          position: absolute;
          bottom: 0;
          width: 100%;
          white-space: nowrap;
        }

        .${this.searchClass} {
          font-size: 24px;
          vertical-align: middle;
          width: calc(${this.configuration.width} - 109px);
        }

        .${this.poweredByGiphyClass} {
          vertical-align: middle;
        }
      </style>
      <div class="${this.containerClass}">
        <div class="${this.resultsContainerClass}"></div>
        <div class="${this.controlsContainerClass}">
          <input type="text" class="${this.searchClass}" />
          <img class=${this.poweredByGiphyClass} src="data:image/png;base64,${this.base64PoweredByApi}" />
        </div>
      </div>`;

    this.instance.innerHTML = html;
    this.render([]);

    this.instance.querySelector(`.${this.searchClass}`).addEventListener('change', async evt => {
      let results = [];

      if (evt.currentTarget.value) {
        results = await this.giphyApi.search(evt.currentTarget.value);
      }

      this.render(results);
    });
  }

  render(results) {
    const container = this.instance.querySelector(`.${this.resultsContainerClass}`);

    if (results && results.data) {
      container.innerHTML = results.data
        .map(x => `<img src="${x.images.preview_gif.url}" />`)
        .join('');
    } else {
      container.innerHTML = '';
    }
  }
}
