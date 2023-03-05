import random
from typing import List, Union

def create_board(rows: int, cols: int, mines: int, first_x: int, first_y: int) -> List[List[Union[int, str]]]:
    # создаем пустое поле
    board = [[0 for _ in range(cols)] for _ in range(rows)]

    # расставляем мины
    mine_positions = set()
    while len(mine_positions) < mines:
        x, y = random.randint(0, rows-1), random.randint(0, cols-1)
        if (x, y) != (first_x, first_y):
            mine_positions.add((x, y))
            board[x][y] = 'X'

    # рассчитываем количество мин вокруг каждой клетки
    for i in range(rows):
        for j in range(cols):
            if board[i][j] != 'X':
                count = 0
                for di in range(-1, 2):
                    for dj in range(-1, 2):
                        if 0 <= i+di < rows and 0 <= j+dj < cols and board[i+di][j+dj] == 'X':
                            count += 1
                board[i][j] = count

    # открываем первую клетку
    board[first_x][first_y] = '0'

    return board


def print_board(board: List[List[Union[int, str]]]) -> None:
    for row in board:
        print(tuple(row))

rows = int(input("Введите количество строк: "))
cols = int(input("Введите количество столбцов: "))
mines = int(input("Введите количество мин: "))
first_x = int(input("Введите номер строки первой выбранной клетки: "))
first_y = int(input("Введите номер столбца первой выбранной клетки: "))

board = create_board(rows, cols, mines, first_x, first_y)
print_board(board)