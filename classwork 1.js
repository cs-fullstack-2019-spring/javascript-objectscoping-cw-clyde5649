1. What is the result of the following code? Explain your answer.
    ```
  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  var test = obj.prop.getFullname;
  
  console.log(test());
  
  the result is of the following code.test fullname
  is going be fulltime prop get full name. aruelio de rosa
