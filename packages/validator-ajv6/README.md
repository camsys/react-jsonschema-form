[![Build Status][build-shield]][build-url]
[![npm][npm-shield]][npm-url]
[![npm downloads][npm-dl-shield]][npm-dl-url]
[![Contributors][contributors-shield]][contributors-url]
[![Apache 2.0 License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/rjsf-team/react-jsonschema-form">
    <img src="https://raw.githubusercontent.com/rjsf-team/react-jsonschema-form/7ebc86621d8df8c21f0c39bcca6d476f6f7a2051/packages/validator-ajv6/logo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">@rjsf/validator-ajv6</h3>

  <p align="center">
  AJV-6 based validator plugin for <a href="https://github.com/rjsf-team/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <br />
    <a href="https://react-jsonschema-form.readthedocs.io/en/stable/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rjsf-team.github.io/react-jsonschema-form/">View Playground</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Report Bug</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Exports `validator-ajv6` plugin for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form/)
- [AJV](https://github.com/ajv-validator/ajv/)
- [TypeScript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

> NOTE: This package is deprecated in favor of the `@rjsf/validator-ajv8` and is provided primarily for people upgrading to version 5 who initially want to minimize the validator differences.

### Prerequisites

#### React JsonSchema Form Utils

- `@rjsf/utils >= 5.0.0`

```bash
yarn add @rjsf/core
```

### Installation

```bash
yarn add @rjsf/validator-ajv6
```

<!-- USAGE EXAMPLES -->

## Usage

```tsx
import { RJSFSchema } from "@rjsf/utils";
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv6';

const schema: RJSFSchema = {
  type: 'string',
};

<Form schema={schema} validator={validator} />
```

or, using a more complex example using custom validator with custom formats

```tsx
import { RJSFSchema } from "@rjsf/utils";
import Form from '@rjsf/core';
import { customizeValidator } from '@rjsf/validator-ajv6';

const customFormats = {
  'phone-us': /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/
};

const validator = customizeValidator({
  customFormats,
});

const schema: RJSFSchema = {
  type: 'string',
  format: 'phone-us'
};

<Form schema={schema} validator={validator} />
```

or, using a more complex example using a custom with additional meta schema

```tsx
import { RJSFSchema } from "@rjsf/utils";
import Form from '@rjsf/core';
import { customizeValidator } from '@rjsf/validator-ajv6';

const metaSchemaDraft04 = require("ajv/lib/refs/json-schema-draft-04.json");

const validator = customizeValidator({
  additionalMetaSchemas: [metaSchemaDraft04],
});

const schema: RJSFSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  type: 'string',
};

<Form schema={schema} validator={validator} />
```

or, using a more complex example using custom validator config override options

```tsx
import { RJSFSchema } from "@rjsf/utils";
import Form from '@rjsf/core';
import { customizeValidator } from '@rjsf/validator-ajv6';

const validator = customizeValidator({
  ajvOptionsOverrides: {
    $data: true,
    verbose: true,
  }
});

const schema: RJSFSchema = {
  type: 'string',
};

<Form schema={schema} validator={validator} />
```

Finally, you can combine both additional meta schemas, custom formats and custom validator config override options.

```tsx
import { RJSFSchema } from "@rjsf/utils";
import Form from '@rjsf/core';
import { customizeValidator } from '@rjsf/validator-ajv6';

const metaSchemaDraft04 = require("ajv/lib/refs/json-schema-draft-04.json");

const customFormats = {
  'phone-us': /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/
};

const validator = customizeValidator({
  additionalMetaSchemas: [metaSchemaDraft04],
  customFormats,
  ajvOptionsOverrides: {
    $data: true,
    verbose: true,
  }
});

const schema: RJSFSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  type: 'string',
  format: 'phone-us'
};

<Form schema={schema} validator={validator} />
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/rjsf-team/react-jsonschema-form/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Read our [contributors' guide](https://react-jsonschema-form.readthedocs.io/en/stable/contributing/) to get started.

<!-- CONTACT -->

## Contact

rjsf team: [https://github.com/orgs/rjsf-team/people](https://github.com/orgs/rjsf-team/people)

GitHub repository: [https://github.com/rjsf-team/react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[build-shield]: https://github.com/rjsf-team/react-jsonschema-form/workflows/CI/badge.svg
[build-url]: https://github.com/rjsf-team/react-jsonschema-form/actions
[contributors-shield]: https://img.shields.io/github/contributors/rjsf-team/react-jsonschema-form.svg
[contributors-url]: https://github.com/rjsf-team/react-jsonschema-form/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/apache-2.0/
[npm-shield]: https://img.shields.io/npm/v/@rjsf/validator-ajv6/latest.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@rjsf/validator-ajv6
[npm-dl-shield]: https://img.shields.io/npm/dm/@rjsf/validator-ajv6.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/@rjsf/validator-ajv6
