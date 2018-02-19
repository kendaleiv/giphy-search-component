# giphy-search-component

An embeddable [GIPHY](https://giphy.com/) image search component.

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

| Name                  | Description                                                               | Default Value |
| --------------------- | ------------------------------------------------------------------------- | ------------- |
| `api-key`             | The API key to connect to GIPHY, see https://developers.giphy.com         | |

## Development

- `npm install`
- `npm start`

## License

MIT
