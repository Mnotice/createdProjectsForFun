string secretWord = "giraffe";
string guess = "";
int guessLimit = 4;

while(guess != secretWord)
{
    Console.Write("Enter guess: ");
    guess = Console.ReadLine();
}

Console.Write("You Win!");

Console.ReadLine();
