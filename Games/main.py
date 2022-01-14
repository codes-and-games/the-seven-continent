import csv
import pandas
import turtle
import time
import sys

screen = turtle.Screen()
screen.title("Guess the Continents")
image = ("blank_states_img.gif")
screen.addshape(image)
turtle.shape(image)
screen.setup(width = 0.7, height = 0.6, startx=None, starty=None)
data = pandas.read_csv("continents.csv")
state1 = data.state.to_list()

guessed_continents = []

while len(guessed_continents) < 7:
    answer_state = screen.textinput(title=f"{len(guessed_continents)}/7", prompt="Name a continent:- ").title()

    if answer_state == "Exit":
        missing_states = []
        man = [missing_states.append(states) for states in state1 if states not in guessed_continents]
        new_data = pandas.DataFrame(missing_states)
        new_data.to_csv("Continents_to_learn.csv")
        sys.exit()

    if answer_state in guessed_continents:
        tin = turtle.Turtle()
        tin.penup()
        tin.hideturtle()
        tin.write(f"You entered the answer again!", align="center",
                  font=("Courier", 8, "normal"))
        time.sleep(5)
        tin.clear()

    elif answer_state in state1:
        guessed_continents.append(answer_state)
        tin = turtle.Turtle()
        tin.penup()
        tin.hideturtle()
        state_data = data[answer_state == data.state]
        tin.goto(int(state_data.x), int(state_data.y))
        tin.write(f"{answer_state}", align="center", font=("Courier", 8, "normal"))

    elif answer_state != state1:
        tin = turtle.Turtle()
        tin.penup()
        tin.hideturtle()
        tin.write(f"That's not a Continent", align="center", font=("Courier", 8, "normal"))
        time.sleep(2)
        tin.clear()


turtle.mainloop()
