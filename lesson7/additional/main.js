// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// let user = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address:
//         {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo:
//                 {
//                     lat: '-37.3159',
//                     lng: '81.1496'
//                 }
//         },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company:
//         {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
// }
class Main {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        };
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: catchPhrase,
            bs: bs
        };
    }
}

let main = new Main(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets');
console.log(main.address.geo.lng);
console.log(main.company.catchPhrase);
console.log(main.company.name);

//-------------------------------------------------------------------
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = arrayOfAttributesFunc(attrs);

        function arrayOfAttributesFunc(attrs) {
            let array = [];
            for (let i = 0; i < attrs.length; i++) {
                array.push({
                    nameOfAtt: attrs[i].nameOfAttribute,
                    descriptionOfAtt: attrs[i].descriptionOfAttribute
                });
            }
            return array;
        }
    }
}

let aAttributes = [
    {
        nameOfAttribute: "accesskey",
        descriptionOfAttribute: "Активация ссылки с помощью комбинации клавиш."
    },
    {
        nameOfAttribute: "coords",
        descriptionOfAttribute: "Устанавливает координаты активной области."
    },
    {
        nameOfAttribute: "download",
        descriptionOfAttribute: "Предлагает скачать указанный по ссылке файл."
    }
];

let divAttributes = [
    {
        nameOfAttribute: "align",
        descriptionOfAttribute: "Задает выравнивание содержимого тега <div>."
    },
    {
        nameOfAttribute: "title",
        descriptionOfAttribute: "Добавляет всплывающую подсказку к содержимому."
    }
];

let h1Attributes = [
    {
        nameOfAttribute: "align",
        descriptionOfAttribute: "Определяет выравнивание заголовка."
    }
];

let universalAttributes = [
    {
        nameOfAttribute: "accesskey",
        descriptionOfAttribute: "Позволяет получить доступ к элементу с помощью заданного сочетания клавиш."
    },
    {
        nameOfAttribute: "class",
        descriptionOfAttribute: "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."
    },
    {
        nameOfAttribute: "contenteditable",
        descriptionOfAttribute: "Сообщает, что элемент доступен для редактирования пользователем."
    },
    {
        nameOfAttribute: "contextmenu",
        descriptionOfAttribute: "Устанавливает контекстное меню для элемента."
    }
];

let inputAttributes = [
    {
        nameOfAttribute: "accept",
        descriptionOfAttribute: "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."
    },
    {
        nameOfAttribute: "accesskey",
        descriptionOfAttribute: "Переход к элементу с помощью комбинации клавиш."
    },
    {
        nameOfAttribute: "align",
        descriptionOfAttribute: "Определяет выравнивание изображения."
    }
];

let formAttributes = [
    {
        nameOfAttribute: "accept-charset",
        descriptionOfAttribute: "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные."
    },
    {
        nameOfAttribute: "action",
        descriptionOfAttribute: "Адрес программы или документа, который обрабатывает данные формы."
    },
    {
        nameOfAttribute: "autocomplete",
        descriptionOfAttribute: "Включает автозаполнение полей формы."
    }
];

let optionAttributes = [
    {
        nameOfAttribute: "disabled",
        descriptionOfAttribute: "Заблокировать для доступа элемент списка."
    },
    {
        nameOfAttribute: "label",
        descriptionOfAttribute: "Указание метки пункта списка."
    },
    {
        nameOfAttribute: "selected",
        descriptionOfAttribute: "Заранее устанавливает определенный пункт списка выделенным."
    }
];

let selectAttributes = [
    {
        nameOfAttribute: "accesskey",
        descriptionOfAttribute: "Позволяет перейти к списку с помощью некоторого сочетания клавиш."
    },
    {
        nameOfAttribute: "autofocus",
        descriptionOfAttribute: "Устанавливает, что список получает фокус после загрузки страницы."
    },
    {
        nameOfAttribute: "disabled",
        descriptionOfAttribute: "Блокирует доступ и изменение элемента."
    }
];

let aTag = new Tag("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.", aAttributes);
let divTag = new Tag("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.", divAttributes);
let h1Tag = new Tag("h1", "Тег <h1> представляет собой наиболее важный заголовок первого уровня", h1Attributes);
let spanTag = new Tag("span", "Тег <span> предназначен для определения строчных элементов документа", universalAttributes);
let inputTag = new Tag("input", "Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.", inputAttributes);
let formTag = new Tag("form", "Тег <form> устанавливает форму на веб-странице.", formAttributes);
let optionTag = new Tag("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.", optionAttributes);
let selectTag = new Tag("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.", selectAttributes);

console.log(divTag);
console.log(divTag.titleOfTag);
console.log(divTag.attrs[0].nameOfAtt);
console.log(divTag.attrs[0].descriptionOfAtt);

console.log(aTag.attrs[0].nameOfAtt);
console.log(h1Tag.attrs[0].nameOfAtt);
console.log(spanTag.attrs[0].nameOfAtt);
console.log(inputTag.attrs[0].nameOfAtt);
console.log(formTag.attrs[0].nameOfAtt);
console.log(optionTag.attrs[0].nameOfAtt);
console.log(selectTag.attrs[0].nameOfAtt);