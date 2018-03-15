module.exports = function (bh) {
    bh.match('component', function (ctx, json) {
        ctx
            .tParam('ID', ctx.generateId())
            .attr('id', ctx.tParam('ID'))
            .content([
                {tag: 'script', attrs: {async: true}, content: ctx.process(
                    'document.addEventListener("DOMContentLoaded", function () {%ID%.outerHTML = BH.apply(%JSON%)});'
                        .replace('%ID%', ctx.tParam('ID'))
                        .replace('%JSON%', JSON.stringify(ctx.content()))
                )}
            ], true);

    });
}



