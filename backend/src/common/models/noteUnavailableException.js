export const noteUnavailableException = {
    statusCode: 500,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "Error": 'NoteUnavailableException'
    })
}