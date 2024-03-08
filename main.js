var itemsdict = {};
var x = 0;
var y = 0;
var items = document.querySelectorAll('.mobile-item');

auto = setInterval(function() {
    if (itemsdict[x] === undefined) {
        itemsdict[x] = [];
    }
    if (itemsdict[y] === undefined) {
        itemsdict[y] = [];
    }
    while (itemsdict[x].includes(y) || itemsdict[y].includes(x)) {
        x++;
    }
    items[x].firstElementChild.click();
    items[y].firstElementChild.click();
    itemsdict[x].push(y);
    x++;
    if (x === items.length) {
        x = 0;
        y++;
    }
    if (y === items.length) {
        y = 0;
        items = document.querySelectorAll('.mobile-item');
    }
}, 500)
// changing 500 to a lower number may result in getting rate limited
