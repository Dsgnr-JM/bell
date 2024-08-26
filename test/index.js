/* Iconos disponibles para el Bell.js*/

export const bIcons = {
  promise: `<svg xmlns="http://www.w3.org/2000/svg" width=40 height=40 viewBox="0 0 200 200"><radialGradient id="a" cx=".66" fx=".66" cy=".313" fy=".313" gradientTransform="scale(1.5)"><stop offset="0" stop-color="currentColor"/><stop offset=".3" stop-color="currentColor" stop-opacity=".9"/><stop offset=".6" stop-color="currentColor" stop-opacity=".6"/><stop offset=".8" stop-color="currentColor" stop-opacity=".3"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"/></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="currentColor" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"/></svg>`,
  info: `<svg width="40" height="40" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"/></svg>`,
  error: `<svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 42.667c117.803 0 213.333 95.53 213.333 213.333S373.803 469.333 256 469.333 42.667 373.803 42.667 256 138.197 42.667 256 42.667Zm48.917 134.25L256 225.835l-48.917-48.918-30.166 30.166L225.835 256l-48.918 48.917 30.166 30.166L256 286.165l48.917 48.918 30.166-30.166L286.165 256l48.918-48.917-30.166-30.166Z" fill-rule="evenodd"/></svg>`,
  warning: `<svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M30.555 25.219 18.036 3.783a2.675 2.675 0 0 0-3.782 0L1.734 25.219a2.674 2.674 0 0 0 0 3.781h28.82a2.671 2.671 0 0 0 .001-3.781zM14.992 11.478a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 0 1-3 0v-7zm1.509 13.508a1.5 1.5 0 1 1-.001-2.999 1.5 1.5 0 0 1 .001 2.999z"/></svg>`,
  success: `<svg width="40" height="40" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>`,
};

/**
 * Estado del Bell mantiene la conconrdancia entre elementos desde tiempo y posicion.
 * @param {Number | Null} bellState.screenTime
 * @param {String | Null} bellState.position
 * */
const bellState = {
  num: 0,
  distance:{
    x:30,
    y:30
  },
  gap:15,
  maxHeight: 1000
};
/**
 * @param {String} e
 * */
const _$ = e => document.querySelector(e)
/**
 * @param {String} e
 * */
const _$$ = e => document.querySelectorAll(e)
/**
 * @param {String} e
 * */
const $create = e => document.createElement(e)

export default class Bell {
  $bellContainer;
  $bellNums;
  $bellParent;
  timer;

  /**
   * Bell.js es un proyecto OpenSource creado por JotaDev, para crear de manera rapida alertas parecidas a Sonner en cualquier proyectos vanilla y sin necesidad de React.
   * @author JotaDev <https://jotade0.vercel.app>
   * @param {Object} text - Objeto con las propiedades title y description
   * @param {String} text.title - Titulo de la alerta
   * @param {String} text.description - Descripcion de la alerta
   * @typedef {'info' | 'warning' | 'success' | 'error'} TipoAlerta
   * @typedef {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'top-center' | 'bottom-center'} TipoPosition
   * @typedef {'ease-in' | 'ease-in-out' | 'bound' | 'bound-2' } TipoAnimacion
   * @param {TipoAlerta} type - Se indica el tipo de alerta
   * @param {Object} options - Opciones adicionales para la alerta
   * @param {Boolean} options.animate - Animacion para la alerta
   * @param {Boolean} options.isColored - Coloreado de alertas
   * @param {Number} options.transitionDuration - Duracion de las transiciones
   * @param {TipoPosition} options.position - Posicion de la alerta
   * @param {TipoAnimacion} options.typeAnimation - Tipo de animacion
   * @param {Number} options.screenTime - Tiempo en pantalla
   * @param {Boolean} options.expand - Efecto de Expansion
   * @param {String} options.customHTML - HTML customizable
   * @param {String} options.customStyles - Estilos customizable
   * @param {String} options.customIcon - Iconos customizable
   * @param {String} options.customClass - Clases CSS customizable
   * @param {Object} options.distance - Distancia de la alerta respecto a la pantalla
   * @param {Number} options.distance.x - Eje x
   * @param {Number} options.distance.y - Eje y
   * @param {Number} options.gap - Gapping entre alertas
   * @param {'button'|'click'} options.removeOn - Evento de remover la alerta
   * @param {|'colors','default'|'chackra'|'light'|'gradient'|String} options.theme - Tema de la alerta
   * @param {Boolean} options.timeline - Linea de tiempo
   * @returns {Bell} - Clase Bell
   */
  constructor(text, type, options={}) {
    this.text = text;
    this.type = type;
    const {animate=true,isColored=true,transitionDuration=300,position="bottom-right",typeAnimation="ease-in",screenTime=3000,expand=false,theme="default",customClass,customStyles,customIcon,customHTML,timeline,removeOn,distance,gap} = options
    this.transitionDuration = transitionDuration ?? 300
    this.position = position.split("-");
    this.classPosition = this.position.join(".")
    this.screenTime = screenTime;
    this.expand = expand;
    this.theme = options?.theme !== "default" && options?.theme
    this.customClass = customClass
    this.isColored = isColored
    this.styles = customStyles
    this.timeline = timeline ? "timeline" : ""
    this.removeEvent = removeOn
    bellState.distance.x = distance?.x ?? bellState.distance.x
    bellState.distance.y = distance?.y ?? bellState.distance.y
    bellState.gap = gap ?? bellState.gap

    this.$bellContainer = $create("li");
    const classContainer = ["b_c", ...this.position];
    this.$bellIcon = $create("span");
    if(!this.type || this.type == "none" || customIcon == "") this.$bellIcon.style.display = "none"
    this.$bellTextContainer = $create("div");

    this.$bellTextContainer.classList.add("b_t-c");

    const classAdd = [this.isColored && this.type,this.theme,this.customClass, this.timeline]

    classAdd.forEach(classItem => classItem && classContainer.push(classItem))


    this.$bellContainer.classList.add(...classContainer,typeAnimation);

    this.$bellIcon.classList.add("b_i");
    this.$bellIcon.innerHTML = customIcon ?? bIcons[this.type] ?? "";
    const exist = Object.keys(this.text).filter(i => i).map(item => {
      const tItem = item[0].toUpperCase() + item.substring(1)
      this[`$bell${tItem}`] = $create(item == 'description' ? 'p' : 'h3')
      this[`$bell${tItem}`].classList.add(item == 'description' ? 'b_d' : 'b_t')
      this[`$bell${tItem}`].textContent = this.text[item]
      return this[`$bell${tItem}`]
    })

    this.$bellTextContainer.append(...exist);
    this.$bellContainer.append(this.$bellIcon, this.$bellTextContainer);
    this.$bellContainer.setAttribute("bell-num", bellState.num++)

    this.$bellContainer.style.transition = `${this.transitionDuration}ms ease all`
    if (!animate) {
      [this.$bellContainer, this.$bellTextContainer].forEach(i => i.style.transition = "none")
    }

    this.$bellParent = _$(`.b_p.${this.classPosition}`)


    if (!this.$bellParent) {
      this.$bellParent = $create("ol")
      this.$bellParent.classList.add("b_p")
      document.body.append(this.$bellParent)
    }
    if (this.expand) {
      this.$bellParent.classList.add("expand")
    }
    if(customStyles){
      const keys = Object.keys(customStyles)

      keys.forEach(key => {
        const element = key == "container" ? this.$bellContainer : key == "title" ? this.$bellTitle : key == "description" ? this.$bellDescription : this.$bellIcon.querySelector("svg")
        if(element)Object.entries(customStyles[key]).forEach(([prop, val]) => {
          element.style.setProperty(prop,val)
          if(prop == "--b_w") this.$bellParent.style.setProperty(prop,val)
          })
        })
    }
    if(customHTML) this.$bellContainer.innerHTML = customHTML
    this.$bellParent.classList.add(...this.position)

    this.$bellParent.append(this.$bellContainer);
    this.$bellParent.style.setProperty("--b_x", bellState.distance.x + "px")
  }

  /**
   * @param {Promise} promise
   * @param {Array} states
   * */

  promise(promise, states) {
    this.$bellContainer.classList.remove(this.type)
    this.$bellContainer.classList.add("pending")
    const $title = $create("h3")
    const $icon = $create("span")
    $icon.classList.add("promise")
    $icon.innerHTML = bIcons["promise"];
    this.$bellIcon.append($icon)
    $title.classList.add(["b_t_p"])
    this.$bellTextContainer.querySelector(".b_d")?.remove()
    this.$bellTextContainer.append($title)
    $title.textContent = states.pending
    this.launch(true)
    promise.then(() => {
      this.#changeState("success",this.$bellNums,states)
    }).catch((e) => {
      this.#changeState("error",this.$bellNums,states)
    })
  }
  #changeState(state,$bell,states){
      this.$bellIcon.innerHTML = bIcons[state]
      if(this.isColored) this.$bellContainer.classList.add(state)
      this.$bellContainer.classList.remove("pending")
      this.$bellContainer.classList.add("complete")
      this.$bellTitle.textContent = states[state]  
      if(this.timeline){
        this.#initTimeline()
      }
      this.timer = setTimeout(() => {
        this.dismiss($bell)
      }, this.screenTime)
  }

  #initTimeline(){
    this.$bellContainer.classList.add("init_count")
    this.$bellContainer.style.setProperty("--t_an", this.screenTime + "ms")
  }


  setPositions($bellNums, isRemove) {
    const {length} = $bellNums
    const $bells = [...$bellNums].reverse()
    const firstBell = $bells[0]
    let scale = 1
    let yDistance = bellState.distance.y

    if($bells.length < 1) return

    let yOrigin = firstBell.className.includes("top") ? "top" : "bottom"
    let xOrigin = firstBell.className.includes("left") ? "left" : "right"
    $bells.forEach(($bItem,i) => {
      $bItem.style.scale = scale
      $bItem.style[yOrigin] = yDistance + "px"
      if(i < 2){
        scale = (1 - ((i+1) * 0.06)).toFixed(2)
         yDistance += bellState.gap
      }
  })
    let top = bellState.distance.y;
    if ($bells && firstBell) bellState.maxHeight = firstBell?.getAttribute("bell-height");
    $bells.forEach(($bell, i) => {
      $bell.style.height = `${bellState.maxHeight}px`;
      top += i > 0 ? (Number($bells[i - 1]?.getAttribute("bell-height"))) + 15: 0;
      $bell.style.setProperty("--top", `${top}px`);
      this.$bellParent.style.setProperty("--height-parent", `${top}px`)
    });
  }
  /**
   * Metodo que lanza el bellAlert y lo mues¨tra en pantalla
   */
  launch(isPromise) {
    const {height} = this.$bellContainer.getBoundingClientRect()
    this.$bellContainer.setAttribute("bell-height", height)
    this.$bellContainer.style.setProperty("--b_h",height + "px")
    setTimeout(() => {
      if(this.removeEvent == "click"){
        this.$bellContainer.addEventListener("click", this.dismiss.bind(this))
      }
      if(this.removeEvent == "button"){
        const $closeB = $create("button")
      $closeB.className = "b_close"
        $closeB.innerHTML = `<svg width="40" height="40" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>
`

      this.$bellContainer.appendChild($closeB)
      $closeB.addEventListener("click", this.dismiss.bind(this))
      }
      this.$bellNums = _$$(`.b_c.${this.classPosition}`);
      this.setPositions(this.$bellNums)
      this.$bellContainer.classList.add("active");
      if (!isPromise) {
        if(this.timeline){
          this.#initTimeline()
        }
        this.timer = setTimeout(() => {
          this.dismiss(this.$bellNums);
        }, this.screenTime);
      }
    }, 100)
  }

  /**
   * Metodo que remueve el bellAlert del DOM
   */
  dismiss() {
    clearTimeout(this.timer)
    /* Metodo que saca al bellAlert de la pantalla y remueve el elemento del DOM, ademas quita el hover */
    this.$bellNums = _$$(`.b_c.active.${this.classPosition}`);
    let $bells = [...this.$bellNums].filter($bell => {
      return $bell.getAttribute("bell-num") !== this.$bellContainer.getAttribute("bell-num")
    })
    this.$bellContainer.classList.remove("active");
    this.setPositions($bells)
    if (
      this.$bellContainer.className.includes("top")
    )
      this.$bellContainer.style.top = "-75px";
    else 
      this.$bellContainer.style.bottom = "-75px";

    setTimeout(() => {
      this.$bellContainer.remove();
      if (_$$(`.b_c.${this.classPosition}`).length === 0) {
        this.$bellParent.remove();
        bellState.num = 0
      }
    }, this.transitionDuration);
  }
}
// Atento Primero se crea la instancia y luego se lanza
