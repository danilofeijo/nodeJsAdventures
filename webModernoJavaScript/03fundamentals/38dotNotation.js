console.log(Math.ceil(6.1));

const objFirst = {};
objFirst.name = 'Ball';
// objFirst['name'] = 'Ball';

console.log(objFirst.name);

function Obj(name) {
  this.name = name;
  this.execute = function() {
    console.log('Executing...')
  }
}

const objSecond = new Obj('Chair')
const objThird = new Obj('Table')

console.log(objSecond.name);
console.log(objThird.name);
objThird.execute();
