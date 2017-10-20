$(document).ready(function () {
    var index, randomInt, quoteString = null;
    var quotesArray =
    [
      {
        "quote": "Everybody lies."
      },
      {
        "quote": "...like the philosopher Jagger once said, you can't always get what you want."
      },
      {
        "quote": "We treat it. If she gets better, we know that we're right."
      },
      {
        "quote": "Our bodies break down, sometimes when we're 90, sometimes before we're even born, but it always happens and there's never any dignity in it. I don't care if you can walk, see, wipe your own ass. It's always ugly. Always. You can live with dignity, you can't die with it."
      },
      {
        "quote": "Tests take time. Treatment's quicker."
      },
      {
        "quote": "I take risks, sometimes patients die. But not taking risks causes more patients to die, so I guess my biggest problem is I've been cursed with the ability to do the math."
      },
      {
        "quote": "You know what's worse than useless? Useless and oblivious."
      },
      {
        "quote": "There is not a thin line between love and hate. There is --- in fact --- a Great Wall of China with armed sentries posted every 20 feet between love and hate."
      },
      {
        "quote": "There's an evolutionary imperative for why we give a crap about our family and friends. And there's an evolutionary imperative for why we don't give a crap about anybody else. If we loved all people indiscriminately, we couldn't function."
      },
      {
        "quote": "Dying people lie too. Wish they'd worked less, been nicer, opened orphanages for kittens. If you really want to do something, you do it. You don't save it for a sound bite."
      }
    ];

    $(".btn").click(function (){
      while(index==randomInt){
        randomInt = Math.floor(Math.random() * (10));
      }
      index = randomInt;
      quoteString = quotesArray[index].quote;

      $("#quote").fadeOut(500, function(){
        $("#quote").empty().append(quoteString);
        $("#quote").fadeIn(500);
      });

      return false;
    });
});

