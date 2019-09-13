export const schemaNotValid = {
    statusCode: 500,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "Error": 'SchemaNotValid'
    })
}