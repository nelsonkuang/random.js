(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.r = factory();
    }

}(this, function () {
    // Baseline
    /* -------------------------------------------------------------------------- */

    var root = this || global;
    var previousR = root.r;

    // define 'r' object and current version
    r = {};
    r.VERSION = '0.2.1';

    // cache some variables to call later on
    var maxNumber = Number.MAX_VALUE,
        maxInteger = 9007199254740991,
        minInteger = -9007199254740991,
        numberChars = '0123456789',
        lowercaseChars = 'abcdefghijklmnopqrstuvwxyz',
        uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        punctuationChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ",
        charsWithoutPunctuation = numberChars + lowercaseChars + uppercaseChars,
        charsWithoutPuncUpper = numberChars + lowercaseChars,
        allChars = numberChars + lowercaseChars + uppercaseChars + punctuationChars;


    // cache some methods to call later on
    var mathRandom = Math.random,
        mathFloor = Math.floor,
        mathAbs = Math.abs,
        mathPow = Math.pow,
        parseInt = Number.parseInt,
        toString = Object.prototype.toString;
        toFixed = Number.prototype.toFixed;

    // Number generates
    /* -------------------------------------------------------------------------- */
    // want a random Number(float)?
    r.number = function (min, max, tofixed) {
        var len = arguments.length,
            ran = mathRandom();
        if (len == 0) {
            min = maxNumber * (-1);
            max = maxNumber;
        }
        else if (len == 1) {
            max = arguments[0] > 0 ? arguments[0] : 0;
            min = arguments[0] < 0 ? arguments[0] : 0;
        }
        return tofixed ? toFixed.call((min * (1 - ran) + max * ran), tofixed) : (min * (1 - ran) + max * ran);//min + (max - min)*ran
    };
    // want a r Integer?
    r.integer = function (min, max) {
        var len = arguments.length,
            ran = mathRandom();
        if (len == 0) {
            min = minInteger;
            max = maxInteger;
        }
        else if (len == 1) {
            max = arguments[0] > 0 ? arguments[0] + 1 : 1;
            min = arguments[0] < 0 ? arguments[0] : 0;
        }
        else {
            max++;
        }
        return mathFloor(min * (1 - ran) + max * ran);//min + (max - min)*ran
    };
    // want a random odd?
    r.odd = function (min, max) {
        var result;
        while (result % 2 != 1 && result % 2 != -1) {
            result = r.integer.apply(this, arguments);
        }
        return result;
    };
    // want a random Even?
    r.even = function (min, max) {
        var result;
        while (result % 2 != 0 ) {
            result = r.integer.apply(this, arguments);
        }
        return result;
    };

    // Char & String generate
    /* -------------------------------------------------------------------------- */
    // want a random Char?
    r.char = function (seeds) {
        var sLen = 0;
        if (typeof (seeds) == 'string' && (sLen = seeds.length) > 1)
            return seeds.charAt(r.integer(sLen - 1));
        else
            return allChars.charAt(r.integer(allChars.length - 1));
    };
    // want a random Lowercase Char?
    r.lowercaseChar = function (from, to) {
        var startPos = 0,
            endPos = lowercaseChars.length - 1;
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                var p = lowercaseChars.indexOf(arguments[0]);
                if (p > 0) {
                    endPos = p;
                }
                break;
            default:
                var sp = lowercaseChars.indexOf(arguments[0]),
                    ep = lowercaseChars.indexOf(arguments[1]);
                if (ep > sp && sp > -1) {
                    startPos = sp;
                    endPos = ep;
                }
        }
        return lowercaseChars.charAt(r.integer(startPos, endPos));
    };
    // want a random Uppercase Char?
    r.uppercaseChar = function (from, to) {
        var startPos = 0,
            endPos = uppercaseChars.length - 1;
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                var p = uppercaseChars.indexOf(arguments[0]);
                if (p > 0) {
                    endPos = p;
                }
                break;
            default:
                var sp = uppercaseChars.indexOf(arguments[0]),
                    ep = uppercaseChars.indexOf(arguments[1]);
                if (ep > sp && sp > -1) {
                    startPos = sp;
                    endPos = ep;
                }
        }
        return uppercaseChars.charAt(r.integer(startPos, endPos));
    };
    // want a random Punctuation Char?
    r.punctuationChar = function () {
        return punctuationChars.charAt(r.integer(punctuationChars.length - 1));
    };
    // want a random Char without Punctuation?
    r.charWithoutPun = function () {
        return charsWithoutPunctuation.charAt(r.integer(charsWithoutPunctuation.length - 1));
    };
    // want a random Char without Punctuation and Uppercase?
    r.charWithoutPuncUpper = function () {
        return charsWithoutPuncUpper.charAt(r.integer(charsWithoutPuncUpper.length - 1));
    };
    // want a random String?
    r.string = function (strLen, seeds) {
        var str = '';
        switch (arguments.length) {
            case 0:
                strLen = r.integer(2, 62);
                seeds = charsWithoutPunctuation;
                break;
            case 1:
                var argType;
                if ((argType = typeof (arguments[0])) == 'number' && arguments[0] > 1) {
                    seeds = charsWithoutPunctuation;
                }
                else if (argType == 'string' && arguments[0].length > 1) {
                    seeds = arguments[0];
                    strLen = r.integer(2, 62);
                }
                else {
                    strLen = r.integer(2, 62);
                    seeds = charsWithoutPunctuation;
                }
                break;
            case 2:
                var arg1 = arguments[0], arg2 = arguments[1];
                if (typeof (arguments[0]) == 'number' && arg1 > 1) {
                    strLen = arguments[0];
                } else {
                    strLen = r.integer(2, 62);
                }
                if (typeof (arguments[1]) == 'string' && arg2.length > 1) {
                    seeds = arguments[1];
                } else {
                    seeds = charsWithoutPunctuation;
                }
                break
            default:
                strLen = r.integer(2, 62);
                seeds = charsWithoutPunctuation;
        }
        for (var i = 0; i < strLen; i++) {
            str += r.char(seeds);
        }
        return str;
    };

    // want a new random order string from an string?
    r.stringOrder = function (str) {
        if (str !== '') {
            return r.arrayOrder(str.split('')).join('');
        } else {
            return '';
        }
    }

    // Array generates
    /* -------------------------------------------------------------------------- */
    // want a random Array?
    r.array = function (options) {
        var defaults = {
            elementType: 'string',// string / char / number / int
            arrLength: r.integer(2, 62),
            min: 0,
            max: maxInteger,
            strLength: r.integer(2, 62),
            seeds: charsWithoutPunctuation,//please try to use strict seeds( seed-uinque && long-enough) ,or there may be a dead loop :)
            unique: false,
            toFixed:2
        },
        arrResult = [];
        if (options.min && options.min > options.max) { var tem = options.max; options.max = options.min; options.min = tem; }//input wrong args? swap them
        options = r.extend(defaults, options);
        switch (options.elementType) {
            case 'string':
                if (!options.unique) {
                    for (var i = 0; i < options.arrLength; i++) {
                        arrResult.push(r.string(options.strLength, options.seeds));
                    }
                } else {
                    for (var i = 0; i < options.arrLength; i++) {
                        var str,
                            done = false;
                        while (!done) {//IE7 not supported
                            if (arrResult.indexOf(str = r.string(options.strLength, options.seeds)) == -1) {
                                arrResult.push(str);
                                done = true;
                            }
                        }
                    }
                }
                break;
            case 'char':
                if (!options.unique) {
                    for (var i = 0; i < options.arrLength; i++) {
                        arrResult.push(r.char(options.seeds));
                    }
                } else {
                    var seeds = options.seeds;
                    for (var i = 0; i < options.arrLength; i++) {
                        var done = false;
                        while (!done) {
                            var chr = r.char(seeds);
                            if (arrResult.indexOf(chr) == -1) {//IE7 not supported
                                arrResult.push(chr);
                                done = true;
                            }
                            else {
                                seeds = seeds.split(chr).join('');
                            }
                        }
                    }
                }
                break;
            case 'number':
                if (!options.unique) {
                    for (var i = 0; i < options.arrLength; i++) {
                        arrResult.push(r.number(options.min, options.max, options.toFixed));
                    }
                } else {
                    for (var i = 0; i < options.arrLength; i++) {
                        var done = false;
                        while (!done) {
                            var n = r.number(options.min, options.max, options.toFixed);
                            if (arrResult.indexOf(n) == -1) {//IE7 not supported
                                arrResult.push(n);
                                done = true;
                            }
                        }
                    }
                }
                break;
            case 'int':
                if (!options.unique) {
                    for (var i = 0; i < options.arrLength; i++) {
                        arrResult.push(r.integer(options.min, options.max));
                    }
                } else {
                    var gap;
                    if ((gap = options.max - options.min + 1) < options.arrLength) {
                        console.log('Error! Please check your args, arrLength > (max - min +1) ?');
                        return;
                    } else if (gap < options.arrLength * 2) {
                        var tempArr = [];
                        for (var i = options.min; i <= options.max; i++) {
                            tempArr.push(i);
                        }
                        tempArr = r.arrayOrder(tempArr);
                        for (var i = 0; i < options.arrLength; i++) {
                            arrResult[i] = tempArr[i];
                        }
                    }
                    else {
                        for (var i = 0; i < options.arrLength; i++) {
                            var done = false;//poor performance!
                            while (!done) {
                                var n = r.integer(options.min, options.max);
                                if (arrResult.indexOf(n) == -1) {//IE7 not supported
                                    arrResult.push(n);
                                    done = true;
                                }
                            }
                        }
                    }
                }
                break;
            default:
                for (var i = 0; i < options.arrLength; i++) {
                    arrResult.push(r.string(options.strLength, options.seeds));
                }
                console.log('Ok, I will give you a string array - -!');
        }
        return arrResult;
    };
    // want a random Element from an Array?
    r.arrayElement = function (array, startPos, endPos) {
        var argsLen = arguments.length;
        if (argsLen == 0) {
            return;
        } else if (argsLen == 1 && toString.call(arguments[0]) == '[object Array]' && array.length > 1) {
            startPos = 0;
            endPos = array.length - 1;
        } else if (argsLen == 2 && toString.call(arguments[0]) == '[object Array]' && array.length > 1) {
            if (typeof (arguments[1]) == 'number' && 0 <= startPos && startPos < array.length) {
                endPos = array.length - 1;
            }
            else {
                startPos = 0;
                endPos = array.length - 1;
            }
        } else {
            if (toString.call(arguments[0]) == '[object Array]' && array.length > 1) {
                if (typeof (arguments[1]) != 'number' || 0 > startPos || startPos > (array.length-1)) {
                    startPos = 0;
                }
                if (typeof (arguments[2]) != 'number' || 0 > endPos || endPos > (array.length-1)) {
                    endPos = array.length - 1;
                }
                if (startPos > endPos) { var tem = endPos; endPos = startPos; startPos = tem; }
            }
            else
                return array;
        }
        return array[r.integer(startPos, endPos)];
    };
    // want a new random order array from an Array?
    r.arrayOrder = function (array, startPos, endPos) { // use strict :(
        var argsLen = arguments.length;
        if (argsLen == 0) { return array; }
        else if (argsLen == 1) {
            startPos = 0;
            endPos = array.length - 1;
        }
        else if (argsLen == 2) {
            endPos = array.length - 1;
        }
        for (var i = startPos; i <= endPos; i++) {
            var temp = array[i],
                ran = r.integer(startPos, endPos);
            array[i] = array[ran];
            array[ran] = temp;
        }
        return array;
    };

    // Date & Time generate
    /* -------------------------------------------------------------------------- */
    // want a random Year?
    r.year = function (min, max) {
        switch (arguments.length) {
            case 0:
                min = 0;
                max = 9999;
                break;
            case 1:
                max = 9999;
                break;
            default:
                ;
        }
        return r.integer(min, max);
    };
    // want a random Month?
    r.month = function (min, max) {
        switch (arguments.length) {
            case 0:
                min = 1;
                max = 12;
                break;
            case 1:
                max = 12;
                break;
            default:
                ;
        }
        return r.integer(min, max);
    };
    // want a random Day?
    r.day = function (min, max) {
        switch (arguments.length) {
            case 0:
                min = 1;
                max = 31;
                break;
            case 1:
                max = 31;
                break;
            default:
                ;
        }
        return r.integer(min, max);
    };
    // want a random Hours?
    r.hours = function (min, max) {
        switch (arguments.length) {
            case 0:
                min = 0;
                max = 23;
                break;
            case 1:
                max = 23;
                break;
            default:
                ;
        }
        return r.integer(min, max);
    };
    // want a random Minutes?
    r.minutes = function (min, max) {
        switch (arguments.length) {
            case 0:
                min = 0;
                max = 59;
                break;
            case 1:
                max = 59;
                break;
            default:
                ;
        }
        return r.integer(min, max);
    };
    // want a random Seconds?
    r.seconds = function (min, max) {
        r.minutes.apply(this, arguments);
    };
    // want a random Milliseconds?
    r.milliseconds = function (min, max) {
        switch (arguments.length) {
            case 0:
                min = 0;
                max = 999;
                break;
            case 1:
                max = 999;
                break;
            default:
                ;
        }
        return r.integer(min, max);
    };
    // want a random Date?
    r.date = function (min, max) {
        var minDate = new Date(0, 0, 1),
            maxDate = new Date(9999, 11, 31),
            diffDays;
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                var arrMin = min.indexOf('-') > -1 ? min.split('-') : min.split('/');
                minDate.setFullYear(parseInt(arrMin[0]));
                minDate.setMonth(parseInt(arrMin[1]));
                minDate.setDate(parseInt(arrMin[2]));
                break;
            default:
                var arrMin = min.indexOf('-') > -1 ? min.split('-') : min.split('/'),
                    arrMax = max.indexOf('-') > -1 ? max.split('-') : max.split('/');
                minDate.setFullYear(parseInt(arrMin[0]));
                minDate.setMonth(parseInt(arrMin[1]) - 1);
                minDate.setDate(parseInt(arrMin[2]));
                maxDate.setFullYear(parseInt(arrMax[0]));
                maxDate.setMonth(parseInt(arrMax[1]) - 1);
                maxDate.setDate(parseInt(arrMax[2]));
        }
        var tempDate = minDate;
        diffDays = parseInt(mathAbs(maxDate - minDate) / 1000 / 60 / 60 / 24);
        return new Date(tempDate.setDate(minDate.getDate() + r.integer(diffDays)));

    };
    // want a random Time?
    r.time = function (min, max) {
        var minTime = new Date(0, 0, 1, 0, 0, 0, 0),
            maxTime = new Date(9999, 11, 31, 23, 59, 59, 999),
            diffMillisecond;
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                minTime = min;
                break;
            default:
                minTime = min;
                maxTime = max;
        }
        var tempTime = new Date(minTime.getTime());
        diffMillisecond = parseInt(mathAbs(maxTime - minTime));
        return new Date(tempTime.setTime(minTime.getTime() + r.integer(diffMillisecond)));

    };

    // Color generate
    /* -------------------------------------------------------------------------- */
    // want a random Color?
    r.color = function () {
        return '#' + ('00000' + r.integer(mathPow(16, 6) - 1).toString(16)).substr(-6);
    };
    // want a random Rbg Color?
    r.rgbColor = function () {
        return 'rgb(' + r.integer(255) + ',' + r.integer(255) + ',' + r.integer(255) + ')';
    };
    // want a random Rbga Color?
    r.rgbaColor = function () {
        return 'rbga(' + r.integer(255) + ',' + r.integer(255) + ',' + r.integer(255) + ',' + mathRandom().toFixed(1) + ')';
    };
    // want a random Web Color(256 types in total)?
    r.webColor = function () {
        var arr = ['','',''],
            seeds = '0369CF';
        return '#' + arr.join(r.char(seeds)) + arr.join(r.char(seeds)) + arr.join(r.char(seeds));
    };
    // Others generate
    /* -------------------------------------------------------------------------- */
    // want a random Boolean?
    r.boolean = function () {
        return mathRandom() > 0.5;
    };
    // want a random Pixel?
    r.pixel = function (min, max) {
        return r.integer.apply(this, arguments) + 'px';
    };
    // want a random Percent?
    r.percent = function (min, max) {
        return r.integer.apply(this, arguments) + '%';
    };
    // want a random Em?
    r.em = function (min, max, tofixed) {
        return r.number.apply(this, arguments) + 'em';
    };
    // want a random Rem?
    r.rem = function (min, max, tofixed) {
        return r.number.apply(this, arguments) + 'rem';
    };
    // want a random Degree?
    r.degree = function (min, max) {
        return r.integer.apply(this, arguments) + 'deg';
    };

    // Environment checks
    /* -------------------------------------------------------------------------- */
    // check if library is used as a Node.js module
    if (typeof window !== 'undefined') {
        // Dom generates
        /* -------------------------------------------------------------------------- */    
        // want a random Element?
        r.element = function (options) {
            var defaults = {
                context: document,
                elementType: '*',// div / span / ul / li ...
                from: 0,
                to: '',
                className: '',
                type: ''//button / checkbox / text / hidden / radio / text...
            },
                resultArr = [];
            options = r.extend(defaults, options);
            if (toString.call(options.context) !== '[object HTMLCollection]') {
                resultArr = options.context.getElementsByTagName(options.elementType);

            } else {
                for (var n in options.context) {
                    if(options.context[n].getElementsByTagName)
                        push.call(resultArr, options.context[n].getElementsByTagName(options.elementType));
                }
            }

            if (options.elementType == 'input' && options.type != '') {
                var tempArr = [];
                for (var n in resultArr) {
                    if (resultArr[n].type && resultArr[n].type == options.type) {
                        push.call(tempArr, resultArr[n]);
                    }
                }
                resultArr = tempArr;
            }
            if (options.className != '') {
                var tempArr = [];
                if (options.context.getElementsByClassName) {
                    tempArr = options.context.getElementsByClassName(options.className);
                } else {
                    for (var n in resultArr) {
                        if (resultArr[n].className && (' '+resultArr[n].className+' ').indexOf(' '+options.className+' ') != -1) {
                            push.call(tempArr, resultArr[n]);
                        }
                    }
                }
                resultArr = tempArr;
            }
            options.to = options.to == '' ? resultArr.length - 1 : (options.to > resultArr.length - 1 ? resultArr.length - 1 : options.to);
            if (options.from > options.to) {
                var temp = options.from; options.from = options.to; options.to = temp;
            } else if (options.from < 0) { options.from = 0; }
            return resultArr[r.integer(options.from, options.to)];
        };
        // want a random Child Element?
        r.childElement = function (options) {
            var defaults = {
                context: document,
                elementType: '*',// div / span / ul / li ...
                from: 0,
                to: '',
                className: '',
                type: ''//button / checkbox / text / hidden / radio / text...
            },
                resultArr = [];
            options = r.extend(defaults, options);
            if (toString.call(options.context) !== '[object HTMLCollection]') {
                resultArr = options.context.children;

            } else {
                for (var n in options.context) {
                    if(options.context[n].children)
                        push.call(resultArr, options.context[n].children);
                }
            }
            if (options.elementType != '*') {
                var tempArr = [],
                    tagType = options.type.toUpperCase();
                for (var n in resultArr) {
                    if (resultArr[n].tagName && resultArr[n].tagName == tagType) {
                        push.call(tempArr, resultArr[n]);
                    }
                }
                resultArr = tempArr;
            }
            if (options.elementType == 'input' && options.type != '') {
                var tempArr = [];
                for (var n in resultArr) {
                    if (resultArr[n].type && resultArr[n].type == options.type) {
                        push.call(tempArr, resultArr[n]);
                    }
                }
                resultArr = tempArr;
            }
            if (options.className != '') {
                var tempArr = [];
                if (options.context.getElementsByClassName) {
                    tempArr = options.context.getElementsByClassName(options.className);
                } else {
                    for (var n in resultArr) {
                        if (resultArr[n].className && (' '+resultArr[n].className+' ').indexOf(' '+options.className+' ') != -1) {
                            push.call(tempArr, resultArr[n]);
                        }
                    }
                }
                resultArr = tempArr;
            }
            options.to = options.to == '' ? resultArr.length - 1 : (options.to > resultArr.length - 1 ? resultArr.length - 1 : options.to);
            if (options.from > options.to) {
                var temp = options.from; options.from = options.to; options.to = temp;
            } else if (options.from < 0) { options.from = 0; }
            return resultArr[r.integer(options.from, options.to)];
        };
        // want a random Sibling Element?
        r.siblingElement = function (options) {
            var defaults = {
                context: '',
                elementType: '*',// div / span / ul / li ...
                from: 0,
                to: '',
                className: '',
                type: ''//button / checkbox / text / hidden / radio / text...
            },
            resultElem,
            tempElem = options.contex,
            options = r.extend(defaults, options);
            if (toString.call(options.context) !== '[object HTMLCollection]') {
                options.context = options.context.parentElement;
                while (true) {
                    resultElem = r.childElement(options);
                    if (resultElem != tempElem) {
                        return resultElem;
                    }
                }
            }          
        }
    }

    // Configuration methods
    // Intentionally added
    /* -------------------------------------------------------------------------- */

    // add your own methods if needed, jQuery like.
    /**
    r.extend({
        hello: function (str) {
            alert(str);
        },
        hi: function (str) {
            alert(str);
        }
    });
    r.hello('Hi');
    r.hi('Hello');
    **/
    // => Hi
    // => Hello
    r.extend = function (target, source) {
        var length = arguments.length;
        if (length == 1) {
            source = arguments[0];
            target = this;
        }
        for (var p in source) {
            if (source.hasOwnProperty(p)) {
                target[p] = source[p];
            }
        }
        return target;
    };

    // change namespace of library to prevent name collisions
    // var preferredName = random.setNamespace();
    // preferredName.odd(0,4);
    // => 1 or 3
    r.setNamespace = function () {
        root.r = previousR;
        return this;
    };

    return r;
}));
