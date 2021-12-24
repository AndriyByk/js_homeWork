// Зробити свій розпорядок дня.
//  У вас має бути більше 10 асинхронних дій з рандомними затримками.
//  Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
//  Затримка має бути НЕ в порядку зростання, а будь-яка. При тому ваші дії мають бути синхронізовані.
//
//  Наприклад.
//     Прокинутись - 0.3с
//     Поснідати - 1с
//     Піти в душ - 0.5с
//     Дочекатись автобус - 3с
//     Пообідати - 1с
//     І так далі

// ============================
// via promises:
// ---not important part
let a = 10000;
let b = 24000;
let c = 18000;
let result = Math.random() * 10;

let luckyYou;
if (result >= 7)
    luckyYou = b;
else if (result > 3)
    luckyYou = c;
else
    luckyYou = a;

// ---main part
liveMyDay(luckyYou)
    .then(time => wakeUp(time))
    .then(time => drinkCoffee(time))
    .then(time => cleanTeeth(time))
    .then(time => wearClothes(time))
    .then(time => getToTheWork(time))
    .then(time => work(time))
    .then(time => haveLunch(time))
    .then(time => doingRestWork(time))
    .then(time => goingHome(time))
    .then(time => walkingDog(time))
    .then(time => readingBooks(time))
    .then(time => spendingFreeTime(time))
    .then(time => console.log(time));
// functions:
// --main function
function liveMyDay(dayPeriod) {
    return new Promise(resolve => {
        resolve(dayPeriod);
        console.log("My day is " + dayPeriod + " in its duration");
    });
}

// --others
function wakeUp(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 500;
                console.log("Wake up! Opened one eye..");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 3000);
    }));
}

function drinkCoffee(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 750;
                console.log("Drink coffee. My heart! Coffee is evil.");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 3500);
    }));
}

function cleanTeeth(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 600;
                console.log("Clean teeth. I`m lucky my sister is dentist.");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 3200);
    }));
}

function wearClothes(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 300;
                console.log("Wear clothes. I`m like a cabbage in all of that :(");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 3950);
    }));
}

function getToTheWork(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 1500;
                console.log("Get to the work. Tram. Finally I have time for reading Camus.");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 3650);
    }));
}

function work(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 2500;
                console.log("Work. My favourite job.. my favourite job..");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 4000);
    }));
}

function haveLunch(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 600;
                console.log("Have a lunch. Hmm. Hamburger is healthier then shaurma? ");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 3500);
    }));
}

function doingRestWork(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 2000;
                console.log("Doing rest of work. No, shaurma is healthier then hamburger. ");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 3300);
    }));
}

function goingHome(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 1600;
                console.log("Going home. Why I don`t want go home?..");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 4000);
    }));
}

function walkingDog(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 1000;
                console.log("Walking Dog. My old friend! Here we are..");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 2500);
    }));
}

function readingBooks(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                time -= 3000;
                console.log("Reading books. And I saw strange Ghost, which was going ahead.. ");
                console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve(time);
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 4200);
    }));
}

function spendingFreeTime(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (time > 0) {
                console.log("Spending free time!");
                // console.log("          There are still    " + time + "    to the end of my dayLife..")
                resolve("My day is over. The rest of my time of " + time + " is for sleeping.. zzzZZZ");
            } else {
                reject("I do not exist! My being is illusion!!..");
            }
        }, 3000);
    }));
}

//------------------------------------------------------
// via callbacks:

// main part
let error = "I do not exist! My being is illusion!!..";
liveMyDay1(luckyYou, (err, time) => {
    if (time < 0) {
        console.log(err);
    } else {
        wakeUp1(time, (err, time) => {
            if (time < 0) {
                console.log(err);
            } else {
                drinkCoffee1(time, (err, time) => {
                    if (time < 0) {
                        console.log(err);
                    } else {
                        cleanTeeth1(time, (err, time) => {
                            if (time < 0) {
                                console.log(err);
                            } else {
                                wearClothes1(time, (err, time) => {
                                    if (time < 0) {
                                        console.log(err);
                                    } else {
                                        getToTheWork1(time, (err, time) => {
                                            if (time < 0) {
                                                console.log(err);
                                            } else {
                                                work1(time, (err, time) => {
                                                    if (time < 0) {
                                                        console.log(err);
                                                    } else {
                                                        haveLunch1(time, (err, time) => {
                                                            if (time < 0) {
                                                                console.log(err);
                                                            } else {
                                                                doingRestWork1(time, (err, time) => {
                                                                    if (time < 0) {
                                                                        console.log(err);
                                                                    } else {
                                                                        goingHome1(time, (err, time) => {
                                                                            if (time < 0) {
                                                                                console.log(err);
                                                                            } else {
                                                                                walkingDog1(time, (err, time) => {
                                                                                    if (time < 0) {
                                                                                        console.log(err);
                                                                                    } else {
                                                                                        readingBooks1(time, (err, time) => {
                                                                                            if (time < 0) {
                                                                                                console.log(err);
                                                                                            } else {
                                                                                                spendingFreeTime1(time, (err, time) => {
                                                                                                    if (time < 0) {
                                                                                                        console.log(err);
                                                                                                    } else {
                                                                                                        console.log(time);
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});


// functions:
// --main function
function liveMyDay1(time, callback) {
    console.log("My day is " + time + " in its duration");
    callback(error, time);
}

// --others
function wakeUp1(time, callback) {
    setTimeout(() => {
        time -= 500;
        console.log("Wake up! Opened one eye..");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 3000);
}

function drinkCoffee1(time, callback) {
    setTimeout(() => {
        time -= 750;
        console.log("Drink coffee. My heart! Coffee is evil.");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 3500);
}

function cleanTeeth1(time, callback) {
    setTimeout(() => {
        time -= 600;
        console.log("Clean teeth. I`m lucky my sister is dentist.");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 3200);
}

function wearClothes1(time, callback) {
    setTimeout(() => {
        time -= 300;
        console.log("Wear clothes. I`m like a cabbage in all of that :(");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 3950);
}

function getToTheWork1(time, callback) {
    setTimeout(() => {
        time -= 1500;
        console.log("Get to the work. Tram. Finally I have time for reading Camus.");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 3650);
}

function work1(time, callback) {
    setTimeout(() => {
        time -= 2500;
        console.log("Work. My favourite job.. my favourite job..");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 4000);
}

function haveLunch1(time, callback) {
    setTimeout(() => {
        time -= 600;
        console.log("Have a lunch. Hmm. Hamburger is healthier then shaurma? ");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 3500);
}

function doingRestWork1(time, callback) {
    setTimeout(() => {
        time -= 2000;
        console.log("Doing rest of work. No, shaurma is healthier then hamburger. ");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 3300);
}

function goingHome1(time, callback) {
    setTimeout(() => {
        time -= 1600;
        console.log("Going home. Why I don`t want go home?..");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 4000);
}

function walkingDog1(time, callback) {
    setTimeout(() => {
        time -= 1000;
        console.log("Walking Dog. My old friend! Here we are..");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 2500);
}

function readingBooks1(time, callback) {
    setTimeout(() => {
        time -= 3000;
        console.log("Reading books. And I saw strange Ghost, which was going ahead.. ");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, time);
    }, 4200);
}

function spendingFreeTime1(time, callback) {
    setTimeout(() => {
        console.log("Spending free time!");
        console.log("          There are still    " + time + "    to the end of my dayLife..")
        callback(error, "My day is over. The rest of my time of " + time + " is for sleeping.. zzzZZZ");
    }, 3000);
}