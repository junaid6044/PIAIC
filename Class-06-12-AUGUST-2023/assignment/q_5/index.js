"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var count = 1;
var evenCount = 0;
while (evenCount < 10) {
    if (count % 2 === 0) {
        console.log(count);
        evenCount++;
    }
    count++;
}
