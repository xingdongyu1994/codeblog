// import MySet from '../Api/MySet/main'
// import myMap from '../Api/MyMap/main'
import MyProxyDefineProperty from '../Api/MyProxy/main'

// var a = [1, 2, 3, 4, 5]
// 注意这个NaN  Symbol保证唯一的值 或者使用includes
// var a = [1, 2, 3, 4, 5]

// var s = new MySet(a)
// s.add(1)
// s.add("1")
// s.add("2")
// s.add("3")
// s.add("4")

// var ss = new MySet()
// ss.add(11)
// ss.add("11")
// ss.add("21")
// ss.add("31")
// ss.add("41")

// var s = new MySet(ss)

// s.forEach(function (item, key) {
//   console.log("被告人非", item, key)
// })
// console.log("tgrfe ", s.size)
// console.log("tgrfe11 ", s.has("1"))
// console.log("tgrfe 22", s.has("11"))
// console.log("tgrfe 33", s.delete("3"))

// var s = new MySet(new MySet([1, 2, 3]));
// console.log(s.size);
// console.log("被公认为1111", s)
// console.log("被公认为", [...s.keys()])
// console.log("被公认为", [...s.values()])
// console.log("被公认为", [...s.entries()])

// var map = new myMap()
// map.set('n1', 'zwq');
// map.set('n12', 'zwq');
// console.log("被告人非", map)

// console.log("被告人非", map.get('n12'))
// map.set('name1', 'zwq');
// map.set('name2', 'zwq');
// map.set('name3', 'zwq');

// map.set('name4', 'zwq');
// map.set('name5', 'zwq');
// map.set('name6', 'zwq');

// map.set('name7', 'zwq');
// map.set('name8', 'zwq');
// map.set('name9', 'zwq');
// map.set('name00', 'zwq');
// console.log("被公认为1111", map)
// console.log("被公认为1111222", map.get('name'))
// console.log("被公认为1113333", map.has('name'))

var p = new MyProxyDefineProperty(num)
console.log("韦尔股份", p.num)
p.num = 1
p.num = 2
console.log("个废物", p.archive())