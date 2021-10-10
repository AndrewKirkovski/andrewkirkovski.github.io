import React, { useCallback, useEffect, useState } from 'react';
import { goto } from './goto';
import { playSound } from './playSound';
import { Screen } from './Screeen';
import { ChooseCake, ChoosePlace, Stuff } from './ChoosePlace';
import { Text } from './Text';
import './App.scss';

let musicOn: boolean = false;

interface IScriptItem {
  code?: string;
  music?: string;
  bg: string,
  text: string,
  avatar: string,
  name: string,
  clickAway: boolean,
  Component?: React.FC<{ onDone: (goto?: string) => void }>,
}

const introBranch: Array<IScriptItem> = [
  {
    music: 'music',
    bg: 'stars',
    avatar: 'normal',
    name: 'Либуся',
    text: 'Ой, где это я',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'cry',
    name: 'Либуся',
    text: 'Я надеялся видео будет более длинным',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'cry',
    name: 'Либуся',
    text: 'Я ожидал большего',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'cry',
    name: 'Либуся',
    text: 'Я ожидал большего, как он мог так поступить',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'think',
    name: 'Либуся',
    text: 'Врочем там был этот странный QR код который меня привел сюда',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'wut',
    name: 'Либуся',
    text: 'Wait, это что мое имя?',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'normal',
    name: 'Либуся',
    text: 'Ну и ладно',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'okay',
    name: 'Либуся',
    text: 'Ну и ладно, все нормально',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'okk',
    name: 'Либуся',
    text: 'Ну и ладно, все нормально, так и должно быть',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'normal',
    name: 'Либуся',
    text: 'Посмотрим что тут у нас',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'normal',
    name: 'Либуся',
    text: 'Посмотрим что тут у нас. Наверное настоящее видео в конце этого...',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'think',
    name: 'Либуся',
    text: 'Посмотрим что тут у нас. Наверное настоящее видео в конце этого......',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'normal',
    name: 'Либуся',
    text: 'Посмотрим что тут у нас. Наверное настоящее видео в конце этой штуки',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'think',
    name: 'Либуся',
    text: 'Но вообще я подозреваю, что мне надо посмотреть это в более приватной обстановке',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'phone',
    name: 'Либуся',
    text: 'И не с телефона, как тут вообще что-то увидеть',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'sus',
    name: 'Либуся',
    text: '(Надеюсь это мои реальные мысли а не заскриптованный текст в коде)',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'normal',
    name: 'Либуся',
    text: 'Осмотримся и проверим где я',
    clickAway: true,
  },
  {
    bg: 'stars',
    avatar: 'normal',
    name: '',
    text: '',
    clickAway: false,
    Component: ChoosePlace
  },
]

const notHomeBranch: Array<IScriptItem> = [
  {
    code: 'nothome',
    bg: 'party',
    avatar: 'normal',
    name: 'Party Animal',
    text: 'Ну ладно, посмотрю потом',
    clickAway: true,
  },
  {
    bg: 'party',
    avatar: 'normal',
    name: 'Party Animal',
    text: 'Ну ладно, посмотрю потом. Теперь пора на парти!',
    clickAway: true,
  },
  {
    bg: 'party',
    avatar: 'normal',
    name: 'Party Animal',
    text: 'Ну ладно, посмотрю потом. Теперь пора на парти!',
    clickAway: false,
    Component: () => {
      goto('https://coub.com/view/1mwt6i');
      return null;
    }
  },
]

const homeBranch: Array<IScriptItem> = [
  {
    code: 'home',
    music: 'home',
    bg: 'home',
    avatar: 'normal',
    name: 'Либран',
    text: 'Вот, я дома',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'normal',
    name: 'Либран',
    text: 'Вот, я дома. Тут тихо и спокойно.',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'surprise',
    name: 'Либран',
    text: 'Ой, что этот тут',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'surprise',
    name: 'Либран',
    text: 'Ой, что этот тут. Торт и ...',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'surprise',
    name: 'Либран',
    text: 'Ой, что этот тут. Торт и огромная кнопка ютуба?',
    clickAway: true,
  },
  {
    code: 'choice',
    bg: 'home',
    avatar: 'normal',
    name: '',
    text: '',
    clickAway: false,
    Component: ChooseCake,
  },
]

const youtubeBranch: Array<IScriptItem> = [
  {
    code: 'youtube',
    bg: 'home',
    avatar: 'normal',
    name: 'Либран',
    text: 'Я думаю нажать кнопку.',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'normal',
    name: 'Либран',
    text: 'Кнопка думает о том чтобы нажаться.',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'normal',
    name: 'Либран',
    text: 'Напряжение нарастает',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: 'Я недавно читал статью про кнопки',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: 'Кно́пка — механическое устройство для передачи сигнала/ввода информации, элемент интерфейса человек-машина: элементарный физический механизм передачи электрического сигнала различным устройствам путём замыкания или размыкания двух или более контактов. ',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: 'По сути своей является датчиком внешнего физического воздействия (усилия нажатия), передающим далее факт такового соединённым с ним устройствам. Для пользователя термин «кнопка» ограничен крышкой, частью конструктива механизма «кнопка», на которую он, собственно, и производит нажатие',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: 'В более широком смысле кнопка — некая ограниченная поверхность, нажатие на которую является событием (не обязательно вызывающим коммутацию электрической цепи), которое приводит к ответной реакции связанного с ней устройства',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: 'Замыкание (размыкание) контактов кнопки происходит при приложении некоторого, заданного конструктивно, усилия вдоль (или в пределах допустимого угла отклонения) воображаемой оси нажатия, которая чаще всего перпендикулярна к плоскости крепления кнопки.',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: 'Два (три, в случае переключающего) контакта, коммутирующих сигнальные линии в процессе нажатия кнопки, называются контактной группой. Кнопка может содержать как одну, так и несколько контактных групп — нормально разомкнутых, нормально замкнутых, переключающих — в любой их комбинации.',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: '...',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: '... ...',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'think',
    name: 'Либран',
    text: '... ... ...',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'cmon',
    name: 'Либран',
    text: 'ДАВАЙ УЖЕ ВИДЕО',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'ryo',
    name: '',
    text: 'Окей, окей',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'ryo',
    name: '',
    text: 'Кнопка нажалась, видео запускается',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'ryo',
    name: '',
    text: 'Кнопка нажалась, видео запускается',
    clickAway: false,
    Component: () => {
      alert('тут видео')
      // goto('https://coub.com/view/1mwt6i');
      return null;
    }
  },
]

const cakeBranch: Array<IScriptItem> = [
  {
    code: 'cake',
    bg: 'home',
    avatar: 'hungry',
    name: 'Либран',
    text: 'Этот торт так и манит.',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'hungry',
    name: 'Либран',
    text: 'So succulent',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'hungry',
    name: 'Либран',
    text: 'Я не могу противиться',
    clickAway: true,
  },
  {
    bg: 'home',
    avatar: 'hungry',
    name: 'Либран',
    text: 'Я не могу противиться. Это выше меня',
    clickAway: true,
  },
  {
    bg: 'home',
    music: 'cake',
    avatar: 'hungry',
    name: 'Либран',
    text: 'Жажда Ничто! Торт Всё!',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: 'Не ешь меня добрый человек',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'wtf',
    name: 'Либран',
    text: '...',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: 'Я тебе еще пригожусь',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'sus',
    name: 'Либран',
    text: '...',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: 'Слушай!',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'cakewink',
    name: 'Торт',
    text: 'Слушай! Слушай!!!!!!!',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: 'Летим со мной!',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: 'Там много интересного!',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: 'Там много интересного! (тебе до безумия понравится)',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'sus',
    name: 'Либран',
    text: '...',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: '',
    clickAway: true,
    Component: ()=>{
      return <img src={process.env.PUBLIC_URL + "/cake.png"}></img>
    }
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: '',
    clickAway: true,
    Component: ()=>{
      return <img src={process.env.PUBLIC_URL + "/cake.png"} style={{height: '60vh', 'animation': 'shake 0.82s infinite cubic-bezier(.36,.07,.19,.97) both'}}></img>
    }
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: '',
    clickAway: true,
    Component: ()=>{
      return <img src={process.env.PUBLIC_URL + "/cake.png"} style={{height: '120vh', transform: 'translate(0, -20vh)', 'animation': 'shake2 0.82s infinite cubic-bezier(.36,.07,.19,.97) both'}}></img>
    }
  },
  {
    bg: 'cake',
    avatar: 'cake',
    name: 'Торт',
    text: '',
    clickAway: true,
    Component: ()=>{
      return <div style={{position: 'absolute', top: 0, 'right': 0, 'bottom': 0, 'left': 0, backgroundColor: 'black', zIndex: 1000}}></div>
    }
  },
  {
    bg: 'cake',
    avatar: 'okay',
    name: 'Либран',
    text: 'Кажется надо больше спать',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'okay',
    name: 'Либран',
    text: 'Режим сна вообще хорошо!',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'nope',
    name: 'Либранос',
    text: 'Или перезапустить вселенную >.<',
    clickAway: true,
  },
  {
    bg: 'cake',
    avatar: 'nope',
    name: 'Либранос',
    text: 'Или перезапустить вселенную >.<',
    clickAway: false,
    Component: ()=>{
      window.location.reload();
      return null;
    }
  },
]

const stuffBranch: Array<IScriptItem> = [
  {
    code: 'stuff',
    music: 'zen',
    bg: 'zen',
    avatar: 'think',
    name: 'Либран',
    text: 'Я решил подумать о жизни',
    clickAway: true,
  },
  {
    bg: 'zen',
    avatar: 'think',
    name: 'Либран',
    text: 'В голове роятся мысли',
    clickAway: true,
  },
  {
    bg: 'zen',
    avatar: 'think',
    name: 'Либран',
    text: 'Кажется я могу словить вот эту',
    clickAway: true,
  },
  {
    bg: 'zen',
    avatar: 'think',
    name: 'Либран',
    text: 'Или эту',
    clickAway: true,
  },
  {
    bg: 'zen',
    avatar: 'think',
    name: 'Либран',
    text: '',
    clickAway: true,
    Component: Stuff,
  },
  {
    bg: 'zen',
    avatar: 'okk',
    name: 'Либран',
    text: 'Черт, это не моя мысль',
    clickAway: true,
  },
  {
    bg: 'zen',
    avatar: 'okk',
    name: 'Либран',
    text: 'Что происходит',
    clickAway: true,
  },
  {
    bg: 'zen',
    avatar: 'okk',
    name: 'Либран',
    text: 'Срочно назад домой!',
    clickAway: true,
  },
  {
    bg: 'zen',
    avatar: 'okk',
    name: 'Либран',
    text: 'Это не моя мысль',
    clickAway: false,
    Component: ({ onDone }) => {
      playSound('home', true);
      onDone('choice');
      return null;
    }
  },
]

const script: Array<IScriptItem> = [
  ...introBranch,
  ...notHomeBranch,
  ...homeBranch,
  ...youtubeBranch,
  ...cakeBranch,
  ...stuffBranch,
];

function App() {

  const [index, setIndex] = useState<number>(0);

  const onClick = useCallback(() => {
    if (script[index].music) {
      playSound(script[index].music!, true);
    }
    if (index < script.length - 1 && script[index].clickAway) {
      setIndex(index + 1);
    }
  }, [index]);

  const step = script[index];

  const onDone = useCallback((step?: string) => {

    const next = step ? script.findIndex(p => p.code === step) : Math.max(index + 1, script.length - 1);
    if (script[next].music) {
      playSound(script[next].music!, true);
    }
    setIndex(next)
  }, [setIndex, index]);

  return (
    <div className="App" onClick={onClick}>
      <Screen bg={`${process.env.PUBLIC_URL + "/"}${step.bg}-bg.jpg`} Component={step.Component} onDone={onDone}>
        <Text avatar={step.avatar} name={step.name}>
          {step.text}
        </Text>
      </Screen>
    </div>
  );
}

export default App;
