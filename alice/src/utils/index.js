
// needs implemented for X3DH
function generateIdKeys() {}

export function getFormattedTime() {
  let d = new Date();

  return `${d.getHours() % 12}:${d.getMinutes()}:${d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()} ${d.getHours() > 12 ? "pm" : "am"}`;
}

export function base64StringToBytes(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

export function hexStringToBytes(str) {
  if (!str) {
    return new Uint8Array();
  }
  
  var a = [];
  for (var i = 0, len = str.length; i < len; i+=2) {
    a.push(parseInt(str.substr(i,2),16));
  }
  
  return new Uint8Array(a);
}

export function bytesToHex (byteArray) {
  return byteArray.reduce((output, elem) => 
    (output + ('0' + elem.toString(16)).slice(-2)),
    '');
}

