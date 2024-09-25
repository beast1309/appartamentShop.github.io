$(function () {
    $('#startTest').on('click', function () {
        window.location.href = 'test.html'
    })

    $('.header__logo').on('click', function () {
        window.location.href = 'index.html'
    })

    $('.footer__logo').on('click', function () {
        window.location.href = 'index.html'
    })

    const questionsNext = document.getElementById('questionsNext')
    const questionsPrev = document.getElementById('questionsPrev')
    const questionOne = document.querySelectorAll('#question')
    const script = document.querySelectorAll('.questions__question-radio__label')
    const scriptSpan = document.querySelectorAll('.questions__question-radio__span')
    const questionTitle = document.querySelector('.questions__question-title')
    const questionSubtitle = document.querySelector('.questions__question-subtitle')
    const questionsProgressbar = document.querySelector('.questions__question-progressbar__meter')
    const questionContainer = document.querySelector('.questions__question')
    const questionForm = document.getElementById('questionsForm')

    questionsNext.addEventListener('click', function () {
        questionOne.forEach((item) => {
            if (item.checked == true) {
                if (item.value == 1) {
                    $(questionContainer).removeClass('--scriptOne')
                    $(questionContainer).removeClass('--scriptTwo')
                    $(questionContainer).removeClass('--scriptThree')
                    $(questionContainer).removeClass('--scriptFour')
                    $(questionContainer).removeClass('--scriptFive')
                    $(questionContainer).removeClass('--scriptSix')
                    $(questionContainer).toggleClass('--scriptOne')

                    questionsProgressbar.value += 1

                    if (questionsProgressbar.value == 2) {
                        questionTitle.innerText = 'Семейное положение'
                        questionSubtitle.innerText = 'Вопрос 2'
                        $(script[3]).remove()
                        $(script[4]).remove()
                        $(script[5]).remove()
                        scriptSpan[0].innerText = 'Квартира приобреталась в браке'
                        scriptSpan[1].innerText = 'Ипотека выплачивалась в браке'
                        scriptSpan[2].innerText = 'Квартира приобреталась и выплачивалась не в браке'
                    }

                    if (questionsProgressbar.value == 3) {
                        questionTitle.innerText = 'Несовершенолетние'
                        questionSubtitle.innerText = 'Вопрос 3'
                        $(script[2]).remove()
                        scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                        scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                    }

                    if (questionsProgressbar.value == 4) {
                        questionTitle.innerText = 'Квартира приобреталась с использованием кредитных средств, ипотека?'
                        questionSubtitle.innerText = 'Вопрос 4'
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }

                    if (questionsProgressbar.value == 5) {
                        questionTitle.innerText = 'При покупке использовался материнский капитал?'
                        questionSubtitle.innerText = 'Вопрос 5'
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }

                    if (questionsProgressbar.value == 6) {
                        $('.questions__question-radio__container').append(script[2])
                        questionTitle.innerText = 'Квартира находится в доме-памятнике?'
                        questionSubtitle.innerText = 'Вопрос 6'
                        scriptSpan[0].innerText = 'Вновь выявленный объект культурного наследия'
                        scriptSpan[1].innerText = 'Памятник архитектуры со списком непередаваемых элементов'
                        scriptSpan[2].innerText = 'Памятник архитектуры'
                    }

                    if (questionsProgressbar.value == 7) {
                        questionTitle.innerText = 'В квартире есть сохранившие право пользования?'
                        questionSubtitle.innerText = 'Вопрос 7'
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Не знаю'
                        scriptSpan[2].innerText = 'Нет'
                    }

                    if (questionsProgressbar.value == 8) {
                        questionTitle.innerText = 'Планируете ли при продаже покупать альтернативную квартиру?'
                        questionSubtitle.innerText = 'Вопрос 8'
                        $(script[2]).remove()
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }
                }
                else if (item.value == 2) {
                    $(questionContainer).removeClass('--scriptOne')
                    $(questionContainer).removeClass('--scriptTwo')
                    $(questionContainer).removeClass('--scriptThree')
                    $(questionContainer).removeClass('--scriptFour')
                    $(questionContainer).removeClass('--scriptFive')
                    $(questionContainer).removeClass('--scriptSix')
                    $(questionContainer).toggleClass('--scriptTwo')

                    questionsProgressbar.max = 6
                    questionsProgressbar.value += 1

                    if (questionsProgressbar.value == 2) {
                        questionTitle.innerText = 'В квартире есть сохранившие право пользования?'
                        questionSubtitle.innerText = 'Вопрос 2'
                        $(script[3]).remove()
                        $(script[4]).remove()
                        $(script[5]).remove()
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Не знаю'
                        scriptSpan[2].innerText = 'Нет'
                    }

                    if (questionsProgressbar.value == 3) {
                        questionTitle.innerText = 'Несовершенолетние'
                        questionSubtitle.innerText = 'Вопрос 3'
                        $(script[2]).remove()
                        scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                        scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                    }

                    if (questionsProgressbar.value == 4) {
                        $('.questions__question-radio__container').append(script[2])
                        questionTitle.innerText = 'Квартира находится в доме-памятнике?'
                        questionSubtitle.innerText = 'Вопрос 4'
                        scriptSpan[0].innerText = 'Вновь выявленный объект культурного наследия'
                        scriptSpan[1].innerText = 'Памятник архитектуры со списком непередаваемых элементов'
                        scriptSpan[2].innerText = 'Памятник архитектуры'
                    }

                    if (questionsProgressbar.value == 5) {
                        questionTitle.innerText = 'Планируете ли при продаже покупать альтернативную квартиру?'
                        questionSubtitle.innerText = 'Вопрос 5'
                        $(script[2]).remove()
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }
                }
                else if (item.value == 3) {
                    $(questionContainer).removeClass('--scriptOne')
                    $(questionContainer).removeClass('--scriptTwo')
                    $(questionContainer).removeClass('--scriptThree')
                    $(questionContainer).removeClass('--scriptFour')
                    $(questionContainer).removeClass('--scriptFive')
                    $(questionContainer).removeClass('--scriptSix')
                    $(questionContainer).toggleClass('--scriptThree')

                    questionsProgressbar.max = 6
                    questionsProgressbar.value += 1

                    if (questionsProgressbar.value == 2) {
                        questionTitle.innerText = 'Несовершенолетние'
                        questionSubtitle.innerText = 'Вопрос 2'
                        $(script[2]).remove()
                        $(script[3]).remove()
                        $(script[4]).remove()
                        $(script[5]).remove()
                        scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                        scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                    }

                    if (questionsProgressbar.value == 3) {
                        $('.questions__question-radio__container').append(script[2])
                        questionTitle.innerText = 'Квартира находится в доме-памятнике?'
                        questionSubtitle.innerText = 'Вопрос 3'
                        scriptSpan[0].innerText = 'Вновь выявленный объект культурного наследия'
                        scriptSpan[1].innerText = 'Памятник архитектуры со списком непередаваемых элементов'
                        scriptSpan[2].innerText = 'Памятник архитектуры'
                    }

                    if (questionsProgressbar.value == 4) {
                        $('.questions__question-radio__container').append(script[2])
                        questionTitle.innerText = 'В квартире есть сохранившие право пользования?'
                        questionSubtitle.innerText = 'Вопрос 4'
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Не знаю'
                        scriptSpan[2].innerText = 'Нет'
                    }

                    if (questionsProgressbar.value == 5) {
                        questionTitle.innerText = 'Планируете ли при продаже покупать альтернативную квартиру?'
                        questionSubtitle.innerText = 'Вопрос 5'
                        $(script[2]).remove()
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }
                }
                else if (item.value == 4) {
                    $(questionContainer).removeClass('--scriptOne')
                    $(questionContainer).removeClass('--scriptTwo')
                    $(questionContainer).removeClass('--scriptThree')
                    $(questionContainer).removeClass('--scriptFour')
                    $(questionContainer).removeClass('--scriptFive')
                    $(questionContainer).removeClass('--scriptSix')
                    $(questionContainer).toggleClass('--scriptFour')

                    questionsProgressbar.max = 4
                    questionsProgressbar.value += 1

                    if (questionsProgressbar.value == 2) {
                        questionTitle.innerText = 'Семейное положение'
                        questionSubtitle.innerText = 'Вопрос 2'
                        $(script[3]).remove()
                        $(script[4]).remove()
                        $(script[5]).remove()
                        scriptSpan[0].innerText = 'Квартира приобреталась в браке'
                        scriptSpan[1].innerText = 'Ипотека выплачивалась в браке'
                        scriptSpan[2].innerText = 'Квартира приобреталась и выплачивалась не в браке'
                    }

                    if (questionsProgressbar.value == 3) {
                        questionTitle.innerText = 'Планируете ли при продаже покупать альтернативную квартиру?'
                        questionSubtitle.innerText = 'Вопрос 3'
                        $(script[2]).remove()
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }
                }
                else if (item.value == 5) {
                    $(questionContainer).removeClass('--scriptOne')
                    $(questionContainer).removeClass('--scriptTwo')
                    $(questionContainer).removeClass('--scriptThree')
                    $(questionContainer).removeClass('--scriptFour')
                    $(questionContainer).removeClass('--scriptFive')
                    $(questionContainer).removeClass('--scriptSix')
                    $(questionContainer).toggleClass('--scriptFive')

                    questionsProgressbar.max = 6
                    questionsProgressbar.value += 1

                    if (questionsProgressbar.value == 2) {
                        questionTitle.innerText = 'Несовершенолетние'
                        questionSubtitle.innerText = 'Вопрос 2'
                        $(script[2]).remove()
                        $(script[3]).remove()
                        $(script[4]).remove()
                        $(script[5]).remove()
                        scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                        scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                    }

                    if (questionsProgressbar.value == 3) {
                        $('.questions__question-radio__container').append(script[2])
                        questionTitle.innerText = 'Квартира находится в доме-памятнике?'
                        questionSubtitle.innerText = 'Вопрос 3'
                        scriptSpan[0].innerText = 'Вновь выявленный объект культурного наследия'
                        scriptSpan[1].innerText = 'Памятник архитектуры со списком непередаваемых элементов'
                        scriptSpan[2].innerText = 'Памятник архитектуры'
                    }

                    if (questionsProgressbar.value == 4) {
                        $('.questions__question-radio__container').append(script[2])
                        questionTitle.innerText = 'В квартире есть сохранившие право пользования?'
                        questionSubtitle.innerText = 'Вопрос 4'
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Не знаю'
                        scriptSpan[2].innerText = 'Нет'
                    }

                    if (questionsProgressbar.value == 5) {
                        questionTitle.innerText = 'Планируете ли при продаже покупать альтернативную квартиру?'
                        questionSubtitle.innerText = 'Вопрос 5'
                        $(script[2]).remove()
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }
                }
                else if (item.value == 6) {
                    $(questionContainer).removeClass('--scriptOne')
                    $(questionContainer).removeClass('--scriptTwo')
                    $(questionContainer).removeClass('--scriptThree')
                    $(questionContainer).removeClass('--scriptFour')
                    $(questionContainer).removeClass('--scriptFive')
                    $(questionContainer).removeClass('--scriptSix')
                    $(questionContainer).toggleClass('--scriptSix')

                    questionsProgressbar.max = 7
                    questionsProgressbar.value += 1

                    if (questionsProgressbar.value == 2) {
                        questionTitle.innerText = 'Семейное положение'
                        questionSubtitle.innerText = 'Вопрос 2'
                        $(script[3]).remove()
                        $(script[4]).remove()
                        $(script[5]).remove()
                        scriptSpan[0].innerText = 'Квартира приобреталась в браке'
                        scriptSpan[1].innerText = 'Ипотека выплачивалась в браке'
                        scriptSpan[2].innerText = 'Квартира приобреталась и выплачивалась не в браке'
                    }

                    if (questionsProgressbar.value == 3) {
                        questionTitle.innerText = 'Несовершенолетние'
                        questionSubtitle.innerText = 'Вопрос 3'
                        $(script[2]).remove()
                        scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                        scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                    }

                    if (questionsProgressbar.value == 4) {
                        questionTitle.innerText = 'Квартира приобреталась с использованием кредитных средств, ипотека?'
                        questionSubtitle.innerText = 'Вопрос 4'
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }

                    if (questionsProgressbar.value == 5) {
                        questionTitle.innerText = 'При покупке использовался материнский капитал?'
                        questionSubtitle.innerText = 'Вопрос 5'
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }

                    if (questionsProgressbar.value == 6) {
                        questionTitle.innerText = 'Планируете ли при продаже покупать альтернативную квартиру?'
                        questionSubtitle.innerText = 'Вопрос 6'
                        scriptSpan[0].innerText = 'Да'
                        scriptSpan[1].innerText = 'Нет'
                    }


                }
            }
        })

        if (questionsProgressbar.value == questionsProgressbar.max) {
            const questionFinalForm = document.createElement('form')
            const questionFinalLoad = document.createElement('button')
            const questionFinalInput = document.createElement('input')
            const questionFinalSubmit = document.createElement('button')
            const questionFinalText = document.createElement('p')
            const questionFinalSubtext = document.createElement('p')
            questionFinalForm.classList.add('questionFinalForm')
            questionFinalLoad.classList.add('questionFinalLoad')
            questionFinalLoad.classList.add('btn')
            questionFinalText.classList.add('questionFinalText')
            questionFinalLoad.innerText = 'Скачать'
            questionFinalInput.classList.add('questionFinalInput')
            $(questionFinalInput).attr('required', 'required')
            $(questionFinalInput).attr('placeholder', 'Email')
            questionFinalInput.type = 'email'
            questionFinalSubmit.classList.add('questionFinalSubmit')
            questionFinalSubmit.classList.add('btn')
            questionFinalSubmit.innerText = 'Отправить'
            questionTitle.innerText = 'Ваш персональный отчет готов!'
            questionFinalText.innerText = 'Или'
            questionFinalSubtext.innerText = 'Получите файл на ваш электронный адрес'

            $(questionContainer).removeClass('--scriptOne')
            $(questionContainer).removeClass('--scriptTwo')
            $(questionContainer).removeClass('--scriptThree')
            $(questionContainer).removeClass('--scriptFour')
            $(questionContainer).removeClass('--scriptFive')
            $(questionContainer).removeClass('--scriptSix')
            $(questionContainer).toggleClass('--scriptFinal')

            $(questionForm).remove()
            $(questionSubtitle).remove()
            $(questionContainer).append(questionFinalLoad)
            $(questionContainer).append(questionFinalText)
            $(questionContainer).append(questionFinalSubtext)
            $(questionContainer).append(questionFinalForm)
            $(questionFinalForm).append(questionFinalInput)
            $(questionFinalForm).append(questionFinalSubmit)
        }
    })

    questionsPrev.addEventListener('click', function () {
        if (questionContainer.classList.contains('--scriptOne')) {
            if (questionsProgressbar.value == 8) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Да'
                scriptSpan[1].innerText = 'Нет'
                scriptSpan[2].innerText = 'Не знаю'
                questionTitle.innerText = 'В квартире есть сохранившие право пользования?'
                questionSubtitle.innerText = 'Вопрос 7'
            }

            else if (questionsProgressbar.value == 7) {
                questionsProgressbar.value -= 1
                scriptSpan[0].innerText = 'Вновь выявленный объект культурного наследия'
                scriptSpan[1].innerText = 'Памятник архитектуры со списком непередаваемых элементов'
                scriptSpan[2].innerText = 'Памятник архитектуры'
                questionTitle.innerText = 'Квартира находится в доме-памятнике?'
                questionSubtitle.innerText = 'Вопрос 6'
            }

            else if (questionsProgressbar.value == 6) {
                questionsProgressbar.value -= 1
                $(script[2]).remove()
                scriptSpan[0].innerText = 'Да'
                scriptSpan[1].innerText = 'Нет'
                questionTitle.innerText = 'При покупке использовался материнский капитал?'
                questionSubtitle.innerText = 'Вопрос 5'
            }

            else if (questionsProgressbar.value == 5) {
                questionsProgressbar.value -= 1
                scriptSpan[0].innerText = 'Да'
                scriptSpan[1].innerText = 'Нет'
                questionTitle.innerText = 'Квартира приобреталась с использованием кредитных средств, ипотека?'
                questionSubtitle.innerText = 'Вопрос 4'
            }

            else if (questionsProgressbar.value == 4) {
                questionsProgressbar.value -= 1
                scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                questionTitle.innerText = 'Несовершенолетние'
                questionSubtitle.innerText = 'Вопрос 3'
            }

            else if (questionsProgressbar.value == 3) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Квартира приобреталась в браке'
                scriptSpan[1].innerText = 'Ипотека выплачивалась в браке'
                scriptSpan[2].innerText = 'Квартира приобреталась и выплачивалась не в браке'
                questionTitle.innerText = 'Семейное положение'
                questionSubtitle.innerText = 'Вопрос 2'
            }

            else if (questionsProgressbar.value == 2) {
                questionsProgressbar.value = 1
                $(questionContainer.classList.remove('--scriptOne'))
                $('.questions__question-radio__container').append(script[3])
                $('.questions__question-radio__container').append(script[4])
                $('.questions__question-radio__container').append(script[5])
                scriptSpan[0].innerText = 'Договор купли-продажи'
                scriptSpan[1].innerText = 'Договор дарения'
                scriptSpan[2].innerText = 'Договор приватизации'
                questionTitle.innerText = 'Какие у вас правоустанавливающие документы?'
                questionSubtitle.innerText = 'Вопрос 1'
            }
        }

        if (questionContainer.classList.contains('--scriptTwo')) {
            if (questionsProgressbar.value == 5) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Вновь выявленный объект культурного наследия'
                scriptSpan[1].innerText = 'Памятник архитектуры со списком непередаваемых элементов'
                scriptSpan[2].innerText = 'Памятник архитектуры'
                questionTitle.innerText = 'Квартира находится в доме-памятнике?'
                questionSubtitle.innerText = 'Вопрос 4'
            }

            else if (questionsProgressbar.value == 4) {
                questionsProgressbar.value -= 1
                $(script[2]).remove()
                scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                questionTitle.innerText = 'Несовершенолетние'
                questionSubtitle.innerText = 'Вопрос 3'
            }

            else if (questionsProgressbar.value == 3) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Да'
                scriptSpan[1].innerText = 'Нет'
                scriptSpan[2].innerText = 'Не знаю'
                questionTitle.innerText = 'В квартире есть сохранившие право пользования?'
                questionSubtitle.innerText = 'Вопрос 2'
            }

            else if (questionsProgressbar.value == 2) {
                questionsProgressbar.value = 1
                $(questionContainer.classList.remove('--scriptTwo'))
                $('.questions__question-radio__container').append(script[3])
                $('.questions__question-radio__container').append(script[4])
                $('.questions__question-radio__container').append(script[5])
                scriptSpan[0].innerText = 'Договор купли-продажи'
                scriptSpan[1].innerText = 'Договор дарения'
                scriptSpan[2].innerText = 'Договор приватизации'
                questionTitle.innerText = 'Какие у вас правоустанавливающие документы?'
                questionSubtitle.innerText = 'Вопрос 1'
            }
        }

        if (questionContainer.classList.contains('--scriptThree')) {
            if (questionsProgressbar.value == 5) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Да'
                scriptSpan[1].innerText = 'Нет'
                scriptSpan[2].innerText = 'Не знаю'
                questionTitle.innerText = 'В квартире есть сохранившие право пользования?'
                questionSubtitle.innerText = 'Вопрос 4'
            }

            else if (questionsProgressbar.value == 4) {
                questionsProgressbar.value -= 1
                scriptSpan[0].innerText = 'Вновь выявленный объект культурного наследия'
                scriptSpan[1].innerText = 'Памятник архитектуры со списком непередаваемых элементов'
                scriptSpan[2].innerText = 'Памятник архитектуры'
                questionTitle.innerText = 'Квартира находится в доме-памятнике?'
                questionSubtitle.innerText = 'Вопрос 3'
            }

            else if (questionsProgressbar.value == 3) {
                questionsProgressbar.value -= 1
                $(script[2]).remove()
                scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                questionTitle.innerText = 'Несовершенолетние'
                questionSubtitle.innerText = 'Вопрос 2'
            }

            else if (questionsProgressbar.value == 2) {
                questionsProgressbar.value = 1
                $(questionContainer.classList.remove('--scriptThree'))
                $('.questions__question-radio__container').append(script[2])
                $('.questions__question-radio__container').append(script[3])
                $('.questions__question-radio__container').append(script[4])
                $('.questions__question-radio__container').append(script[5])
                scriptSpan[0].innerText = 'Договор купли-продажи'
                scriptSpan[1].innerText = 'Договор дарения'
                scriptSpan[2].innerText = 'Договор приватизации'
                questionTitle.innerText = 'Какие у вас правоустанавливающие документы?'
                questionSubtitle.innerText = 'Вопрос 1'
            }
        }

        if (questionContainer.classList.contains('--scriptFour')) {
            if (questionsProgressbar.value == 3) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Квартира приобреталась в браке'
                scriptSpan[1].innerText = 'Ипотека выплачивалась в браке'
                scriptSpan[2].innerText = 'Квартира приобреталась и выплачивалась не в браке'
                questionTitle.innerText = 'Семейное положение'
                questionSubtitle.innerText = 'Вопрос 2'
            }

            else if (questionsProgressbar.value == 2) {
                questionsProgressbar.value = 1
                $(questionContainer.classList.remove('--scriptFour'))
                $('.questions__question-radio__container').append(script[3])
                $('.questions__question-radio__container').append(script[4])
                $('.questions__question-radio__container').append(script[5])
                scriptSpan[0].innerText = 'Договор купли-продажи'
                scriptSpan[1].innerText = 'Договор дарения'
                scriptSpan[2].innerText = 'Договор приватизации'
                questionTitle.innerText = 'Какие у вас правоустанавливающие документы?'
                questionSubtitle.innerText = 'Вопрос 1'
            }
        }

        if (questionContainer.classList.contains('--scriptFive')) {
            if (questionsProgressbar.value == 5) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Да'
                scriptSpan[1].innerText = 'Нет'
                scriptSpan[2].innerText = 'Не знаю'
                questionTitle.innerText = 'В квартире есть сохранившие право пользования?'
                questionSubtitle.innerText = 'Вопрос 4'
            }

            else if (questionsProgressbar.value == 4) {
                questionsProgressbar.value -= 1
                scriptSpan[0].innerText = 'Вновь выявленный объект культурного наследия'
                scriptSpan[1].innerText = 'Памятник архитектуры со списком непередаваемых элементов'
                scriptSpan[2].innerText = 'Памятник архитектуры'
                questionTitle.innerText = 'Квартира находится в доме-памятнике?'
                questionSubtitle.innerText = 'Вопрос 3'
            }

            else if (questionsProgressbar.value == 3) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Квартира приобреталась в браке'
                scriptSpan[1].innerText = 'Ипотека выплачивалась в браке'
                scriptSpan[2].innerText = 'Квартира приобреталась и выплачивалась не в браке'
                questionTitle.innerText = 'Семейное положение'
                questionSubtitle.innerText = 'Вопрос 2'
            }

            else if (questionsProgressbar.value == 2) {
                questionsProgressbar.value = 1
                $(questionContainer.classList.remove('--scriptFive'))
                $('.questions__question-radio__container').append(script[3])
                $('.questions__question-radio__container').append(script[4])
                $('.questions__question-radio__container').append(script[5])
                scriptSpan[0].innerText = 'Договор купли-продажи'
                scriptSpan[1].innerText = 'Договор дарения'
                scriptSpan[2].innerText = 'Договор приватизации'
                questionTitle.innerText = 'Какие у вас правоустанавливающие документы?'
                questionSubtitle.innerText = 'Вопрос 1'
            }
        }

        if (questionContainer.classList.contains('--scriptSix')) {
            if (questionsProgressbar.value == 6) {
                questionsProgressbar.value -= 1
                scriptSpan[0].innerText = 'Да'
                scriptSpan[1].innerText = 'Нет'
                questionTitle.innerText = 'Квартира приобреталась с использованием кредитных средств, ипотека?'
                questionSubtitle.innerText = 'Вопрос 5'
            }

            else if (questionsProgressbar.value == 5) {
                questionsProgressbar.value -= 1
                scriptSpan[0].innerText = 'Да'
                scriptSpan[1].innerText = 'Нет'
                questionTitle.innerText = 'При покупке использовался материнский капитал?'
                questionSubtitle.innerText = 'Вопрос 4'
            }

            else if (questionsProgressbar.value == 4) {
                questionsProgressbar.value -= 1
                scriptSpan[0].innerText = 'В квартире есть собственники-несовершеннолетние'
                scriptSpan[1].innerText = 'В квартире зарегистрированы несовершенолетние'
                questionTitle.innerText = 'Несовершенолетние'
                questionSubtitle.innerText = 'Вопрос 3'
            }

            else if (questionsProgressbar.value == 3) {
                questionsProgressbar.value -= 1
                $('.questions__question-radio__container').append(script[2])
                scriptSpan[0].innerText = 'Квартира приобреталась в браке'
                scriptSpan[1].innerText = 'Ипотека выплачивалась в браке'
                scriptSpan[2].innerText = 'Квартира приобреталась и выплачивалась не в браке'
                questionTitle.innerText = 'Семейное положение'
                questionSubtitle.innerText = 'Вопрос 2'
            }

            else if (questionsProgressbar.value == 2) {
                questionsProgressbar.value = 1
                $(questionContainer.classList.remove('--scriptSix'))
                $('.questions__question-radio__container').append(script[3])
                $('.questions__question-radio__container').append(script[4])
                $('.questions__question-radio__container').append(script[5])
                scriptSpan[0].innerText = 'Договор купли-продажи'
                scriptSpan[1].innerText = 'Договор дарения'
                scriptSpan[2].innerText = 'Договор приватизации'
                questionTitle.innerText = 'Какие у вас правоустанавливающие документы?'
                questionSubtitle.innerText = 'Вопрос 1'
            }
        }
    })
});