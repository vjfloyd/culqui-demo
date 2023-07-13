
export const tokenValidator = (headers, callback) => {
    try{
        let authorization = headers['Authorization'].split(' ');
          if( !authorization || authorization[0] !== 'Bearer'
              || authorization[1] !== 'pk_test_abABcd') {
                callback(null, {
                    statusCode: 401,
                    body: JSON.stringify('Unauthorized user')
                });
          }
    }catch (ex) {
        callback(null, {
            statusCode: 401,
            body: JSON.stringify('Unauthorized user')
        });
    }
}
