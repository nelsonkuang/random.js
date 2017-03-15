random.js
===============
##### This is a general-purpose random data(number,char,string,array,datetime,dom,color and so on) generates library, Pull requests are welcome!
- No dependencies
- AMD, Node & browser ready

Usage:
==============================

r.number(min, max, tofixed)
----------------------------------------------
##### Generate a random float number from Number:min to Number:max, and use Integer:tofixed to control the decimal places.

```javascript
r.number();
=> -1.383273644028584e+308

r.number(100);
=> 97.1008624881506

r.number(20,80)
=> 38.68204082828015

r.number(20, 80, 2)
=> 20.51

```

r.integer(min, max)
-------------------
##### Generate a random integer number from Number:min to Number:max.

```javascript
r.integer();
=> 5062697414557695

r.integer(100);
=> 97

r.integer(20,80)
=> 52
```

r.odd(min, max)
---------------------
##### Generate a random odd number from Number:min to Number:max.

```javascript
r.odd();
=> 6402980639145983

r.odd(100);
=> 25

r.odd(20,80)
=> 73
```

r.even(min, max)
---------------------
##### Generate a random even number from Number:min to Number:max.

```javascript
r.even();
=> -3710708030111744

r.even(100);
=> 88

r.even(20,80)
=> 22
```

r.char(seeds)
-------------------
#####Generate a random char from the String:seeds.
Default seeds: "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? "

```javascript
r.char();
=> R

r.char("124578abcd-_")
=> a
```

r.lowercaseChar(from, to)
-------------------
##### Generate a random lowercase char from String:from to String:to.
Default seeds: "abcdefghijklmnopqrstuvwxyz"
```javascript
r.lowercaseChar();
=> h

r.lowercaseChar("f")
=> e

r.lowercaseChar("e","p")
=> m
```

r.uppercaseChar(from, to)
-------------------
##### Generate a random uppercase char from String:from to String:to.
Default seeds: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```javascript
r.uppercaseChar();
=> K

r.uppercaseChar("F")
=> A

r.uppercaseChar("E","P")
=> N
```

r.punctuationChar()
-------------------
##### Generate a random punctuation char.
Default seeds: "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? "
```javascript
r.punctuationChar();
=> {
```

r.charWithoutPun()
-------------------
##### Generate a random non-punctuation char.
Default seeds: "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```javascript
r.charWithoutPun();
=> K
```

r.charWithoutPuncUpper()
-------------------
##### Generate a random non-punctuation & non-uppercase char.
Default seeds: "0123456789" + "abcdefghijklmnopqrstuvwxyz"
```javascript
r.charWithoutPuncUpper();
=> k
```

r.string(strLen, seeds)
-------------------
##### Generate a random string from the String:seeds and it's length is Number:strLen.
Default seeds: "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

```javascript
r.string();
=> djfkMjfkrjf5454E2136A2654wir4YifTIIjefiejw

r.string("124578abcd-_KERTYUIOPABCD")
=> DC_4c2-PK82a-Uc

r.string(5);
=> k8M0e

r.string(5, "124578abcd-_KERTYUIOPABCD")
=> d_UK8
```

r.array(options)
-------------------
##### Generate a random array according to JSON:options, jQuery plugein like.
Default:{elementType:"string", min:0, seeds:"0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ", unique:false, toFixed:2}
```javascript
r.array({
        elementType: "int",// string / char / number / int
        arrLength: 5,//Array's length
        min: 51,
        max: 60
    })
=>[ 52, 59, 52, 60, 57 ]

r.array({
        elementType: "int",// string / char / number / int
        arrLength: 5,
        min: 51,
        max: 60,
		unique: true //generate the unique elements
    })
=>[ 52, 59, 54, 60, 57 ]

r.array({
        elementType: "string",// string / char / number / int
        arrLength: 5,//array's length
        strLength: 3,//element's length
        seeds: "4rekjfkrjfi1398",
        unique: true//generate the unique elements
    })
=>[ "j18", "rkf", "if9", "r1e", "3jj" ]

r.array({
        elementType: "number",// string / char / number / int
        arrLength: 5,//Array's length
        min: 51,
        max: 60,
		toFixed: 1//control the decimal places
    })
=>[ 52.3, 59.5, 52.6, 60.9, 57.3 ]
```

r.arrayElement(array, startPos, endPos)
---------------------
##### Get a random element from a given array,start position Integer:startPos & end postion Integer:endPos can be specified.

```javascript
r.arrayElement([1, 3, 5, 6, 7, 8, 2, 10, 333])
=> 5

r.arrayElement([1, 3, 5, 6, 7, 8, 2, 10, 333], 2)
=> 6

r.arrayElement([1, 3, 5, 6, 7, 8, 2, 10, 333], 2, 5)
=> 8
```

r.arrayOrder(array, startPos, endPos)
---------------------
##### Break the elements' order in a given array,start position Integer:startPos & end postion Integer:endPos can be specified.

```javascript
r.arrayOrder([1, 3, 5, 6, 7, 8, 2, 10, 333])
=> [5, 6, 333, 7, 10, 2, 3, 1, 8]

r.arrayOrder([1, 3, 5, 6, 7, 8, 2, 10, 333], 2)
=> [1, 3, 10, 8, 6, 333, 2, 5, 7]

r.arrayOrder([1, 3, 5, 6, 7, 8, 2, 10, 333], 2, 5)
=> [1, 3, 5, 8, 6, 7, 2, 10, 333]
```

r.date(min, max)
-------------------
##### Generate a random date(Date Object) from String:min (etc. 1998-07-01 or 1998/7/1) to String:max (etc. 2015-07-28 or 2015/07/28).

```javascript
r.date("1998-07-01", "2015-07-28")
=> Fri Jul 27 2007 00:00:00 GMT+0800
```

r.time(min, max)
-------------------
##### Generate a random time(Date Object) from Date:min (etc. new Date()) to Date:max (etc. new Date()).

```javascript
r.time(new Date(2009, 11, 10, 5, 45, 18, 999), new Date(2015, 1, 31, 5, 59, 58, 888))
=> Wed Sep 05 2012 17:32:53 GMT+0800
```

r.year(min, max)
-------------------
##### Generate a random year number from Number:min to Number:max.

```javascript
r.year();
=> 5841

r.year(1992);
=> 3000

r.year(1982,2000)
=> 1990
```

r.month(min, max)
-------------------
##### Generate a random month number from Number:min to Number:max.

```javascript
r.month();
=> 11

r.month(2);
=> 8

r.month(2,8)
=> 7
```

r.day(min, max)
-------------------
#####Generate a random day number from Number:min to Number:max.

```javascript
r.day();
=> 28

r.day(2);
=> 20

r.day(2,8)
=> 7
```

r.hours(min, max)
-------------------
##### Generate a random hours number from Number:min to Number:max.

```javascript
r.hours();
=> 23

r.hours(2);
=> 20

r.hours(2,8)
=> 7
```

r.minutes(min, max)
-------------------
##### Generate a random minutes number from Number:min to Number:max.

```javascript
r.minutes();
=> 58

r.minutes(2);
=> 8

r.minutes(2,8)
=> 6
```

random.seconds(min, max)
-------------------
##### Generate a random seconds number from Number:min to Number:max.

```javascript
r.seconds();
=> 58

r.seconds(2);
=> 8

r.seconds(2,8)
=> 6
```

r.milliseconds(min, max)
-------------------
##### Generate a r milliseconds number from Number:min to Number:max.

```javascript
r.milliseconds();
=> 998

r.milliseconds(50);
=> 100

r.milliseconds(100,999)
=> 855
```

r.color()
-------------------
##### Generate a random color(String like "#ffffff").

```javascript
r.color();
=> #a30b9c
```

r.rgbColor()
-------------------
##### Generate a random color(String like "rgb(12,255,0)").

```javascript
r.rgbColor();
=> rgb(12,255,0)
```

r.rgbaColor()
-------------------
##### Generate a random color(String like "rgbaColor(12,255,0,0.4)").

```javascript
r.rgbaColor();
=> rgba(12,255,0,0.4)
```

r.webColor()
-------------------
##### Generate a random web color(String like "#003399", "#66CCFF", "#000000", "#FFFFFF" .etc).
Web color: 256 types in total
```javascript
r.webColor();
=> #66FF00
```

r.boolean()
-------------------
##### Generate a random boolean value

```javascript
r.boolean();
=> true
```

r.pixel(min, max)
-------------------
##### Generate a random pixel value(String)

```javascript
r.pixel();
=> 5062697414557695px

r.pixel(100);
=> 97px

r.pixel(20,80)
=> 52px
```


r.percent(min, max)
-------------------
##### Generate a random percent value(String)

```javascript
r.percent();
=> 5062697414557695%

r.percent(100);
=> 97%

r.percent(20,80)
=> 52%
```

r.em(min, max, tofixed)
-------------------
##### Generate a random em value(String)

```javascript
r.em();
=> -1.383273644028584e+308em

r.em(100);
=> 97.1008624881506em

r.em(20,80)
=> 38.68204082828015em

r.em(20, 80, 2)
=> 20.51em
```

r.rem(min, max, tofixed)
-------------------
##### Generate a random em value(String)

```javascript
r.rem();
=> 1.383273644028584e+308rem

r.rem(100);
=> 97.1008624881506rem

r.rem(20,80)
=> 38.68204082828015rem

r.rem(20, 80, 2)
=> 20.51rem
```

r.degree(min, max)
-------------------
##### Generate a random degree value(String)

```javascript
r.degree();
=> 5062697414557695deg

r.degree(100);
=> 97deg

r.degree(20,80)
=> 52deg
```
r.element(options)
-------------------
##### Query a random Element(Dom) according to JSON:options, jQuery plugein like.
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
r.element({
        context: document.getElementById("wrapper")
    })
=> <input type="text" name="txt7" />

r.element({
        context: document.getElementById("wrapper"),
        elementType: "div",// * / div / span / ul / li ...(filter 1)   ("*" means all tags)
        from: 3,//pick a element from the 3rd one (filter 2)
        to: 9,//to the 9th one (filter 3)
        className: "item",//css className (filter 4)
        type: ""//button / checkbox / text / hidden / radio / text... (filter 5 - use along with 'elementType:input')
    })
=> <input type="text" name="txt4" />

r.element({
        context: document.getElementById("wrapper"),
        elementType: "div",// div / span / ul / li ...(filter 1)
    })
=> <div class="item">9</div>

r.element({
        context: document.getElementById("wrapper"),
        className: "item",//css className (filter 4)
    })
=> <div class="item">4</div>

r.element({
        context: document.getElementById("wrapper"),
        elementType: "input",// div / span / ul / li ...(filter 1)
        type: "text"//button / checkbox / text / hidden / radio / text... (filter 5 - use along with 'elementType:input')
    })
=> <input type="text" name="txt4">
```

r.childElement(options)
-------------------
##### Query a random Child Element(Dom) according to JSON:options, jQuery plugein like.
Default:{context:document, elementType:"*", from:0, to:"", className:"",type:""}
```javascript
r.childElement({
        context: document.getElementById("wrapper")
    })
=> <div class="item">4</div>

r.childElement({
        context: document.getElementById("wrapper"),
        elementType: "div",// * / div / span / ul / li ...(filter 1)    ("*" means all tags)
        from: 3,//pick a element from the 3rd one (filter 2)
        to: 9,//to the 9th one (filter 3)
        className: "item",//css className (filter 4)
        type: ""//button / checkbox / text / hidden / radio / text... (filter 5 - use along with 'elementType:input')
    })
=> <div class="item">2</div>

r.childElement({
        context: document.getElementById("wrapper"),
        elementType: "div",// div / span / ul / li ...(filter 1)
    })
=> <div class="item">9</div>

r.childElement({
        context: document.getElementById("wrapper"),
        className: "item",//css className (filter 4)
    })
=> <div class="item">4</div>
```

r.siblingElement(options)
-------------------
##### Query a random Sibling Element(Dom) according to JSON:options, jQuery plugein like.
Default:{context:document, elementType:"*", from:0, to:"", className:"",type:""}
```javascript
r.siblingElement({
        context: document.getElementById("wrapper").children[1]
    })
=> <div class="item">6</div>

r.siblingElement({
        context: document.getElementById("wrapper").children[1],
        elementType: "div",// * / div / span / ul / li ...(filter 1)   ("*" means all tags)
        from: 3,//pick a element from the 3rd one (filter 2)
        to: 9,//to the 9th one (filter 3)
        className: "item",//css className (filter 4)
        type: ""//button / checkbox / text / hidden / radio / text... (filter 5 - use along with 'elementType:input')
    })
=> <div class="item">2</div>

r.siblingElement({
        context: document.getElementById("wrapper").children[1],
        elementType: "div",// div / span / ul / li ...(filter 1)
    })
=> <div class="item">9</div>

r.siblingElement({
        context: document.getElementById("wrapper").children[1],
        className: "item",//css className (filter 4)
    })
=> <div class="item">4</div>
```


r.extend(target, source)
-------------------
##### jQuery like.
- add your own methods if needed
- copy Object:source's properties to Object:target
```javascript
    r.extend({
        hello: function (str) {
            alert(str);
        },
        hi: function (str) {
            alert(str);
        }
    });
    r.hello("Hi");
    => Hi
    r.hi("Hello");
    => Hello

	r.extend({foo:"bar",bar:"foo"},{foobar:"foobar"});
	=>{foo:"bar",bar:"foo",foobar:"foobar"}
```
