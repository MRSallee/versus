
// Set poll by URL parameter
function getUrlParam () {
    var urlParam = window.location.search.substring(1);

    var dataScript = document.createElement("script");
    dataScript.type = "text/javascript";
    dataScript.src = "data-" + urlParam + ".js";
    $("head").append(dataScript);
}
getUrlParam();

// Initialize
var categoryId = 'category1',
    categoryIdNum = 1,
    voteId = 'vote0',
    lastCategoryNum = metadata.categoryCount,
    lastCategoryId = 'category' + lastCategoryNum,
    count = metadata.countTimer,
    resetCount = function () {
    count = metadata.countTimer;
    $(".voting-countdown").text("");
    clearInterval(timer);
};

// Set categories
var setNext = function () {
    categorySplit = categoryId.split("category");
    categoryIdNum = parseInt(categorySplit[categorySplit.length - 1]);
    nextCategoryIdNum = categoryIdNum + 1;
    nextCategoryId = 'category' + nextCategoryIdNum;
};
setNext();
var setCategory = function () {
    categoryId = nextCategoryId;
};

// Timer
var timer = setInterval(counter, 1000);
var startTimer = function () {
    if ($("." + [lastCategoryId] + "").length <= 0) {
        timer = setInterval(counter, 1000);
    } else {
        $(".voting-message").html(message.verifyThanks);
    }
};
var counter = function () {
    if (count > 0) {
        count = count - 1;
        $(".voting-countdown").text(count);
    } else {
        $(".vs-container").removeClass("wait").addClass("vote");
        $(".voting-countdown").text("");
        $(".voting-message").html(categories[categoryId].question);
        clearInterval(timer);
    }
};

// Run on start
$(window).load(function () {
    
    // Function, Play manual
    var play = function () {
        startTimer();
        var videoUrl = categories[categoryId].videoUrlNeutral,
            embedCode = '<iframe src="http://widgets.ign.com/video/embed/content.html?url=' + videoUrl + '&autoplay=true" width="468" height="263" scrolling="no" frameborder="0" allowfullscreen></iframe>';
        $(".vs-video").html(embedCode);
        $(".vs-container").addClass("wait");
        $(".voting-message").html(message.countdown);
    };
    
    // Click, Play manual
    $(".vs-video").on("click", ".video-thumb", function () {
        play();
    });
    
    // Function, Category change
    var categoryChange = function () {
        resetCount();
        $(".voting-message").html(message.start);
        var videoUrl = categories[categoryId].videoUrlNeutral,
            thumbUrl = categories[categoryId].thumbnail,
            embedCode = '<iframe src="http://widgets.ign.com/video/embed/content.html?url=' + videoUrl + '" width="100%" height="100%" scrolling="no" frameborder="0" allowfullscreen></iframe>',
            thumbCode = '<div class="video-thumb" style="background-image: url(\'' + thumbUrl + '\');"></div>';
        $(".vs-video").html(thumbCode);
        $(".header-category").text(categories[categoryId].name);
        $(".vs-container").removeClass().addClass("vs-container wait").addClass(categoryId);
    };
    
    // Click, Category change
    $(".vs-shortcuts").on("click", ".shortcut", function () {
        categoryId = $(this).data("id");
        categoryChange();
        setNext();
    });
    
    // Function, Vote and load next video
    $("body").on("click", ".vote .button", function () {
        var voteId = $(this).data("id"),
            voteSplit = voteId.split("vote"),
            voteIdNum = parseInt(voteSplit[voteSplit.length - 1]),
            nextVideoId = 'videoUrlVote' + voteIdNum,
            videoUrl = categories[nextCategoryId][nextVideoId],
            embedCode = '<iframe src="http://widgets.ign.com/video/embed/content.html?url=' + videoUrl + '&autoplay=true" width="100%" height="100%" scrolling="no" frameborder="0" allowfullscreen></iframe>';
        
        $(".vs-video").html(embedCode);
        $(".voting-message").html(message.verify);
        $(".vs-container").removeClass().addClass("vs-container wait").addClass(nextCategoryId);
        $(".header-category").text(categories[nextCategoryId].name);
        setCategory();
        setNext();
        resetCount();
        startTimer();
    });
    
    // Setup generated markup
    // Title, category
    $(".hamburger .header-title").text(metadata.title);
    $(".hamburger .header-category").text(categories.category1.name);
    
    // Set up shortcuts
    var iniCategoryCount = metadata.categoryCount - 1;
    
    while (iniCategoryCount > 0) {
        var iniCategoryId = "category" + iniCategoryCount,
            markupShortcut = '<div class="shortcut" data-id="' + iniCategoryId + '">' + categories[iniCategoryId].name + '</div>';
        $(".hamburger .vs-shortcuts").prepend(markupShortcut);
        iniCategoryCount = iniCategoryCount - 1;
    }
    
    // Set up content
    $(".hamburger .video-thumb").css("background-image", "url('" + categories.category1.thumbnail + "')");
    $(".hamburger .voting-message").text(message.start);
    
    // Set up options
    var iniOptionsCount = metadata.optionsCount;
    
    while (iniOptionsCount > 0) {
        var iniVoteId = "vote" + iniOptionsCount,
            iniOptionId = "option" + iniOptionsCount,
            markupOption = '<div class="button" data-id="' + iniVoteId + '">' + metadata[iniOptionId] + '</div>';
        $(".hamburger .voting-buttons").prepend(markupOption);
        iniOptionsCount = iniOptionsCount - 1;
    }
});
