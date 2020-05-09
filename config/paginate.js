var Tour = require('../models/tour')
module.exports = async function paginate(pages, limitNum) {
    var tourChunks = [];
    await Tour.paginate({}, {
        page: pages,
        limit: limitNum
    }, function (err, result) {
        var chuckSize = 4;
        for (var i = 0; i < result.docs.length; i += chuckSize) {
            tourChunks.push(result.docs.slice(i, i + chuckSize))
        }
    });
    return await tourChunks;
}