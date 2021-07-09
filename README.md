
# Power Automate Custom Code Engine

Currently Power Automate doesn't support executing any code snippets. This custom connector aims to solve that challenge.
To begin with the connector currently supports NodeJS (Javascript) Code Snippets. Eventually it can be improved to support multiple languages.


# Implementation Approach
- Code Execution is exposed as a API Service via CodeEngine
- Code Engine can be Azure Function, AWS Lambda or any external EndPoints
- The Repository Contains Code Script to use Google Apps Script as a CodeEngine, But this need some workaround to address the REDIRECT challenge in AppScript API End Point.

# Deployment

### Engine : App Script 
- google-apps-script-code-engine
- ga-custom-flow-template : To by pass the redirect. Please change the url in the definition.json

### Engine : Azure Function
- azure/azure-fn-code-engine

# TODO
- Support for Other languages
    - Swift
    - PHP
    - Python



## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

  