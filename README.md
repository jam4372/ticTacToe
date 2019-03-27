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
