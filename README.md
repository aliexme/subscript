# subscript

Репозиторий с кодом приложения subscript на tramvai

## Установка зависимостей

Необходимо выполнить команду `npm i`

## Запуск
- `npm start` - запуск сервера в режиме разработки
- `npm build` - сборка проекта в продакшен режиме

## Структура проекта
* `src` - основная директория с кодом проекта
  * `index.ts` - стартовая точка приложения в котором необходимо подключать новые модули tramvai
  * `vendor.ts` - файл с внешними зависимостями приложения, будут выделены в отдельный js файла
  * `bundles` - директория со всем бандлами
  * `сomponents` - директория с компонентами для приложениями
  * `layers` - различные лайаут компоненты, сам лайаут и page компоненты

## Основные модули
* `@tramvai/module-server` - обработка запросов клиентов и различные апи сервисы. [Дока](https://tramvai.dev/docs/references/modules/server)
* `@tramvai/module-render` - рендеринг html на стороне сервера включая React приложения. [Дока](https://tramvai.dev/docs/references/modules/render)
* `@tramvai/module-router` - реализация роутинга на проекте, поддерживает статичные роуты и получение данных из админке. [Дока](https://tramvai.dev/docs/references/modules/router)

## Что дальше
Этот темплейт работает на основе tramvai и стоит прочитать [документацию по tramvai](https://tramvai.dev/docs/get-started/overview)
Сборка работает на основе tramvai-cli, документация [расположенна тут](https://tramvai.dev/docs/references/cli)
