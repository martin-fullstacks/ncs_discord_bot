## Installation

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Usage/Examples

Create .env file

```bash
  touch .env
```

Add this to the file

```text
TOKEN=yourtoken
```

## Config

Path : `./settings/config.json`

````json
{
  "prefix": "$",
  "embed": {
    "color": "#4D6FFF"
  },
  "roles": [
    {
      "label": "Test role 1",
      "description": "Add role 1",
      "value": "981653642262245426"
    },
    {
      "label": "Test role 2",
      "description": "Add role 2",
      "value": "981654026317856808"
    },
    {
      "label": "Test role 2",
      "description": "Add role 1",
      "value": "981672486674513941"
    }
  ],
  "channelMessagejoin": "981577652332822538",
  "channelMessageleav": "981577652332822538"
}
````


| Key | Description                                                    | Default | Required                     |
|---|----------------------------------------------------------------|------|------------------------------|
| prefix | This is the prefix of the bot.                                 | None | `True`                       |
| color | The color of the embeds.                                       | `#4D6FFF` | `True`                       |
| roles | This is only for the system of roles (with menu).              | None | `True if you use this sytem.` |
|  |                                                                |    |  |
| label | The name of the options.                                       | None | `True`                       |
| description | The description of the options.                                | None | `True`                         |
| value | Need to be an id role, only.                                   | None | `True`                         |
|  |                                                                |    |  |
| channelMessagejoin | Need to be an id of a channel (when the user join the server)  | None | `True`                         |
| channelMessageleav | Need to be an id of a channel (when the user leave the server) | None | `True`                         |


