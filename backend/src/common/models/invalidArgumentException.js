export const invalidArgumentException = {
    statusCode: 500,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "Error": 'InvalidArgumentException'
    })
}