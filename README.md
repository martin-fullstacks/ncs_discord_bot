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

```json
{
  "prefix": "$",
  "embed": {
    "color": "#4D6FFF"
  },
  "roles": [
    {
      "label": "Test role 1",
      "description": "Add role 1",
      "value": "ROLE_ID_1"
    },
    {
      "label": "Test role 2",
      "description": "Add role 2",
      "value": "ROLE_ID_2"
    },
    {
      "label": "Test role 2",
      "description": "Add role 1",
      "value": "ROLE_ID_3"
    }
  ],
  "channelMessagejoin": "12345678910",
  "channelMessageleav": "12345678910"
}

```

| Key | Description                                                             | Default | Required |
|---|-------------------------------------------------------------------------|---------|----------|
| prefix | this is the prefix of the bot                                           | $ and / | True     |
| color | the color of the embeds.                                                | #4D6FFF | True     |
| roles | This is the main config for the system of roles.                        | Noen    | True     |
| label |     | None    | True     |
| notifRoleId | discord id of the role you want the bot to ping when it sends a message | None    | False    |
| ecLogin | your [Ecole directe](https://ecoledirecte.com) login                    | None    | True     |
| ecPassword | your [Ecole directe](https://ecoledirecte.com) password                 | None    | True     |