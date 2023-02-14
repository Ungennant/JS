function autoCompleteText(){
    var elements = document.querySelectorAll('ul.Menu>li');
        for(var i = 0; i<elements.length; i++){
                var addElements = elements[i];
                addElements.innerHTML = 'MENU ITEM';
        };
};

function getMenuTotal(){
    var elements = document.querySelectorAll('ul.Menu>li');
    console.log(elements.length);
    var element = document.getElementById('total');
        element.innerHTML = 'Total items: ' + elements.length;
};

function makeColored(){
    var coll = document.querySelectorAll('a');
      for (var i = 0; i<coll.length; i++) {
        if ((coll[i].matches("a[href*='http://']") || coll[i].matches("a[href*='ftp://']")) && !(coll[i].matches('a[href*="http://internal.com"]'))) {
          coll[i].classList.add('external-red');
       };
      };
    }

