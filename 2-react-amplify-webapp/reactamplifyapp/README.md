# Amplify React Practice Project

Brief explanation
1. frontend init
    ```bash
    npx create-react-app ./
    ```
2. backend init
    ```bash
    amplify init
    ```
    - REST api
    - CRUD with dynamodb
3. config

    in `src/index.js`
    ```js
    import { Amplify } from 'aws-amplify';
    import amplifyconfig from './amplifyconfiguration.json';
    Amplify.configure(amplifyconfig);
    ```
4. authenticator

    in `/src/App.js`
    wrap the main content with
    ```js
    <Authenticator signUpAttributes={['email']}>
    </Authenticator>
    ```
5. http request from front end

    in `src/App.js`
    - required
        ```js
        import { get, put} from 'aws-amplify/api'
        ```
    - get request
        ```js
        const response = get({
          apiName: 'crudApi',
          path: '/employee',
            }).response
        .then((res)  => {
            return res.body.json()
        })
        .then((data) => {
            setemList(data.body.Items)
        }) 
        .catch((e)=>{
            console.log(e);
        }
        )
        ```
    - put request
        ```js
        try{
        eminput['id'] = parseInt(eminput['id'])
        const restOperation = put({
            apiName: 'crudApi',
            path: '/employee',
            options: {
            body: eminput
            }
        })
        const response = await restOperation.response;
        console.log('PUT call succeeded: ', response);
        }
        catch (e) {
        console.log(e)
        }
        ```