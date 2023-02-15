'use strict';
/*

Task 1
Change the text in the first and the last list item element in every unordered list element on this page
Change it to 'first' and 'last'

<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>

<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>

*/

document.querySelectorAll("ul > li:first-child").forEach(item => item.innerHTML = "first");
document.querySelectorAll("ul > li:last-child").forEach(item => item.innerHTML = "last");