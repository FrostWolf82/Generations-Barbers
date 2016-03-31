$(window).scroll(function() {

  var sScroll = $(this).scrollTop();

  $('.logo h1').css({
    'transform': 'translate(0px , ' + sScroll / 2 + '%)'
  });

});

$(function() {

  var myQuotes = new Array();
        myQuotes[0] = "<em>&quot;Your playing small does not serve the World.  There is nothing enlightened about shrinking so that other people won't feel insecure around you.  We are all meant to shine...&quot;</em> ~ <strong>Marianne Williamson</strong>";

        myQuotes[1] = "<em>&quot;Only after the last tree has been cut down, after the last has been poisoned, and the last fish has been caught... only then will you find that money cannot be eaten.&quot;</em>";

        myQuotes[2] = "<em>&quot;If I had asked people what they wanted, they would have said faster horses.&quot;</em> ~ <strong>Henry Ford</strong>";

        myQuotes[3] = "<em>&quot;Attitude changes everything.&quot;</em>";

        myQuotes[4] = "<em>&quot;When life gives you a hundred reasons to cry, show life that you have a thousand reasons to smile.&quot</em>";

        myQuotes[5] = "<em>&quot;Be the change in the World that you'd like to see.&quot;</em> ~ <strong>Ghandi</strong>";

        myQuotes[6] = "<em>&quot;Time enjoyed wasting was not wasted time.&quot;</em> ~ <strong>John Lennon</strong>";

        myQuotes[7] = "<em>&quot;Luck is when preparation meets opportunity.&quot;</em>";

        myQuotes[8] = "<em>&quot;The richest man is not he who has the most, but he who needs the least.&quot;</em>";

        myQuotes[9] = "<em>&quot;The man who views the World at fifty the same as he did at twenty has wasted thirty years of his life.&quot;</em> ~ <strong>Muhammad Ali</strong>";

        myQuotes[10] = "<em>&quot;Do not conform any longer to the pattern of this World but be transformed by the renewing of your mind.&quot;</em> ~ <strong> Romans 12: 2</strong>";

        myQuotes[11] = "<em>&quot;Failure isn't falling down, failure is not getting back up.&quot;</em>";

        myQuotes[12] = "<em>&quot;When the World gives you lemons... make lemonade.&quot;</em>";

        myQuotes[13] = "<em>&quot;Fantasy is what you want but reality is what you need.&quot;</em> ~ <strong>Lauryn Hill</strong>";

  var myRandom = Math.floor(Math.random() * myQuotes.length);

  $('#myQuote').html(myQuotes[myRandom]);

});
