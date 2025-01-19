sss


```
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
getInfo=>input: Input Info
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
printInfo=>output: Print info
para=>parallel: parallel tasks

st->getInfo->op1->cond
cond(yes)->io->printInfo->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
```


```md
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes@Y, right)->c2
cond(no@N)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

```mermaid
flowchat
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```