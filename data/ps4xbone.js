
var metadata = {
        title: 'Who Won E3? You Decide - IGN Versus',
        categoryCount: 7,
        optionsCount: 2,
        countTimer1 : 41,
        countTimer2 : 21,
        option1: 'PlayStation',
        option2: 'Xbox One',
    },
    message = {
        start: 'Start the video above to begin voting.',
        countdown: 'Please watch each video before voting...',
        vote: 'Vote to advance to the next poll.',
        verify: 'Watch this video to verify your vote. Next poll opens in...',
        verifyThanks: 'Watch this video to verify your vote. <b>Thanks for voting!</b>'
    },
    categories = {
        category1 : {
            name: 'Controller',
            question: 'Which has the best <b>controller</b>?',
            thumbnail: 'http://assets2.ignimgs.com/2013/12/19/versuscontroller1280jpg-8860f2_320w.jpg',
            videoUrlNeutral: 'http://www.ign.com/videos/2013/12/20/xbox-one-vs-ps4-you-decide-the-controller-ign-versus',
            videoUrlIntro: 'http://www.ign.com/videos/2013/12/20/xbox-one-vs-ps4-you-decide-the-controller-ign-versus'
        },
        category2 : {
            name: 'Hardware',
            question: 'Which has the best <b>hardware</b>?',
            thumbnail: 'http://assets1.ignimgs.com/2013/12/19/versushardware1280jpg-8860f6_320w.jpg',
            videoUrlNeutral: 'http://www.ign.com/videos/2013/12/16/xbox-one-vs-ps4-you-decide-the-hardware-ign-versus',
            videoUrlVote1: 'http://www.ign.com/videos/2013/12/20/xbox-one-vs-ps4-you-decide-the-hardware-ps4-controller-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2013/12/20/xbox-one-vs-ps4-you-decide-the-hardware-xbox-one-controller-vote-ign-versus'
        },
        category3 : {
            name: 'Games',
            thumbnail: 'http://assets1.ignimgs.com/2013/12/19/versusgames1280jpg-e974aa_320w.jpg',
            question: 'Which has the best <b>games</b>?',
            videoUrlNeutral: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-games-library-ign-versus',
            videoUrlVote1: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-games-library-ps4-hardware-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-games-library-xbox-one-hardware-vote-ign-versus'
        },
        category4 : {
            name: 'Software',
            thumbnail: 'http://assets2.ignimgs.com/2013/12/19/versussoftware1280jpg-e974ae_320w.jpg',
            question: 'Which has the best <b>software</b>?',
            videoUrlNeutral: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-software-ign-versus',
            videoUrlVote1: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-software-ps4-games-library-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-software-xbox-one-games-library-vote-ign-versus'
        },
        category5 : {
            name: 'Online',
            thumbnail: 'http://assets1.ignimgs.com/2013/12/19/versusonline1280jpg-8860f3_320w.jpg',
            question: 'Which has the best <b>online</b>?',
            videoUrlNeutral: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-online-ign-versus',
            videoUrlVote1: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-online-ps4-software-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-online-xbox-one-software-vote-ign-versus'
        },
        category6 : {
            name: 'Overall',
            thumbnail: 'http://assets2.ignimgs.com/2013/12/19/versusoverall1280jpg-e974ad_320w.jpg',
            question: 'Which is better <b>overall</b>?',
            videoUrlNeutral: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-overall-ign-versus',
            videoUrlVote1: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-overall-ps4-online-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-overall-xbox-one-online-vote-ign-versus'
        },
        category7 : {
            name: 'Thanks',
            question: 'Thanks for <b>voting</b>!',
            videoUrlVote1: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-finale-ps4-overall-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2012/12/17/xbox-one-vs-ps4-you-decide-the-finale-xbox-one-overall-vote-ign-versus',
        }
    };
