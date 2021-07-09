const doPost = (request = {}) => {

  const { parameter, postData: { contents, type } = {} } = request;
  const { source } = parameter;

  let result = {};
  const output = { response: {} };
  try {
    result = new Function(contents)();
    output.response = result;
  } catch (ex) {
    output.error = ex.message;
  }

  return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);

}

