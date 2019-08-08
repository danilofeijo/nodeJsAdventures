const value = 'global'

function myFunc() {
  console.log(value);
}

function exec() {
  const value = 'Local'
  myFunc()
}

exec()