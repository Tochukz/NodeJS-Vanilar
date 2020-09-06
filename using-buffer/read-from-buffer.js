// Writing to a buffer
const tenOctetBuffer = Buffer.alloc(10);
console.log(tenOctetBuffer); // <Buffer 00 00 00 00 00 00 00 00 00 00>
const writelen = tenOctetBuffer.write("Node.js Binary"); // 10
console.log(tenOctetBuffer); //<Buffer 4e 6f 64 65 2e 6a 73 20 42 69>

// reading from the buffer
const buffStr = tenOctetBuffer.toString();
console.log(buffStr); // Node.js Bi

const buffJson = tenOctetBuffer.toJSON();
console.log(buffJson); // { type: 'Buffer', data: [ 78, 111, 100, 101, 46, 106, 115, 32, 66, 105 ] }

// Setting individual octet
const elevenOctetBuffer = Buffer.alloc(11);
elevenOctetBuffer.write("Node.js");
console.log(elevenOctetBuffer) // <Buffer 4e 6f 64 65 2e 6a 73 00 00 00 00>
elevenOctetBuffer[7] = ' '.charCodeAt();
elevenOctetBuffer[8] = 'B'.charCodeAt();
elevenOctetBuffer[9] = 'i'.charCodeAt();
elevenOctetBuffer[10] = 'n'.charCodeAt(); 
console.log(elevenOctetBuffer); // <Buffer 4e 6f 64 65 2e 6a 73 20 42 69 6e>

const nodeStr = elevenOctetBuffer.toString();
console.log(nodeStr); // Node.js Bin

/** Using byte length to determine the number of bytes required to encode a given string */
const message = "Node.js Binary";
const messageLen = Buffer.byteLength(message); // 14
const messageBuffer = Buffer.alloc(14);
messageBuffer.write(message);
console.log(messageBuffer); // <Buffer 4e 6f 64 65 2e 6a 73 20 42 69 6e 61 72 79>

const msg = messageBuffer.toString(); 
console.log(msg); // Node.js Binary

/** write at a given */
const helloBuffer = Buffer.alloc(16);
const writeLen = helloBuffer.write('Hello'); //5
console.log(helloBuffer); // <Buffer 48 65 6c 6c 6f 00 00 00 00 00 00 00 00 00 00 00>
helloBuffer.write(" world", 5);
console.log(helloBuffer); // <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 00 00 00 00 00>

const helloStr = helloBuffer.toString();
console.log(helloStr); // Hello world

const helloStr2 = helloBuffer.toString('utf-8', 0, 11);
console.log(helloStr2); // Hello world

//str.length is not always equal to Buffer.byteLength(str) 
const snowman = "☃";
const strLen = snowman.length; // 1
const bytes = Buffer.byteLength(snowman); // 3

/* buff.length is same as allocated size */
const newBuff = Buffer.alloc(15);
const writtenLen = newBuff.write("Buffer Len"); // 10
console.log(newBuff.length); // 15

/** Copy from one buffer to another */
const msg1 = "Happy"
const msg2 = " birthday!";
const completeMsgLen = Buffer.byteLength(`${msg1} ${msg2}`); // 16
const completeMsgBuffer = Buffer.alloc(completeMsgLen);
completeMsgBuffer.write(msg1);
const birthdayBuffer = Buffer.from(msg2);

// copying birthday buffer into completeMsgBuffer at offset of 5
birthdayBuffer.copy(completeMsgBuffer, 5);
const wishes = completeMsgBuffer.toString(); 
console.log(wishes); // Happy Birthday!

/** Slicing a buffer */
const payBuffer = Buffer.from("R40,000");
console.log(payBuffer); // <Buffer 52 34 30 2c 30 30 30>

const playSlice = payBuffer.slice(1, 3);
console.log(playSlice); //<Buffer 34 30>

playSlice.write("58");
const newPay = payBuffer.toString();
console.log(newPay); // R58,000


/**
 * Syntax: 
 * buffer.toString([encoding=utf8], [start=0], [end=buffer.length])
 * 
 * Buffer.byteLength(str, [encoding])
 * NB: str.length is not always equal to Buffer.byteLength() because some charaters may required more than one byte to represent then in binary
 * 
 * buffer.copy(target, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
 * 
 * buffer.slice(start, end=buffer.length)
 * NB: The slice if not a new Buffer. Modifying the slice will also modify the original buffer.
 * 
 */