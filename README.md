Bootcamp week 3: Homework

  

# 03 JavaScript: Password Generator

  

## About Tasks

  

This week’s homework comes with starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

  

The password can include special characters.  The [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

  

## User Story

  

```

AS AN employee with access to sensitive data

I WANT to randomly generate a password that meets certain criteria

SO THAT I can create a strong password that provides greater security

```

  

## Acceptance Criteria

  

```

GIVEN I need a new, secure password

WHEN I click the button to generate a password

THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria

THEN I select which criteria to include in the password

WHEN prompted for the length of the password

THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password

THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt

THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered

THEN a password is generated that matches the selected criteria

WHEN the password is generated

THEN the password is either displayed in an alert or written to the page

```

  

## Mock-Up

  

The following image shows the web application's appearance and functionality:

  

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

  

## Solution

```
Here is my solution to generate password: 

First I declared the 4 seperate string arrays to meet the criteria. 
- Uppercase: upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
- Lowercase: lowerCase = "abcdefghijklmnopqrstuvwxyz"
- Numbers: numbers = "0123456789"
- Symbols: symbols = "!#$%&*+-.:;=?@^_|~"

When the "Generate Button" is clicked the writePassword() function is called. To generate the password, some questions need to be answered:
	Password length (supposed to be 8-128 characters) 
		[Uses prompt() dialog box to get number input] 
	At least one of the options needed to be chosen 
		[Uses confirm() dialog box to get each question selection] 
				"Does this password include lowercase?" 
				"Does this password include uppercase?" 
				"Does this password include numbers?" 
				"Does this password include symbols?" 
Same time I need to create string array of characters what the user is selected. 

Then I check if I have the right inputs. 
	If I have the right answers, the generatePassword() function is called with length of password and the string of characters. Then the result (the generated password) is passed to the html page. 
	If not, the user is alerted with wrong inputs [Uses alert() dialog box] which is given the "Start over" suggestion and ends the process. 

According to starter code, the generatePassword() function is used to creating a new password. To create a password I have to use the password length and the selected string of characters. For the new password I use a "for loop" to get a randomly selected character from the passed string, and it repeats until the length of password is reached. Then the new password is passed to the writePassword() function.

```