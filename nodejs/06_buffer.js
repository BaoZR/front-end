// 用来处理二进制流的buffer

const buf = Buffer.from('a','ascii');
console.log(buf.toString('hex'));//61

const buf2 = Buffer.alloc(10,'a');
console.log(buf2.toString());//aaaaaaaaaa

const buf3 = Buffer.alloc(256);
console.log('写入字节数:'+buf3.write('www.baidu.com'))
console.log(buf3.toJSON())

const buf4 = Buffer.concat([buf2,buf3]);
console.log("buf4:"+buf4.toString())

var result = buf.compare(Buffer.from('a'));
console.log("比较结果是"+ result);

//copy
//slice



