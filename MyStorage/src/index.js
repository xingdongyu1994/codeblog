import MyStorage from './main';
var m = new MyStorage();

m.set({
  key: 'keykeykey',
  value: {
    name: 1,
    age: 2,
  },
  expires: 0,
});

m.get('keykeykey');