# culqui-ns

The application uses several AWS resources, including Lambda functions and an API Gateway API. These resources are defined in the `serverless.yaml` file in this project.

## Desplegar la aplicacion localmente

To build and deploy your application for the first time, run the following in your shell:

```bash
culqui-ns$ npm install
culqui-ns$ serverless offline
```

## Test unitarios funcionales usando la funcionalidad de despliegue a nivel Local

    El token statico elegido es  = pk_test_abABcd

### Creacion del card token

    http://localhost:3000/dev/cards

### Recuperar los datos del card

    http://localhost:3000/dev/cards/cisudSveF5xMKwjK
