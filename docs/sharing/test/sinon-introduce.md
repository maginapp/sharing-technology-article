# sinon.js基础使用教程---单元测试

<quote-info title="sinon.js基础使用教程---单元测试" plat="掘金" author="玉" link="https://juejin.cn/post/6844903625760718855" />


原文地址：[www.sitepoint.com/sinon-tutor…](https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/)  

## 译文

当我们写单元测试时一个最大的绊脚石是当你面对的代码过于复杂。

在真实的项目中，我们的代码经常要做各种导致我们测试很难进行的事情。Ajax请求，timer，日期，跨浏览器特性…或者如果你使用Nodejs，则面对数据库，网络，文件操作等。

所有这些事情之所以不容易测试是因为你无法轻易用代码控制它们。如果你使用Ajax，你需要一个服务端来响应请求，这样才能让你的测试项通过。如果你使用`setTimeout`，你的测试项不得不等待它。如果是数据库或网络，也类似–你需要一个包含正确数据的数据库，或一个网络服务。

真实世界不像那些测试教程里看起来的那样简单。但你知道有一个解决方案么？

**By using Sinon, we can make testing non-trivial code trivial\!** （译者：这个口号不太好翻译，non-trivial）

让我们看看该怎么做。

### 是什么让Sinon如此重要？

简单的说，[Sinon](http://sinonjs.org/)允许你去替换代码中复杂的部分，以此来简化你的测试代码。

当我们测试某部分代码时，你不希望受到其它部分的影响。如果有外部因素影响测试，那么测试项将变得非常复杂且不稳定。

如果你想测试一个使用了ajax的代码，你该怎么做？你需要跑一个服务端，并保证该服务端返回指定的响应数据来支撑你的测试项。这很难完成也让运行测试很麻烦。

那如果你的代码依赖时间呢？假如它需要等待一秒钟才执行。怎么办？你需要在你的测试项中使用`setTimeout`，但这会让测试变得缓慢。想像一下，如果间隔时间很久，例如五分钟。我想你不会希望每次跑测试项都等待五分钟吧。

如果使用Sinon，我们可以搞定这些问题（甚至更多），并减少复杂度。

### Sinon是怎么工作的？

Sinon通过允许我们简单的创建`test-doubles`从而帮助我们减少测试项编写的复杂度。

正如它名字一样，Test-doubles作用是在测试中替换某部分代码。上面提到的ajax的例子中，不需要创建服务端，我们可以使用`test-doubles`替换掉Ajax调用。在timer例子中，我们可以使用`test-doubles`来控制时间。

听起来可能很复杂，但基本思想很简单。基于javascript的动态性，我们可以替换任何函数。Test-doubles只是在这个思想的基础上走的更远了一些。使用Sinon，我们可以使用test-doubles替换任何javascript函数，并提供很多方便测试的配置。

Sinon中`test-doubles`分三类：

- [Spies](http://sinonjs.org/docs/#spies)，提供了函数调用的信息，但不会改变其行为（译者注：类似动态代理）
- [Stubs](http://sinonjs.org/docs/#stubs)，类似Spies，但是是完全替换目标函数。这可以让你随心所欲的控制函数–抛异常，返回指定结果等
- [Mocks](http://sinonjs.org/docs/#mocks)，提供了替换整个对象的能力

此外，Sinon还提供了其他的辅助功能，本文不包含下面的范围：

- [Fake timers](http://sinonjs.org/docs/#clock)，用来控制时间，例如触发一个`setTimeout`
- [Fake XMLHttpResquest and server](http://sinonjs.org/docs/#server)，可以用来伪造Ajax请求和响应

基于这些功能，Sinon可以让你解决测试中遇到的由外部依赖带来的所有复杂问题。如果你学会了Sinon提供的这些技巧，你几乎不需要其它别的工具了。

### 安装Sinon

开始之前，我们需要安装Sinon

#### Nodejs

1.  使用`npm install sinon`安装sinon
2.  在测试项中引入sinon：`var sinon = require('sinon');`

#### 浏览器

1.  你可以选择`npm install sinon`，或使用[CDN](https://cdnjs.com/libraries/sinon.js)，也可以从[官网](http://sinonjs.org/download/)下载到本地
2.  在你的测试页面引入`sinon.js`

### 入门指南

sinon包含许多功能，但它们多数都存在关系。你只需要掌握一部分，就会了解剩余部分。这让sinon很容易使用，只需要你了解了基本用法并知道它们之间的差别。

只要我们的代码调用了一个不容易控制的函数，我们通常就需要sinon。

对于Ajax，它可能是`$.get`或者`XMLHttpResquest`。对于timer，它可能是`setTimeout`。对于数据库，它可能是`mongodb.findOne`。

为了方便我们讨论，后面我将成这类函数为依赖方。我们测试的目标函数依赖其它函数的返回结果。

最常见的使用sinon方式是**使用test-doubles替换掉问题依赖方**。

- 当测试Ajax时，我们使用`test-doubles`替换`XMLHttpResquest`来伪造ajax请求
- 当测试timer时，我们伪造替换`setTimeout`
- 当测试数据库时，我们使用`test-doubles`来替换`mongodb.findOne`来直接返回伪造数据

让我们写点代码吧。

### Spies

Spies很简单，但其它很多功能依赖它。

spies的主要用法是收集函数的调用信息。你可以用来验证一些事儿，例如函数是否被调用。


```js
var spy = sinon.spy();

//我们可以像调用函数一样调用spy
spy('Hello', 'World');

//我们可以得到调用信息
console.log(spy.firstCall.args); //output: ['Hello', 'World']
```

`sinon.spy`函数返回一个`Spy`对象，该对象可以像函数一样被调用，它记录每次被调用信息。在上面的例子里，`firstCall`属性包含了第一次调用的信息，例如`firstCall.args`表示调用时的参数列表。

虽然你可以像上面例子那样创建一个匿名spies，但通常情况下你需要使用`spy`替换一个其它函数。

```js
var user = {
  ...
  setName: function(name){
    this.name = name;
  }
}

//为user.setName创建一个spy
var setNameSpy = sinon.spy(user, 'setName');

//现在，每次调用目标函数，spy都会记录相关信息
user.setName('Darth Vader');

//我们可以使用spy对象查看相关信息
console.log(setNameSpy.callCount); //output: 1

//非常重要的步骤--拆除spy
setNameSpy.restore();
```

上面例子展示了使用spy替换其它函数的写法，最重要的一点是：当你确定不再需要spy后，你记得恢复原始函数，参考例子中的最后一行。不然测试可能出现非预期行为。

Spies包含许多不同的属性，用来提供不同的信息。[spy文档](http://sinonjs.org/docs/#spies-api)列出了完整的属性列表。

在实际场景中，你可能不会经常使用spies。你更多时候使用的是stub，但是spies用来检测函数是否被调用非常方便：

```js
function myFunction(condition, callback){
  if(condition){
    callback();
  }
}

describe('myFunction', function() {
  it('should call the callback function', function() {
    var callback = sinon.spy();

    myFunction(true, callback);

    assert(callback.calledOnce);
  });
});
```

在这个例子中，我们使用[Mocha](https://mochajs.org/)作为测试框架，使用[Chai](http://chaijs.com/)作为断言库。如果你想了解更多信息，可以参考我之前的文章：[使用Mocha和Chai来单元测试你的javascript](http://www.sitepoint.com/unit-test-javascript-mocha-chai/)。

See the Pen [Sinon Tutorial: JavaScript Testing with Mocks, Spies \& Stubs](http://codepen.io/SitePoint/pen/XdbYzb/)

### sinons断言

在我们介绍stubs之前，我们快速看一下[sinon断言](http://sinonjs.org/docs/#assertions)。

大多数使用spies（和stubs）的测试方案中，你需要一些工具来校验测试结论。

我们可以使用任何断言来验证结论。前面的例子中，我们使用Chai的`assert`函数来验证值的真实性。

```js
assert(callback.calledOnce);
```

这样做的问题是错误信息并不清晰。你将得到“false was not true”，或类似信息。你可以想象的到，这对于定位错误并不是很有价值，你需要在测试代码中翻找才能最终找到。一点都不美。

解决这个问题，我们可恶意包含一个自定义的错误信息在断言中。

```js
assert(callback.calledOnce, 'Callback was not called once');
```

但如果我们使用sinon的断言库呢？

```js
describe('myFunction', function() {
  it('should call the callback function', function() {
    var callback = sinon.spy();

    myFunction(true, callback);

    sinon.assert.calledOnce(callback);
  });
});
```

使用sinon断言我们可以得到更多有价值的错误信息。这在当你验证比较复杂的条件时非常有用，例如函数的参数。

下面列出一些sinon提供的其它强大断言的一些例子：

- `sinon.assert.calledWith`可以用来验证函数是否使用指定的参数（这可能是我用的最多的一个）
- `sinon.assert.callOrder`用来验证函数的调用顺序

[sinon断言文档](http://sinonjs.org/docs/#assertions)介绍了所有的内容。如果你喜欢使用Chai，有一个[sinon-chai-plugin](https://github.com/domenic/sinon-chai)可以让你通过chai的`expect`和`should`接口来使用sinon断言。

### Stubs

stubs归类于test-doubles是因为它的灵活和方便性。它拥有spies的全部功能，此外它还彻底的替换掉了目标函数。换句话说，当你使用spy，原始的函数依然会被调用，但如果使用stub，原始函数就不会被执行了。

这个特性让stub可以胜任许多任务，例如：

- 替换像ajax或其它外部函数等让测试变复杂或慢的调用
- 根据函数的响应来触发不同的代码流程
- 测试不寻常的条件，如抛出异常

我们可以像创建spies一样创建stubs：

```js
var stub = sinon.stub();

stub('hello');

console.log(stub.firstCall.args); //output: ['hello']
```

我们创建了一个匿名的stubs，但用stubs来替换存在的函数更有意义。

举个例子，如果你有一段代码调用了jquery的Ajax，测试它将变得麻烦。代码会发送请求到我们配置的服务端，所以我们需要保证服务端的有效性，或者给代码添加特定的分支来适配测试环境 – 这么做真的大错特错。你不应该在代码中编写任何测试特定逻辑。

我们可以使用sinon的stub来替换ajax调用。这会让测试变得简单。

下面的例子中，我们使用ajax向预定url发送一个携带参数的请求。

```js
function saveUser(user, callback) {
  $.post('/users', {
    first: user.firstname,
    last: user.lastname
  }, callback);
}
```

通常，测试这个函数将变的很麻烦，但我们有了stub，一切变得美好。

假如我们想要确保传递给`saveUser`函数的回调方法在请求结束后正确的被执行了一次。

```js
describe('saveUser', function() {
  it('should call callback after saving', function() {

    //We'll stub $.post so a request is not sent
    var post = sinon.stub($, 'post');
    post.yields();

    //We can use a spy as the callback so it's easy to verify
    var callback = sinon.spy();

    saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);

    post.restore();
    sinon.assert.calledOnce(callback);
  });
});
```

See the Pen [Sinon Tutorial: JavaScript Testing with Mocks, Spies \& Stubs](http://codepen.io/SitePoint/pen/vGOrwj/)

这里，我们将ajax函数替换成了stub。这意味着请求不会被发送，我们不需要一个服务端 – 我们全权控制了我们的测试代码！

介于我们想确认我们传给`saveUser`的回调会被执行，我们让stub立刻返回。这意味着stub将自动调用callback参数。这模仿了`$.post`在请求完成后的行为。

除了stub，我们还创建了一个spy。我们可以使用一个普通的函数作为回调，但使用spy会让`sinon.assert.calledOnce`更方便验证测试结论。

大多数需要stub的场景，都类似下面步骤：

- 确认是否包含问题函数，例如`$.post`
- 观察并掌握其行为
- 创建一个stub
- 让stub来模拟目标行为

stub不需要模拟所有的行为，只需要足够你的测试项使用即可，其它细节可以忽略。

另外一些stub的常用场景是验证一个函数是否使用特定的参数。

举个例子，在我们的ajax函数中，我们希望确定正确的数据被提交。因此，我们可能会这么做：

```js
describe('saveUser', function() {
  it('should send correct parameters to the expected URL', function() {

    //We'll stub $.post same as before
    var post = sinon.stub($, 'post');

    //We'll set up some variables to contain the expected results
    var expectedUrl = '/users';
    var expectedParams = {
      first: 'Expected first name',
      last: 'Expected last name'
    };

    //We can also set up the user we'll save based on the expected data
    var user = {
      firstname: expectedParams.first,
      lastname: expectedParams.last
    }

    saveUser(user, function(){} );
    post.restore();

    sinon.assert.calledWith(post, expectedUrl, expectedParams);
  });
});
```

see the pen [Sinon Tutorial: JavaScript Testing with Mocks, Spies \& Stubs](http://codepen.io/SitePoint/pen/eZNKqZ/)

这次，我们有创建了一个`$.post()`的stub，但这回我们并没有让它直接返回。这次我们的测试目标不是回调，因此让它返回并不是必须的。

我们设置了一些变量来存期望的数据 \- url和参数。这是一个好的实践，让我们很容易知道什么是测试必须的。也可以帮助我们减少重复代码。

这次我们使用`sinon.assert.calledWith()`断言。我们将stub传递进去，因为我们想确定stub包含了正确的参数。

使用sinon，还有其它的方法来测试ajax请求。例如使用sinon的伪造XMLHttpResquest功能。我们不会在这里去介绍细节，如果你想了解更多可以参考[my article on Ajax testing with Sinon’s fake XMLHttpRequest](http://codeutopia.net/blog/2015/03/21/unit-testing-ajax-requests-with-mocha/)。

### Mocks

Mocks不同于stubs。如果你之前听过`mock object`这个术语，那没错了 \- sinon的mocks用来替换整个对象，并改变其行为。

如果你需要替换某个对象的多个方法，你就应该使用mocks。如果你只是希望替换某个单独的方法，stub更方便。

使用mocks时你需要小心！因为它太TM强大了，很容易让你的测试过于特定 \- 测试的太细或太刻意 \- 从而让你的测试太容易过期。

与spies和stubs不同，mocks包含内建的断言。当使用mock对象时，你可以定义你期望的结果，你期望的行为。

假设我们使用[store.js](https://github.com/marcuswestin/store.js)来保存一些数据到localstorage，我们打算测试这个特性。我们可以使用mock来写测试：

```js
describe('incrementStoredData', function() {
  it('should increment stored value by one', function() {
    var storeMock = sinon.mock(store);
    storeMock.expects('get').withArgs('data').returns(0);
    storeMock.expects('set').once().withArgs('data', 1);

    incrementStoredData();

    storeMock.restore();
    storeMock.verify();
  });
});
```

See the Pen [Sinon Tutorial: JavaScript Testing with Mocks, Spies \& Stubs](http://codepen.io/SitePoint/pen/EKjpYW/)。

使用mocks时，我们可以使用链式调用风格来定义期望的调用和结果。这和使用断言验证结果一样，除了我们需要提前定义，并在测试结束时校验它们`storeMock.verify()`。

调用mock对象的`mock.expects(something)`会创建一个期望值。意味着`mock.something()`方法期望被调用。Each expectation, in addition to mock-specific functionality, supports the same functions as spies and stubs.（译者注：只能意会无法言表啊）

你可能会觉得通常stub都比mock更简单 \- 没错。Mocks要小心使用。

mock特定的特性，可以查看[sinon的mock文档](http://sinonjs.org/docs/#mocks)。

### 重要的最佳实践：使用sinon.test\(\)

这里有个使用sion的很重要的最佳实践，不管是使用spies，stubs还是mocks都应该牢记。

如果你用test-doubles替换了一个存在的函数，则使用`sinon.test()`。

前面的例子中，我们使用`stub.restore()`或`mock.restore()`来在我们使用完后清理它们。这很有必要，否则test-doubles将持续有效，这将可能影响其他的测试项并导致错误。

但是，直接使用`restore()`可能很难，有可能因为某个异常导致`restore()`没有被调用！

我们有两种方法来解决这个问题：我们可以自己包装完整的`try catch`块。这允许我们将`restore()`放在`finally`块中调用来确保一切正常。

或者，一个更好的做法是我们可以将测试体写在`sinon.test()`中：

```js
it('should do something with stubs', sinon.test(function() {
  var stub = this.stub($, 'post');

  doSomething();

  sinon.assert.calledOnce(stub);
});
```

上面的代码中，注意`it()`的第二个参数，它被`sinon.test()`包裹。此外注意我们使用`this.stub()`代替了`sinon.stub()`。

使用`sinon.test()`包裹测试体可以让我们使用sinon沙盒特性，其允许我们使用`this.spy()`，`this.stub()`和`this.mock()`来创建spies， stubs和mocks。任何你在沙盒中创建的test-doubles都会自动被清理。

我们上面的代码中并没有`stub.restore()` – 托沙盒的福它已经不再需要了。

请尽可能使用`sinon.test()`，你会避免由于前面的测试项没有清理test-doubles而导致的灵异问题。

### Sinon并不是黑魔法

Sinon很强大，而且某些时候很难理解它是如何工作的。让我们看一下Sion工作原理的原生javascript的例子，这样我们可以更好的理解其思想。

我们可以自己实现spies， stubs和mocks。使用Sinon只是因为它更方便 – 自己实现会非常复杂。

首先，spy本质上是一个函数wrapper：

```js
//A simple spy helper
function createSpy(targetFunc) {
  var spy = function() {
    spy.args = arguments;
    spy.returnValue = targetFunc.apply(this, arguments);
    return spy.returnValue;
  };

  return spy;
}

//Let's spy on a simple function:
function sum(a, b) { return a + b; }

var spiedSum = createSpy(sum);

spiedSum(10, 5);

console.log(spiedSum.args); //Output: [10, 5]
console.log(spiedSum.returnValue); //Output: 15
```

我们可以很容易的使用自定义函数来实现spy的功能。但注意sinon的spies提供了非常多的特性 – 包括断言的支持。这让sinon更方便使用。

#### 关于Stub Then？

实现一个简单的stub， 你可以简单的替换成一个新的：

```js
var stub = function() { };

var original = thing.otherFunction;
thing.otherFunction = stub;

//Now any calls to thing.otherFunction will call our stub instead
```

但是，sinon的stub提供了许多更好用的功能：

- 它们拥有spy的全特性
- 你可以调用`stub.restore()`来恢复原始的行为
- 你可以结合sinon的断言

Mocks simply combine the behavior of spies and stubs, making it possible to use their features in different ways.

尽管有时候sinon看起来像个“黑魔法”，但它的大多数功能其实很容易自己实现。但比起自己来实现一套来说，sinon非常方便使用。

### 总结

真实项目的测试有时非常的复杂，导致你可能彻底放弃。但是使用sinon，测试变得非常简单。

记住一个重要的准则：如果一个函数很难被测试，尝试使用test-doubles替换它。

想知道更多关于如何让你的代码使用sinon？当我的网站来，我会提供[Sinon in the real-world guide](https://codeutopia.net/go/sinon-pdf-download-page/)给你，包含了sinon的最佳实践，和三个真实的例子来讲解如何在不同的测试方案中使用它。