# 2048-game
2048小游戏<br/>
<a href="https://sakub.github.io/2048-game/">在线体验</a><br/>
#游戏整体思路
1.js动态生成4X4的方格<br/>
2.board数组映射界面中的每一个方格<br/>
3.游戏所有的操作底层是对board数组进行操作，之后根据board的数据变化再随时更新为游戏画面<br/>
4.游戏一开始随机生成两个格子并且值为2或者4,利用JavaScript的Math.random()方法<br/>
5.PC端监控键盘事件，根据keyCode（37,38,39,40）分别响应↑↓←→箭头的事件<br/>
6.分别定义是否可以在某个方向移动的函数，判断返回值为true或false进行移动（或相同数合并）<br/>
7.数字移动或合并后再次随机生成一个方格以及一个随机数<br/>
8.每次移动或合并且生成一个随机新方格后判断游戏是否可以结束（分别判断board数组是否还有为0的数，以及是否还有可以合并的数）<br/>
9.移动端适配，由于方格为动态生成，所以使用js实现响应式设计，应用不同的设备分辨率采用不同的界面以及方格尺寸<br/>
10.移动端触摸滑动事件，判断touchstart以及touchend事件，根据定方向滑动距离来判断为X轴滑动还是Y轴滑动，再根据触摸终点与起始点的差值来判断分别为X轴左右或Y轴上下方向<br/>
