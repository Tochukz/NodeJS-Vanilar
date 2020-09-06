/** Binary encoding */
const fiveOctetBuffer = new Buffer(5); // n=5, n is the number of octets. 
console.log(fiveOctetBuffer); // <Buffer 00 00 00 00 00>

const arrayInBinaryForm = new Buffer([1, 2, 3, 4, 5]);
console.log(arrayInBinaryForm); // <Buffer 01 02 03 04 05>

const strInBinaryForm = new Buffer("Learning Binary Node.js");
console.log(strInBinaryForm); // <Buffer 4c 65 61 72 6e 69 6e 67 20 42 69 6e 61 72 79 20 4e 6f 64 65 2e 6a 73>
// The buffer output is represented in hexadecimal numbers

/** Test Validity of encoding type */
const utf8 = Buffer.isEncoding('utf8'); // true
const utf_8 = Buffer.isEncoding('utf-8'); // true
const ascii = Buffer.isEncoding('ascii'); // true
const binary = Buffer.isEncoding('binary'); // true
const base32 = Buffer.isEncoding('base32'); // false
const hex = Buffer.isEncoding('hex'); // true

/** using recommended Buffer methods instead of the deprecated Buffer() constructor */
const fiveOctetBuffer2 = Buffer.alloc(5);
console.log(fiveOctetBuffer2); // <Buffer 00 00 00 00 00>

const arrayBuffer = Buffer.from([1, 2, 3, 4, 5]); 
console.log(arrayBuffer); // <Buffer 01 02 03 04 05>

const strButffer = Buffer.from("Learning Binary Node.js"); //
console.log(strButffer); // <Buffer 4c 65 61 72 6e 69 6e 67 20 42 69 6e 61 72 79 20 4e 6f 64 65 2e 6a 73>

/** Test if object is buffer */
const isFiveOctetBuffer = Buffer.isBuffer(fiveOctetBuffer); // true
const isArrayBinBuffer = Buffer.isBuffer(arrayInBinaryForm); // true
const isArrayBufferBuffer = Buffer.isBuffer(arrayBuffer); // true
const isStrBuffer = Buffer.isBuffer("whatever"); // false

/*
 * An octet is a unit of digital information in computing and telecommunications that consist of eight bits.
 * One octet can be used to represent decimal values ranging from 0 to 255
 * Raw data is stored in instances of the Buffer class, which is designed to handle raw binary data, in the node.
 * 
 * Note: DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 */