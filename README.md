# drag and drop with react 👀


<br>

## 🏡 [Demo](https://pensive-kilby-e7f2dd.netlify.com/) 


<br>


### ⛳️ 목표

트렐로 클론에 사용할 드래그 드랍 기능을 구현한다

1. Drag and Drop API 를 이해한다

2. 한 개의 컬럼에서 드래그하여 정렬이 가능하도록 구현한다 

3. 여러개의 컬럼에서 드랍이 가능하도록 구현한다 

4. 모듈을 만들어 npm에 등록한다 

   

![드래그드랍](https://k.kakaocdn.net/dn/GV8eQ/btqAC0L7mpa/1IgjAtiZLbrFq93akwtod0/img.gif)




## 🌈 drag drop API

<br>

### 👆🏻 Draggable 속성

HTML 요소가 `HTML Drag and Drop API`를 이용해 드래그될 수 있는지 나타낸다. 

| 값    |                        |
| ----- | --------------------- |
| true  | 해당 요소를 드래그할 수 있음 |
| false | 해당 요소를 드래그할 수 없음 |


default값은 `auto`로 브라우저에 정의된 기본 동작을 따른다. 

<br>

#### ☑️ 기본적으로 드래그되는 HTML 요소

다음 HTML 요소들은 dragbble의 기본 값이 `true`이다. 

- 선택된 텍스트
- 이미지
- 링크

<br>

#### ☑️ 다른 HTML 요소를 드래그할 수 있게 하려면?

다음 세가지 작업이 필요하다

1. 드래그가 가능하도록 만들고자 하는 요소에 대한 `draggable` 속성을 **true**로 설정
2. `dragstart 이벤트 리스너` 추가
3. `dragstart 이벤트 리스너` 에 `drag data의 타입 및 값` 설정

`draggable`이 **false**인 경우, 텍스트가 선택된다


```html
<div draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'drag')">
  This is Draggable! 
</div

```
<br><br>

### 👇🏻 드랍 대상 지정하기 

어플리케이션의 대부분 영역은 데이터를 드랍할 수 있는 영역이 아니기 때문에 이벤트의 기본적인 처리는 드랍을 허용하지 않는다.
드랍이 허용되길 원한다면 **dragover 및 drop 이벤트** 에서 return false를 하거나 preventDefault를 호출하여 해당 이벤트를 취소하는 기본 처리를 막아야한다.


drag data는 데이터의 타입과 값을 가지고 있다. 드래그하는 동안 `dragenter` 이벤트와 `dragover` 이벤트 리스너에서 드래그되는 데이터 형식 `e.dataTransfer.types`을 통해 유효한 드랍 대상인지 확인할 수 있다. 

```js
if ([...event.dataTransfer.types].includes('text/html')) {
  // Do something
}
```

드래그 데이터의 `types` 속성은 자신만의 형식으로 지정이 가능하다. 가장 흔하게 사용되는 형식은 [여기](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)서 확인할 수 있다. 


### 드래그 이벤트

👆🏻 드래그 요소의 이벤트들 

|             | 이벤트    |
| ----------- | --------- |
| 드래그 시작 | dragstart |
| 드래그 중   | drag      |
| 드래그 끝   | dragend   |


👇🏻 드랍존 요소의 이벤트들 

|                      | 이벤트    |
| -------------------- | --------- |
| 드랍존 들어옴        | dragenter |
| 드랍존 안에서 움직임 | dragover  |
| 드랍존 벗어남        | dragleave |
| 드랍존 안에서 드랍함 | drop      |



## 향후 계획
