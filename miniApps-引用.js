
/*
【引用】
有import和include两种

【import】
import可以在该文件中使用目标文件定义的template。

作用域：
import有作用域的概念，即只会import目标文件中定义的template，而不是import目标文件import的template。
如：C import B，B import A，在C中可以使用B定义的template，在B中可以使用A定义的template，但是C不能使用A定义的template。


【include】
include可以将目标文件除了<template/> <wxs/>外的整个代码引用，相当于是拷贝到include位置
*/