random.js
=====
####This is a general-purpose random data generates library, Pull requests are welcome!
- No dependencies
- AMD, Node & browser ready

####Usage:
Random data generates
===========

random.number(min, max, tofixed)
-----------------------
####Generate a random float number from Number:min to Number:max, and use Integer:tofixed to control the decimal places.

```javascript
random.number();
=> -1.383273644028584e+308

random.number(100);
=> 97.1008624881506

random.number(20,80)
=> 38.68204082828015

random.number(20, 80, 2)
=> 20.51

```

random.integer(min, max)
-------------------
####Generate a random integer number from Number:min to Number:max.

```javascript
random.integer();
=> 5062697414557695

random.integer(100);
=> 97

random.integer(20,80)
=> 52
```

random.odd(min, max)
---------------------
####Generate a random odd number from Number:min to Number:max.

```javascript
random.odd();
=> 6402980639145983

random.odd(100);
=> 25

random.odd(20,80)
=> 73
```

random.even(min, max)
---------------------
####Generate a random even number from Number:min to Number:max.

```javascript
random.even();
=> -3710708030111744

random.even(100);
=> 88

random.even(20,80)
=> 22
```

random.char(seeds)
-------------------
####Generate a random char from the String:seeds.
Default seeds: "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? "

```javascript
random.char();
=> R

random.char("124578abcd-_")
=> a
```

random.lowercaseChar(from, to)
-------------------
####Generate a random lowercase char from String:from to String:to.
Default seeds: "abcdefghijklmnopqrstuvwxyz"
```javascript
random.lowercaseChar();
=> h

random.lowercaseChar("f")
=> e

random.lowercaseChar("e","p")
=> m
```

random.uppercaseChar(from, to)
-------------------
####Generate a random uppercase char from String:from to String:to.
Default seeds: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```javascript
random.uppercaseChar();
=> K

random.uppercaseChar("F")
=> A

random.uppercaseChar("E","P")
=> N
```

random.punctuationChar()
-------------------
####Generate a random punctuation char.
Default seeds: "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? "
```javascript
random.punctuationChar();
=> {
```

random.charWithoutPun()
-------------------
####Generate a random non-punctuation char.
Default seeds: "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```javascript
random.charWithoutPun();
=> K
```

random.charWithoutPuncUpper()
-------------------
####Generate a random non-punctuation & non-uppercase char.
Default seeds: "0123456789" + "abcdefghijklmnopqrstuvwxyz"
```javascript
random.charWithoutPuncUpper();
=> k
```

random.string(strLen, seeds)
-------------------
####Generate a random string from the String:seeds and it's length is Number:strLen.
Default seeds: "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

```javascript
random.string();
=> djfkMjfkrjf5454E2136A2654wir4YifTIIjefiejw

random.string("124578abcd-_KERTYUIOPABCD")
=> DC_4c2-PK82a-Uc

random.string(5);
=> k8M0e

random.string(5, "124578abcd-_KERTYUIOPABCD")
=> d_UK8
```

random.array(options)
-------------------
####Generate a random array according to JSON:options, jQuery plugein like.
Default:{elementType:"string", min:0, seeds:"0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ", unique:false, toFixed:2}
```javascript
random.array({
        elementType: "int",// string / char / number / int
        arrLength: 5,//Array's length
        min: 51,
        max: 60
    })
=>[ 52, 59, 52, 60, 57 ]

random.array({
        elementType: "int",// string / char / number / int
        arrLength: 5,
        min: 51,
        max: 60,
		unique: true //generate the unique elements
    })
=>[ 52, 59, 54, 60, 57 ]

random.array({
        elementType: "string",// string / char / number / int
        arrLength: 5,//array's length
        strLength: 3,//element's length
        seeds: "4rekjfkrjfi1398",
        unique: true//generate the unique elements
    })
=>[ "j18", "rkf", "if9", "r1e", "3jj" ]

random.array({
        elementType: "number",// string / char / number / int
        arrLength: 5,//Array's length
        min: 51,
        max: 60,
		toFixed: 1//control the decimal places
    })
=>[ 52.3, 59.5, 52.6, 60.9, 57.3 ]
```

random.arrayElement(array, startPos, endPos)
---------------------
####Get a random element from a given array,start position Integer:startPos & end postion Integer:endPos can be specified.

```javascript
random.arrayElement([1, 3, 5, 6, 7, 8, 2, 10, 333])
=> 5

random.arrayElement([1, 3, 5, 6, 7, 8, 2, 10, 333], 2)
=> 6

random.arrayElement([1, 3, 5, 6, 7, 8, 2, 10, 333], 2, 5)
=> 8
```

random.arrayOrder(array, startPos, endPos)
---------------------
####Break the elements' order in a given array,start position Integer:startPos & end postion Integer:endPos can be specified.

```javascript
random.arrayOrder([1, 3, 5, 6, 7, 8, 2, 10, 333])
=> [5, 6, 333, 7, 10, 2, 3, 1, 8]

random.arrayOrder([1, 3, 5, 6, 7, 8, 2, 10, 333], 2)
=> [1, 3, 10, 8, 6, 333, 2, 5, 7]

random.arrayOrder([1, 3, 5, 6, 7, 8, 2, 10, 333], 2, 5)
=> [1, 3, 5, 8, 6, 7, 2, 10, 333]
```

random.date(min, max)
-------------------
####Generate a random date(Date Object) from String:min (etc. 1998-07-01 or 1998/7/1) to String:max (etc. 2015-07-28 or 2015/07/28).

```javascript
random.date("1998-07-01", "2015-07-28")
=> Fri Jul 27 2007 00:00:00 GMT+0800
```

random.time(min, max)
-------------------
####Generate a random time(Date Object) from Date:min (etc. new Date()) to Date:max (etc. new Date()).

```javascript
random.time(new Date(2009, 11, 10, 5, 45, 18, 999), new Date(2015, 1, 31, 5, 59, 58, 888))
=> Wed Sep 05 2012 17:32:53 GMT+0800
```

random.year(min, max)
-------------------
####Generate a random year number from Number:min to Number:max.

```javascript
random.year();
=> 5841

random.year(1992);
=> 3000

random.year(1982,2000)
=> 1990
```

random.month(min, max)
-------------------
####Generate a random month number from Number:min to Number:max.

```javascript
random.month();
=> 11

random.month(2);
=> 8

random.month(2,8)
=> 7
```

random.day(min, max)
-------------------
####Generate a random day number from Number:min to Number:max.

```javascript
random.day();
=> 28

random.day(2);
=> 20

random.day(2,8)
=> 7
```

random.hours(min, max)
-------------------
####Generate a random hours number from Number:min to Number:max.

```javascript
random.hours();
=> 23

random.hours(2);
=> 20

random.hours(2,8)
=> 7
```

random.minutes(min, max)
-------------------
####Generate a random minutes number from Number:min to Number:max.

```javascript
random.minutes();
=> 58

random.minutes(2);
=> 8

random.minutes(2,8)
=> 6
```

random.seconds(min, max)
-------------------
####Generate a random seconds number from Number:min to Number:max.

```javascript
random.seconds();
=> 58

random.seconds(2);
=> 8

random.seconds(2,8)
=> 6
```

random.milliseconds(min, max)
-------------------
####Generate a random milliseconds number from Number:min to Number:max.

```javascript
random.milliseconds();
=> 998

random.milliseconds(50);
=> 100

random.milliseconds(100,999)
=> 855
```

random.color()
-------------------
####Generate a random color(String like "#ffffff").

```javascript
random.color();
=> #a30b9c
```

random.rgbColor()
-------------------
####Generate a random color(String like "rgb(12,255,0)").

```javascript
random.rgbColor();
=> rgb(12,255,0)
```

random.rgbaColor()
-------------------
####Generate a random color(String like "rgbaColor(12,255,0,0.4)").

```javascript
random.rgbaColor();
=> rgba(12,255,0,0.4)
```

random.webColor()
-------------------
####Generate a random web color(String like "#003399", "#66CCFF", "#000000", "#FFFFFF" .etc).
Web color: 256 types in total
```javascript
random.webColor();
=> #66FF00
```

random.boolean()
-------------------
####Generate a random boolean value

```javascript
random.boolean();
=> true
```

random.pixel(min, max)
-------------------
####Generate a random pixel value(String)

```javascript
random.pixel();
=> 5062697414557695px

random.pixel(100);
=> 97px

random.pixel(20,80)
=> 52px
```


random.percent(min, max)
-------------------
####Generate a random percent value(String)

```javascript
random.percent();
=> 5062697414557695%

random.percent(100);
=> 97%

random.percent(20,80)
=> 52%
```

random.em(min, max, tofixed)
-------------------
####Generate a random em value(String)

```javascript
random.em();
=> -1.383273644028584e+308em

random.em(100);
=> 97.1008624881506em

random.em(20,80)
=> 38.68204082828015em

random.em(20, 80, 2)
=> 20.51em
```

random.rem(min, max, tofixed)
-------------------
####Generate a random em value(String)

```javascript
random.rem();
=> 1.383273644028584e+308rem

random.rem(100);
=> 97.1008624881506rem

random.rem(20,80)
=> 38.68204082828015rem

random.rem(20, 80, 2)
=> 20.51rem
```

random.degree(min, max)
-------------------
####Generate a random degree value(String)

```javascript
random.degree();
=> 5062697414557695deg

random.degree(100);
=> 97deg

random.degree(20,80)
=> 52deg
```
random.element(options)
-------------------
####Query a random Element(Dom) according to JSON:options, jQuery plugein like.
Default:{context:document, elementType:"*", from:0, to:"", className:"",type:""}
```html
    <div id="wrapper">
        <div class="item">1</div>
        <div class ="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">
            <input type="text" name="txt1" />
            <input type="text" name="txt2" />
            <input type="text" name="txt3" />
            <input type="text" name="txt4" />
            <input type="text" name="txt5" />
            <input type="text" name="txt6" />
            <input type="text" name="txt7" />
            <input type="text" name="txt8" />
        </div>
    </div>
```
```javascript
random.element({
        context: document.getElementById("wrapper")
    })
=> <input type="text" name="txt7" />

random.element({
        context: document.getElementById("wrapper"),
        elementType: "div",// * / div / span / ul / li ...(filter 1)   ("*" means all tags)
        from: 3,//pick a element from the 3rd one (filter 2)
        to: 9,//to the 9th one (filter 3)
        className: "item",//css className (filter 4)
        type: ""//button / checkbox / text / hidden / radio / text... (filter 5 - use along with 'elementType:input')
    })
=> <input type="text" name="txt4" />

random.element({
        context: document.getElementById("wrapper"),
        elementType: "div",// div / span / ul / li ...(filter 1)
    })
=> <div class="item">9</div>

random.element({
        context: document.getElementById("wrapper"),
        className: "item",//css className (filter 4)
    })
=> <div class="item">4</div>

random.element({
        context: document.getElementById("wrapper"),
        elementType: "input",// div / span / ul / li ...(filter 1)
        type: "text"//button / checkbox / text / hidden / radio / text... (filter 5 - use along with 'elementType:input')
    })
=> <input type="text" name="txt4">
```

random.childElement(options)
-------------------
####Query a random Child Element(Dom) according to JSON:options, jQuery plugein like.
Default:{context:document, elementType:"*", from:0, to:"", className:"",type:""}
```javascript
random.childElement({
        context: document.getElementById("wrapper")
    })
=> <div class="item">4</div>

random.childElement({
        context: document.getElementById("wrapper"),
        elementType: "div",// * / div / span / ul / li ...(filter 1)    ("*" means all tags)
        from: 3,//pick a element from the 3rd one (filter 2)
        to: 9,//to the 9th one (filter 3)
        className: "item",//css className (filter 4)
        type: ""//button / checkbox / text / hidden / radio / text... (filter 5 - use along with 'elementType:input')
    })
=> <div class="item">2</div>

random.childElement({
        context: document.getElementById("wrapper"),
        elementType: "div",// div / span / ul / li ...(filter 1)
    })
=> <div class="item">9</div>

random.childElement({
        context: document.getElementById("wrapper"),
        className: "item",//css className (filter 4)
    })
=> <div class="item">4</div>
```

random.siblingElement(options)
-------------------
####Query a random Sibling Element(Dom) according to JSON:options, jQuery plugein like.
Default:{context:document, elementType:"*", from:0, to:"", className:"",type:""}
```javascript
random.siblingElement({
        context: document.getElementById("wrapper").children[1]
    })
=> <div class="item">6</div>

random.siblingElement({
        context: document.getElementById("wrapper").children[1],
        elementType: "div",// * / div / span / ul / li ...(filter 1)   ("*" means all tags)
        from: 3,//pick a element from the 3rd one (filter 2)
        to: 9,//to the 9th one (filter 3)
        className: "item",//css className (filter 4)
        type: ""//button / checkbox / text / hidden / radio / text... (filter 5 - use along with 'elementType:input')
    })
=> <div class="item">2</div>

random.siblingElement({
        context: document.getElementById("wrapper").children[1],
        elementType: "div",// div / span / ul / li ...(filter 1)
    })
=> <div class="item">9</div>

random.siblingElement({
        context: document.getElementById("wrapper").children[1],
        className: "item",//css className (filter 4)
    })
=> <div class="item">4</div>
```


random.extend(target, source)
-------------------
####jQuery like.
- add your own methods if needed
- copy Object:source's properties to Object:target
```javascript
    random.extend({
        hello: function (str) {
            alert(str);
        },
        hi: function (str) {
            alert(str);
        }
    });
    random.hello("Hi");
    => Hi
    random.hi("Hello");
    => Hello

	random.extend({foo:"bar",bar:"foo"},{foobar:"foobar"});
	=>{foo:"bar",bar:"foo",foobar:"foobar"}
```
