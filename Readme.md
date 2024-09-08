## 피드백
* 새롭게 알게된 사실 
    * peer:형제요소들 중에서 형제요소의 상태가 변하면 자신이 상태가 변하도록해준다. 
    * peer-invalid 상태일 때를 쓴 이유는 peer이 visible일때 애니메이션이 안먹기 때문이다.
    * 또한 접근성 향상을 위해 이메일 힌트 부분을 aria-label로 읽어주면 좋다.
    * label은 스크린 리더가 모두 보이기 때문에 input과 꼭 연결해주는 것이 좋다
    * 나는 상위요소-하위요소 혹은 하위요소-하위요소 사이의 간격을 margin으로 처리하였는데
      상대방은 space-y를 이용해서 하위요소들간의 간격을 처리하였다.
      space도 적극적으로 활용할 것

* 나는 아래와 같이 input과 label을 사용할 때 label안에 input을 하위요소로 넣는 방향으로 사용하였다. 
    
``` javascript
 <label class="" for="e-mail"><input class="inputCss" type="email"placeholder="Email Address" required>
 <span class="sr-only">enter your email</span></label>
```
* 이런방법의 장점으로는 for과 id를 명시적으로 연결할 필요가 없다는 점과 html 구조가 간결하다는 장점이 있다.

* 하지만 상대는 input과 label을 분리시키는 방법을 선택하였다.
```javascript
 <input
        class="w-full ring-2 ring-grayscale-100 rounded-[15px] p-[32px] text-[22px] focus:outline-none focus:ring-2 focus:ring-02-Button focus:shadow-md peer"
        id="input_email"
        type="email"
        placeholder="Email Address"/>
<p
  class="absolute -top-5 right-0 bg-02-Box p-2 rounded-lg opacity-0 peer-invalid:opacity-100 transition ease-in delay-500 duration-300">
  Please provide a valid email address.
</p>
<label class="sr-only" for="input_email">Enter your email</lable>
```
* 이런 방법은 더 명확한 구조적 분리로 코드 가독성이 향상되고 
레이아웃 조정이 더 유연하다는 장점이 있다.




[figma](https://www.figma.com/design/55pbegEJwoNqjRnkU6Snnp/Sign-Up-Form-(Community)?node-id=3-2&node-type=CANVAS&t=u6IVzq44iQruckt9-0)



