# ticTacToe
Shipt coding challenge for internship consideration. Build a tic-tac-toe mobile app!

Overview

For this challenge, you will be building a tic tac toe game application. Please feel free 
to use any mobile framework or technology you wish. If you do not know how to build a mobile 
application (or do not think you have time to do it) please build a web application that will 
run scaled down on a mobile device.

The Game Should...

Allow 2 players to play tic tac toe (Follow the rules of tic tac toe)
Have 3x3 grid on which the players can play
Allow the players to take turns marking spaces on the 3x3 grid
Recognize when a player has won and declare that player as victorious
Allow the user to start a new game

Framework utilized is the Ionic Framework. To run have Ionic installed, open master file and 
run ionic serve and view in mobile inspector. Optimized for phone and tablet. 

Assumptions

The challenge specifications stated 2 players must be able to take turns playing. In this sense
I assumed the order in which they would play could be left to the players. X will always go first
so if the order wants to be switched it must be done physically. As well I assumed single games 
without a running tally of won games would be sufficient. Due to this each game is played and a 
winner or tie is declared in the end and from this the board is cleared and the players can choose
to begin a new game. Additionally in terms of allowing users to begin a new game I assumed it to be 
equivalent to clearing the board and starting fresh. This is accomplished through a New Game button 
on the main game page.

Approach

First I focused on actual front end design. This being the best way to display the game board and what was best for game logic
connection as well. I ultimately chose to use Ionic Cards as they are easy to organize within the Ionic Grid system, are built fairly responsive, and can be assigned ID's for use in the game logic. There was some minor alteration to format but overall it was fairly minimal. Next would be how to display player selections, mainly the X's and O's. I opted for creating custom SVG in Adobe Illustrator, this was done for all the graphics in fact. Bring this as inline SVG was simple and better than pulling in an image. It is, however, somewhat damaging to the code readability of the html files but this seemed to me as a necessary sacrifice. Each card was given an X and O and they were placed on top of one another and hidden. I also had to consider how to handle win states, for this I opted to use Ionic Modals. I utilized one modal per endgame state as this seemed to be the most effecient and safe manner to display them. There may be something said for emplying the same strategy as the X's and O's and only showing the endgame graphic depending on the win state (player1 win, player2 win, tie). This approach, however, would require variables to be passed among the logic files of the main game and the modal. THis would increase coupling and the implementation of this approach was much less straightforward. The approach of using separate modal pages was the most effecient and straightforward in my understanding, just not as concise. Moving to logic, several ites had to be handled and tracked first. Winning sets had to be recorded for comparison. Selected cards had to be tracked and players selections also had to be tracked. The amount of turns and current player were also added as tracked variables. From this winning sets were initalized on page load and all card selections were initialized to 0. As well each modal function was defined as well as an alert function for when a user attempted to click on an already selected card. From this we move to the core logic the select function. First each selection begins by checking the current player, either 0 or 1, and if the card selected is already taken. With a user determined and the cards status open, meaning still set at 0, the selected card's ID is pushed to the players selection array. The ID of the SVG element in the html file is then found by combining the selected card's ID plus the current player number, 0 for player1 or X and 1 for player2 or O, this then changes the corresponding elements visibility to visible. The card's selection status is then changed to 1, or selected, and the turns variable is incremented. Next comes the check for a winner. This is only the case when the player selections array is greater than or equal to 3. This is so we don't perform needless checks when the player can't even get a 3 card match. The check winner function is then called and then the current player is changed to the corresponding value for the nect player to go. The check winner function begins by defining a win state at false, a 3 element array to test for found matches to the winning combinations, and a player selections array that can be set to either players selections. The player selections array is then filled depending on the current player state. Next we have an encapsulating for loop that fills a set variable with the first winning combination. This is then incremented through in a for loop with each element being compared to each player selection. If a match is found the element in the found array is set to true for that corresponding element from the winning set. Otherwise it is set to false and then it loops back to the next set element and then finally back to another set to be compared again. This amount of nested loops is almost never the most optimal or readable but for data this size it is plenty sufficient. The found array is then tested by an if statement to see if each element is true which would indicate a winning state. If this is not found it continues to check with a new set of winning combinations. If it is found the set loop is broken out of and we move down to determine which winning state to present. Tsis is done by if statements to determine the win variable is true and which player is the current player or winner. If win is true and a player is selected then the corresponding modal to that player is presented. As well current player is reset, when the winner is player1 or there is a tie, to -1 due to nature of my approach of running the current player incrementatation post check winner, but this is necessary in order to get an accurate current player for the check winner function. If the current player was not reset then the sides would constantly switch after each endgame state of player 1 winning. Finally the reset function is called which clears the board by setting all the selected cards back to hidden and their status to unselected. As well the selection arrays are reinitialized and turns is reset to 0. In the case of a tie the final else if is executed which checks that win is false and the amount of turns taken is equal to 9, the amount of possible turns on the board, and then presents the tie modal and resets the board and current player as well.
