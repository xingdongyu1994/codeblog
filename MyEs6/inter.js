// 常见题目

/*

  async function testSometing() {
    console.log("执行testSometing");
    return "testSometing";
}

async function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");
    const v1 = await testSometing();
    console.log(v1);
    const v2 = await testAsync();
    console.log(v2);
    console.log(v1, v2);
}

test();

var promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");});//3
promise.then((val)=> console.log(val));

console.log("test end...")


连接：https://www.cnblogs.com/mengfangui/p/10060309.html


await 后面跟一个promise函数 或者  跟一个普通函数
*/