// 4 столпа ООП (2 мнимый)

// Инкапсуляция. В ООП мы имеем понятие объекта / класса - который несёт в себе идею контейнера (объединяет)
// данные и методы для обработки этих данных. Это делает код легко поддерживаемым и переиспользуемым.

// Абстраккци. Скрытие сложности от пользователя (программиста). Создание простых интерфейсов за которыми
// скрывается вся сложность реализации. Мы просто видим название метода, и сразу понимаем что далает этот метод
// и нам не важно что у него внутри и как он работает под капотом.

// Наследование. Подразумивает под собой использование функционала родителя. Через наследование мы избегаем
// дублирование кода (DRY) и экономим память через разделяемые методы, которые создаются один раз и 
// хранятся в объекте-прототипе.

// Полиморфизм. Тут описать очень сложно, и определений миллион, но главная суть - вызывая методы с одинаковыми
// именами на разных объектах - исполняемая работа будет разной, в зависимости на каком из объектов был вызван метод.
// Опять-таки, это идея переиспользования кода, переиспользования базовой функциональности, которую мы можем расширять и
// она будет существовать под методом с тем же именем, что у родителя
