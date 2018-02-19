# giphy-search-component

An embeddable [GIPHY](https://giphy.com/) image search component.

[![npm](https://img.shields.io/npm/v/giphy-search-component.svg)](https://www.npmjs.com/package/giphy-search-component)
[![Travis](https://img.shields.io/travis/kendaleiv/giphy-search-component.svg)]()

### **[Try out a demo!](https://kendaleiv.github.io/giphy-search-component)**

**Note:** This is a demo associated with my "Creating and Distributing Custom Web Components" talk. Items like linting and tests are not included, simplifying the repository.

## Installation

```
npm install giphy-search-component
```

Or, load this script manually: [https://unpkg.com/giphy-search-component@latest/dist/giphy-search-component.min.js](https://unpkg.com/giphy-search-component@latest/dist/giphy-search-component.min.js) -- This targets the latest version, which may include breaking changes for major version updates. A specific version can be targeted to avoid potential breaking changes. See [https://unpkg.com](https://unpkg.com) for more information.

## Usage

```html
<app-giphy-search api-key="API_KEY_HERE"></app-giphy-search>
```

## Attributes

| Name (bold if required) | Description                                                               | Default Value |
| ----------------------- | ------------------------------------------------------------------------- | ------------- |
| **`api-key`**           | The API key to connect to GIPHY, see https://developers.giphy.com         | |
| `height`                | The height of the embeddable component                                    | '500px' |
| `width`                 | The width of the embeddable component                                     | '800px' |

## Events

| Event                            | Description                          |
| -------------------------------- | ------------------------------------ |
| `GiphySearchComponent:Searching` | Invoked when a search has started.   |
| `GiphySearchComponent:Searched`  | Invoked when a search has completed. |

## Development

- `npm install`
- `npm start`

## License

MIT
