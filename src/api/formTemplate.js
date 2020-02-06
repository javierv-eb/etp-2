import * as urllib from 'url-lib';

const sdkRequest = async(url, method = 'GET', params, body) => (
    (await fetch(
        urllib.formatUrl(url, { ...params }),
        {
            method,
            params,
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )).json()
);

export const createFormTemplate = async(formParams) => (
    sdkRequest(
        'http://localhost:3002/api/v1/forms',
        'POST',
        null,
        JSON.stringify(formParams)
    )
);

export const loadFormTemplateList = () => (
    sdkRequest(
        'http://localhost:3002/api/v1/forms',
    )
);

export const deleteFormTemplate = (id) => (
    sdkRequest(
        `http://localhost:3002/api/v1/forms/${id}`,
        'DELETE'
    )
)