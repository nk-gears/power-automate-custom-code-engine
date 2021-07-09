module.exports = async function (context, req) {

    let result = {};
    const output = { response: {} };
    try {
        result = new Function(req.body)();
        output.response = result;
    } catch (ex) {
        output.error = ex.message;
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(output)
    };
}