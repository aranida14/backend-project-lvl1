### Hexlet tests and linter status:

[![Actions Status](https://github.com/aranida14/backend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/aranida14/backend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/607dfc81715d1d782fd8/maintainability)](https://codeclimate.com/github/aranida14/backend-project-lvl1/maintainability)
[![Node CI](https://github.com/aranida14/backend-project-lvl1/actions/workflows/nodejs.yml/badge.svg)](https://github.com/aranida14/backend-project-lvl1/actions/workflows/nodejs.yml)

### Описание
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение четного числа.
- Определение наибольшего общего делителя.
- Определение простого числа.

### Пример игры:
```
$ brain-progression
Welcome to the Brain Game!
What number is missing in this progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```
### Требования: 
- установлена Node.js не ниже 13 версии.

### Установка и запуск:
- клонировать репозиторий
- перейти в корневую директорию проекта
- выполнить make install для установки зависимостей
- выполнить npm link для установки пакета из операционной системы (возможно, потребуется выполнять с sudo)
- чтобы проверить, что установка была успешной, выполнить команду brain-games: в консоли должно появиться приветствие
- запустить игру, введя команду с названием игры: brain-even, brain-calc, brain-gcd, brain-progression или brain-prime

### Демонстрация игр:

#### brain-even, включая установку:

[![asciicast](https://asciinema.org/a/3yM5ygFRFOqaKHoFmuycKkNh8.svg)](https://asciinema.org/a/3yM5ygFRFOqaKHoFmuycKkNh8)

#### brain-calc:

[![asciicast](https://asciinema.org/a/8Xd3AHvRXc4KEsGNTRqFs9AKI.svg)](https://asciinema.org/a/8Xd3AHvRXc4KEsGNTRqFs9AKI)

#### brain-gcd:

[![asciicast](https://asciinema.org/a/DqLg7YYIPiMAxCXVlbc5Ndruf.svg)](https://asciinema.org/a/DqLg7YYIPiMAxCXVlbc5Ndruf)

#### brain-progression:

[![asciicast](https://asciinema.org/a/XUnlGCDs7We6AptQ71bkBQpNZ.svg)](https://asciinema.org/a/XUnlGCDs7We6AptQ71bkBQpNZ)

#### brain-prime:

[![asciicast](https://asciinema.org/a/mBRhgtVAupQ3KA1IldQ3vZCa5.svg)](https://asciinema.org/a/mBRhgtVAupQ3KA1IldQ3vZCa5)
