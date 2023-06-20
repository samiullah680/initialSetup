# ounce-ui

> @cedcommerce/ounce-ui

[![NPM](https://img.shields.io/badge/GIT-Ounce--UI-yellowgreen)](https://github.com/cedcommerce/ounce-ui.git) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Instructions

### Step 1

Before Privately using this Npm Package authenticate by logging in to npm, use the `npm login` command, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

TOKEN generation Process :
 1. Open github Acc 
 2. Go to Setting 
 3. Developer Settings 
 4. personal access token 
 5. Click on `Generate new token`
 
```sh
$ npm login --scope=@cedcommerce --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

### Step 2 ( not required, use only if there is an error related to Org )

In the same directory as your `package.json` file, create or edit an `.npmrc` file to include a line specifying GitHub Packages URL and the account owner.

```bash
registry=https://npm.pkg.github.com/cedcommerce
```

# Install

When you done with the Above Process Run this on CLI

```bash
npm install @cedcommerce/ounce-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from '@cedcommerce/ounce-ui'
import '@cedcommerce/ounce-ui/dist/index.css'

class Example extends Component {
  render() {
    return <Button primary={true}>
      Click
    </Button>
  }
}
```

## Change Log

`1.0.1` : Base Structure Completed

## License

MIT © [Anshuman Singh](https://github.com/anshuman-cedcoss)

## 1. Create a TXT record in your DNS configuration for the following hostname: _github-pages-challenge-vikaspateldesigner.cedcommerce.ounce
## 2. Use this code for the value of the TXT record: 062d3b3925dbf3b27fc5fdfb1474dc
## 3. Wait until your DNS configuration changes. This could take up to 24 hours to propagate.
  
