var rooms = {
    "start": {
        "description": "Your name is Neil Garison. After all the hard you've done, you finally decide that it's time to take on the biggest quest. You are going to fine the Demon Tear, the most difficult item to obtain, yet the most valuable." +
            " This is a choose your own adventure text game. Type <b>help</b> to see the options!" + " You can do the following throughout the game: <b>go</b> a direction <b>scout</b> an area or <b>quit</b>. It's what you want to do." + 
            " For know let's do something simple: <b>go forward<b> or <b>scout<b>",
        "quit": "You dont honestly feel up to doing anything, so you flop over and go to bed. Sweet dreams :)",
        "scout": "You see the rift that leads to the underwold. Looking at it make you quiver in your armour, but you don't want to get scared now",
        "directions": {
            "forward": "bridge1"
            
        }
    },
    "bridge1": {
        "description": "You arrive at a bridge. Yep, this is happening. There is a pathway that splits into two directions:<b>go forward</b> on the bridge or <b>go left</b> under the bridge or will you take a tactical approach?",
        "scout": "There are a few Imps on the bridge. However, they look occupied at the moment",
        "quit": "You relize this was a bad idea. Thinking about how dumb this was, you leave for home to enjoy a hot shower.",
        "directions": {
            "forward": "otherside1",
            "left": "underneath"
        }
    },
    "otherside1": {
        "description": "You walk over the bridge with no complications. Turns out, Imps are dumb and they didnt even notice you.Getting to the other side you make your way to a tower." +
        " You stand at the foot of the enterance, what will you do. <b>scout</b> or <b>go forward<b>?",
        "scout": "The tower looms over you. The massive stone building sends shivers down your spin. Are you scared? Or is this anticipation? This thought bounces in your head for a while.",
        "quit": "Staring at the tower you relize the many things that could go wrong. Shortly you relize your pants are wet and you need to go home and change them.",
        "directions": {
            "forward": "intower1"
        }

    },
    "underneath": {
        "description": "You walk under the bridge and relize that theres nothing but a pool of lava underneath. Huh, I wonder why they made the bridge in the first place." +
        " Knowing how dumb you are for not assesing the situation first you realize you were not ready for this and go home. Game Over!"
        
    },
    "intower1": {
        "description": "You enter the tower and find a spiraling staircase that leads to who knows what. Well, nows a good time to <b>quit</b> if you dont want to climb them. Or you can <b>go forward</b> ",
        "quit": "You come to the conclusion that you would rather fight a swarm of bees or even drink slime then climb however many stairs there were. You turn around and go home. Of course without letting the" +
        "door hit you on your way out giveing you a red bump on your forehead",
        "scout": "Yep, those sure a stairs",
        "directions": {
            "forward": "upper1"
        }
    },
    "upper1": {
        "description": "You enter a room with a thick gas that instantly make you cover your nose and mouth. This is bad, you need to get out. You can <b>go forward</b> or <b>quit</b> ",
        "quit": "You relize this sucks and is not worth smelling something that's worse than an a hobo that has clean himself in sewage water", 
        "scout": "You can bearly see anything in the room given the fact that gas is a thick purple substance that make you want to vomit and close your eyes",
        "directions": {
            "forward": "upper2"
        }
    },
    "upper2": {
        "description": "You enter a room that is layed out with bear traps all set and active for what ever steps on them. You can <b>go forward</b> or <b>quit</b>",
        "quit": "Seeing how stupid this floor is gaurded you fine this to be a joke. That perhaps this so called Demons Tear is nothing but a false advertised item. With that, you moon walk out and go home.", 
        "scout": "There are so many bear traps in the room that no matter how many times you count them you always lose track. But you manage to scout a way to get past them Now let's execute that plan.",
        "directions": {
            "forward": "upper3"
        }
    },
    "upper3": {
        "description": "Entering the room, you prepare for the worst. However, there is nothing but a blind demon swinging a sword trying to hit what appears to be a rat running around the floor. You can <b>go forward</b> or <b>quit</b>",
        "quit": "Seeing yet another stupidly traped room, you realize your brain cannot handle the sheer stupidity and randomness this tower holds. Without a second thought, you turn around and go home." +
        " Falling down every flight of stairs on the way out.", 
        "scout": "The demon is nothing to behold. Hes about 5ft 6in and swinging a half rusted sword like a newborn baby with a raddle. The rat doesn't look scared one bit.",
        "directions": {
            "forward": "towertop1"
        }
    },
    "towertop1": {
        "description": "You reach the top of the tower, finally. Seeing the well lit room, you take a gander forward and see a giant dragon staring you down from across the room. Seeing how every room has been nothing but a hosh-posh" +
         "castle made from some kindergarteners made up fantasy, this was a suprise. Seeing how the dragon is angry that you are in his space, he lunges at you at top speed. It looks like hes going to hit you, what are you going to do?" +
         "<b>go forward</b> and do nothing or <b>go left</b> and dodge it. ",
        "quit": "You put your hand up signaling the dragon to stop. As the dragon stops in his tracks, you yell at him about the fact that this journey was so easy only to be ruined by him. Without another word you leave in anger" +
        " leaving behind a sad dragon crying a pool of tears. Who would have thought that the dragon was a softy.", 
        "scout": "Why are you observing the situation. I already told you what the dragon was doing. You best move out of the way",
        "directions": {
            "left": "home",
            "forward": "Nothing"
        }
    },
    "home": {
        "description": "You take a step to the left, completely dodging the dragons attack causing him to run into the wall where a giant bolder, because of the collision, falls onto the giant scaly " +
        " beast defeating him instantly. You look with a blank expression, relizing how easy this adventure was. With that in mind, you grab the Demon Tear and skip all the way home" +
        " only to realize that the true reason you did this was to pay off your rent and the countless bill that had been staked up for months on end. Turns out you did not get much in " +
        " the end after paying everything off. But hey the adventure was fun right? Now you can go home and ponder the fact that you risk death to get a tear just to pay off your stupid bills" +
        " Congratulations, you win!! Hope you enjoyed."
    },
    "Nothing": {
        "description": "You choose to do nothing. Getting hit with the full force of a 6.3 ton dragon, instantly killing you. What is wrong with you? Like seriously, you chose to do nothing instead of" +
        " dodgeing it getting hit with an attack that you clearly saw him inact. I don't understand what is wrong with you. Were you daydreaming or did you think you could actually take it. This isnt like those cartoons" +
        " or movies you watch on your free time. You don't just randomly get the strength to tank a 6 ton dragon and win. Like I said, I have no idea what you were thinking. But the journey's over. You lose. Good day!"
    }
}

