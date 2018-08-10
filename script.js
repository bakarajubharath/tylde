
$(document).ready(function(){
    $('#super-moon').popover({
        placement : 'bottom',
        trigger : 'click',
        html : true,
        content : '<div class="media"><img class="tooltip-img super-moon media-object" src="./images/super_moon.png" alt="Sample Image"><p>When the Moon is near its perigee (i.e., it is at the point of least distance form Earth – refer (2) in the image), it appears larger and may be described as a “supermoon”. When an eclipse occurse during such a supermoon, which happens to be a blue moon (second full moon in a calendar month), it was referred to as a <strong> "super blue blood moon" </strong>; "blood" refers to the typical red color of the Moon during the total lunar eclipse</p> <p class="lunar-eclipse">Read More? : <a href="https://en.wikipedia.org/wiki/January_2018_lunar_eclipse">https://en.wikipedia.org/wiki/January_2018_lunar_eclipse </a></p></div>'
    });

    $('#yi-zhou').popover({
        placement : 'bottom',
        trigger : 'click',
        html : true,
        content : '<div class="media"><img class="tooltip-img shu media-object" src="./images/shu.png"  alt="Sample Image"><p>Early Chinese historical text from the 1st-century BCE, the Yizhoushu text consisted of 10 volumes with 70 chapters and a preface. Modern scholarship reveals that 32 chapters constitute of governmental and military topics while remaining 27 chapters are heterogeneous.</p> <p class="lunar-eclipse">Read More? : <a href="https://en.wikipedia.org/wiki/Yi_Zhou_Shu">https://en.wikipedia.org/wiki/Yi_Zhou_Shu </a></p></div>'
    });

    $('#era').popover({
        placement : 'bottom',
        trigger : 'click',
        html : true,
        content : '<div class="media"><img class="tooltip-img era media-object" src="./images/era.jpg" alt="Sample Image"><p>The early half of the reign of Emperor Xuanzong of the Tang Dynasty is known as Kaiyuan Era.He was the seventh emperor of the Tang dynasty in China, reigning from 713 to 756 C.E. It is usually viewed as one of the golden ages of Chinese history – a period of political stability, peace in society, and economic prosperity, in addition to advances in education, literature, music, painting, sculpture, and religion</p></div>'
    });

    $('#lake').popover({
        placement : 'bottom',
        trigger : 'click',
        html : true,
        content : '<div class="media"><img class="tooltip-img liquid_water media-object" src="./images/liquid_water.jpg" alt="Sample Image"><p>When the Moon is near its perigee (i.e., it is at the point of least distance form Earth – refer (2) in the image), it appears larger and may be described as a “supermoon”. When an eclipse occurse during such a supermoon, which happens to be a blue moon (second full moon in a calendar month), it was referred to as a <strong> "super blue blood moon" </strong>; "blood" refers to the typical red color of the Moon during the total lunar eclipse</p> <p class="lunar-eclipse">Read More: <a href= "https://news.cgtn.com/news/3d3d774e3451444d79457a6333566d54/share_p.html">https://news.cgtn.com/news/3d3d774e3451444d79457a6333566d54/share_p.html</a></p></div>'
    });
    
    $('#era-time').popover({
        placement : 'bottom',
        trigger : 'click',
        html : true,
        content : "<div class='media'><p>Eastern Daylight Time (EDT) is 4 hours behind Coordinated Universal Time (UTC). This time zone is a Daylight Saving Time time zone and is used in: North America</p> <p>A massive underground lake has been detected for the first time on Mars, raising the possibility that more water – and maybe even life – exists there. The discovery was made using a radar instrument on board the European Space Agency's Mars Express orbiter, launched in 2003. </p></div>"
    });
   
    $('#infel').popover({
        placement : 'bottom',
        trigger : 'click',
        html : true,
        content : "<div class='media'><p>Pronunciation: ɪnfɪˈlɪsɪti/<p>noun</p><p><strong> Meaning</strong>: a thing that is inappropriate, especially a remark or expression.</p><p><strong> Synonyms:</strong>mistake, error, blunder, slip, lapse, solecism, misusage, impropriety</p><p><strong>Usage:</strong> 'I bear full responsibility for any infelicities in the text'</p></p></div>"
    });
    $('html').on('click', function(e) {
        if (typeof $(e.target).data('original-title') == 'undefined' &&
           !$(e.target).parents().is('.popover.in')) {
          $('[data-original-title]').popover('hide');
        }
      });
    
    $("#popover-super-moon").on('click', function(){
        $('.popover-super-moon').css("display", "block");
    });
    $(".popover-super-moon-close").on('click', function(){
        $('.popover-super-moon').css("display", "none");
    });

    $("#popover-liquid").on('click', function(){
        $('.popover-liquid-water').css("display", "block");
    });
    $(".popover-liquid-water-close").on('click', function(){
        $('.popover-liquid-water').css("display", "none");
    });

    $("#popover-infelicity").on('click', function(){
        $('.popover-infel').css("display", "block");
    });
    $(".popover-infel-close").on('click', function(){
        $('.popover-infel').css("display", "none");
    });

    $("#popover-yi-zhou").on('click', function(){
        $('.popover-shu').css("display", "block");
    });
    $(".popover-shu-close").on('click', function(){
        $('.popover-shu').css("display", "none");
    });

    $("#popover-edt").on('click', function(){
        $('.popover-era-time').css("display", "block");
    });
    $(".popover-era-time-close").on('click', function(){
        $('.popover-era-time').css("display", "none");
    });

    $("#popover-kaiyuan-era").on('click', function(){
        $('.popover-Kaiyuan').css("display", "block");
    });
    $(".popover-Kaiyuan-close").on('click', function(){
        $('.popover-Kaiyuan').css("display", "none");
    });

    $('html').on('click', function(e) {
        if($(e.target).attr('class') != 'blue-moon'){
        $('.popover1').hide();
        }
      });
});