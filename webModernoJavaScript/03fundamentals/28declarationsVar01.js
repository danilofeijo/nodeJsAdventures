// Global scope
{
  {
    {
      var really = 'really?';
      console.log(really);
    }
  }
}

console.log(really);

// Function scope
function test() {
  var local = 123;
  console.log(local);
}

test();
// console.log(local); // It doesn't work
// 'local' is accessible only inside related function
