# _beep-boop_

#### By _Will Jolley_

#### _A number censoring webpage_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_


## Description

_beep-boop is a webpage that invites users to input a number, and returns to them a comprehensive list of every integer from 0 to that number, with an exciting twist: any number that contains a 1 will be replaced with a "Beep!" Any number containing a 2 will be replaced with a "Boop!" And any number containing a 3 will be replaced with the phrase "Won't you be my neighbor?"_

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser.__

## Known Bugs

N/A

## License

_e-mail me at yeswilljolley@gmail.com with any issues, questions, ideas, concerns._

Copyright (c) _2023_ _Will Jolley_




## TDD

Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number."
Code: beepBoop("0");
Expected Output: [0]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop("1");
Expected Output: [0, "beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop("2");
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: beepBoop("3");
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"]

Test: "It should prioritize substituting '3's over '2's and '1's, and replacing '2's over '1's." 
Code: beepBoop("13");
Expected Output: [0, "Beep", "Boop," 4, 5, 6, 7, 8, 9, "Beep", "Beep", "Boop", "Won't you be my neighbor?"]