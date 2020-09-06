const tenOctetBuffer = Buffer.alloc(10); 
console.log(tenOctetBuffer); // <Buffer 00 00 00 00 00 00 00 00 00 00>
tenOctetBuffer.write("Node.js Binary");
console.log(tenOctetBuffer); // <Buffer 4e 6f 64 65 2e 6a 73 20 42 69>

const nineOctetBuffer = Buffer.alloc(9);
nineOctetBuffer.write("Node.js Binary"); 
console.log(nineOctetBuffer) // <Buffer 4e 6f 64 65 2e 6a 73 20 42>

nineOctetBuffer.write("Node.js Binary", "ascii"); 
console.log(nineOctetBuffer); // <Buffer 4e 6f 64 65 2e 6a 73 20 42>

const elevenOctetBuffer = Buffer.alloc(11);
elevenOctetBuffer.write("Node.js Binary", 3);
console.log(elevenOctetBuffer); // <Buffer 00 00 00 4e 6f 64 65 2e 6a 73 20>

elevenOctetBuffer.write("Node.js Binary", 3, "ascii");
console.log(elevenOctetBuffer); // <Buffer 00 00 00 4e 6f 64 65 2e 6a 73 20>

elevenOctetBuffer.write("Node.js Binary", 3, "hex"); // 
console.log(elevenOctetBuffer) // <Buffer 00 00 00 4e 6f 64 65 2e 6a 73 20>

/*
 *  Syntax: 
 *  buffer.write(string, [offset=0], [length=buffer.length-offset], [encoding=utf8])
 *    
 */ 