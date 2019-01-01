//Definition for an interval.
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    var i = 0;

    while (i < intervals.length - 1) {

        if (intervals[i].end >= intervals[i + 1].start && intervals[i].start <= intervals[i + 1].end) {

            var start = (intervals[i].start > intervals[i + 1].start) ? intervals[i + 1].start : intervals[i].start;
            var end = (intervals[i].end > intervals[i + 1].end) ? intervals[i].end : intervals[i + 1].end;

            intervals[i] = new Interval(start, end);

            intervals.splice(i + 1, 1);

        } else {
            i++;
        }
    }
    return intervals;
};


/**
 * @Todo: Implement using STACK
 */



//var arr = [[1,3],[2,6],[5,7], [8,10],[15,18]];
//var arr = [[1,3],[2,6],[8,10],[15,18]];
//var arr = [[1,4],[4,5]];
//var arr = [[1,4],[0,4]];
//var arr = [[1,4],[0,1]];
var arr = [[1, 4], [0, 0]];


intervals = [];
arr.forEach(element => {
    intervals.push(new Interval(element[0], element[1]));
});

console.log(merge(intervals));
