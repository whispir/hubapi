!function(e){function t(){$("h1, h2").each(function(){var e=$(this),t=e.nextUntil("h1, h2");c.add({id:e.prop("id"),title:e.text(),body:t.text()})})}function n(){s=$(".content"),a=$(".dark-box"),u=$(".search-results"),$("#input-search").on("keyup",i)}function i(e){if(o(),u.addClass("visible"),27===e.keyCode&&(this.value=""),this.value){var t=c.search(this.value).filter(function(e){return e.score>1e-4});t.length?(u.empty(),$.each(t,function(e,t){u.append("<li><a href='#"+t.ref+"'>"+$("#"+t.ref).text()+"</a></li>")}),r.call(this)):(u.html("<li></li>"),$(".search-results li").text('No Results Found for "'+this.value+'"'))}else o(),u.removeClass("visible")}function r(){this.value&&s.highlight(this.value,l)}function o(){s.unhighlight(l)}var s,a,u,l=($(e),{element:"span",className:"search-highlight"}),c=new lunr.Index;c.ref("id"),c.field("title",{boost:10}),c.field("body"),c.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(t),$(n)}(window);