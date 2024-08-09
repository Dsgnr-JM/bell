/* Iconos disponibles para el Bell.js*/

const $icons = {
  info: `<svg width="20px" height="20px" class="bell" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 8V8.5M12 12V16M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" class="bell-path" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  error: `<svg width="20px" height="20px" class="bell" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Page-1" stroke="none" stroke-width="1" class="bell-path" fill="none" fill-rule="evenodd">
      <g id="add" fill="currentColor" class="bell-path" transform="translate(42.666667, 42.666667)">
          <path class="bell-path" d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error">

</path>
      </g>
  </g>
</svg>`,
  warning: `<svg width="20px" height="20px" class="bell"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="17" r="1" fill="currentColor" class="bell-path"/>
  <path class="bell-path" d="M12 10L12 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path class="bell-path" d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  check: `<svg width="20px" height="20px" class="bell"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path class="bell-path" d="M16 3.93552C14.795 3.33671 13.4368 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.662 20.9814 11.3283 20.9451 11M21 5L12 14L9 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

/**
 * Estado del Bell mantiene la conconrdancia entre elementos desde tiempo y posicion.
 * @param {Number | Null} bellState.timeScreen
 * @param {String | Null} bellState.position
 * */
const bellState = {
  timeScreen: null,
  position: null,
  num: 0,
  withDescription: false,
  timeBetween: 0,
  maxHeight: 1000
};

class Bell {
  $bellContainer;
  $bellNums;
  $bellParent;

  /**
   * Bell.js es un proyecto OpenSource creado por JotaDev, para crear de manera rapida alertas parecidas a Sonner en cualquier proyectos vanilla y sin necesidad de React.
   * @author JotaDev <https://jotade0.vercel.app>
   * @param {Object} text - Objeto con las propiedades title y description
   * @param {String} text.title - Titulo de la alerta
   * @param {String} text.description - Descripcion de la alerta
   * @typedef {'info' | 'warning' | 'check' | 'error'} TipoAlerta
   * @typedef {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'top-center' | 'bottom-center'} TipoPosition
   * @typedef {'ease-in' | 'ease-in-out' | 'bound' | 'bound-2' } TipoAnimacion
   * @param {TipoAlerta} type - Se indica el tipo de alerta
   * @param {Object} options - Opciones adicionales para la alerta
   * @param {Boolean} options.animate - Animacion para la alerta
   * @param {Boolean} options.isColored - Coloreado de alertas
   * @param {Number} options.transitionDuration - Duracion de las transiciones
   * @param {TipoPosition} options.position - Posicion de la alerta
   * @param {TipoAnimacion} options.typeAnimation - Tipo de animacion
   * @param {Number} options.timeScreen - Tiempo en pantalla
   * @param {Boolean} options.expand - Efecto de Expansion
   * @returns {Bell} - Clase Bell
   */
  constructor(text, type, options) {
    this.text = text;
    this.type = type;
    this.animate = options?.animate ?? false;
    this.isColored = options?.isColored ?? false;
    this.transitionDuration = options?.transitionDuration ?? 300;
    this.position = bellState.position ?? options?.position ?? "bottom-right";
    this.typeAnimation = options?.typeAnimation ?? "fade-in";
    this.timeScreen = bellState.timeScreen ?? options?.timeScreen ?? 3000;
    this.expand = options?.expand ?? false;
    if (!bellState.timeScreen) bellState.timeScreen = this.timeScreen;

    if (!bellState.position) bellState.position = this.position;

    this.$bellContainer = document.createElement("li");
    const classContainer = ["bell_container", this.position];
    const $bellIcon = document.createElement("span");
    const $bellTextContainer = document.createElement("div");
    const $bellTitle = document.createElement("h3");
    const insertText = [];

    $bellTextContainer.classList.add("bell_text-container");

    if (this.isColored) {
      classContainer.push(type);
    }

    this.$bellContainer.classList.add(...classContainer);
    this.$bellContainer.classList.add(this.typeAnimation)

    $bellIcon.classList.add("bell_icon");
    $bellIcon.innerHTML = $icons[this.type];

    $bellTitle.classList.add("bell_title");
    $bellTitle.textContent = this.text.title ?? "Text here";
    insertText.push($bellTitle);

    //  || bellState.withDescription

    if (this.text.description) {
      bellState.withDescription = true
      const $bellDescription = document.createElement("p");
      $bellDescription.classList.add("bell_description");
      $bellDescription.textContent = this.text.description ?? "Text here...";
      insertText.push($bellDescription);
    }

    $bellTextContainer.append(...insertText);
    this.$bellContainer.append($bellIcon, $bellTextContainer);
    this.$bellContainer.setAttribute("bell-num", bellState.num++)

    if (!this.animate) this.$bellContainer.style.transition = "none";

    this.$bellParent = document.querySelector(".bell_parent")


    if(!this.$bellParent){
      this.$bellParent = document.createElement("ol")
      this.$bellParent.classList.add("bell_parent")
      document.body.append(this.$bellParent)
    }
    if(this.expand){
      this.$bellContainer.classList.add("expand")
      this.$bellParent.classList.add("expand")
    }
    this.$bellParent.classList.add(this.position)

    this.$bellParent.append(this.$bellContainer);
    bellState.timeBetween = Number((document.querySelectorAll(".bell_container").length - 1).toString() + "0")
    this.$bellContainer.style.transitionDuration = `${this.transitionDuration}ms`;
    this.$bellContainer.style.transitionDelay = `${bellState.timeBetween}ms`
    this.$bellContainer.setAttribute("bell-height",this.$bellContainer.offsetHeight)
  }
  setPositions($bellNums, isRemove) {
    const $bellPrev = isRemove && this.$bellNums.length > 2 ? this.$bellNums[this.$bellNums.length - 3] :
      this.$bellNums[this.$bellNums.length - 1].previousElementSibling;
    if ($bellPrev?.className.includes("active"))
      $bellPrev.style.scale = ".94";
    let firstBell = $bellNums[$bellNums.length > 1 ? ($bellNums.length - 1) : 0]
    firstBell = firstBell ?? document.querySelector(".bell_container")
    if(firstBell) firstBell.style.scale = "1"
    if (
      $bellPrev?.className.includes("top-left") ||
      $bellPrev?.className.includes("top-right") ||
      $bellPrev?.className.includes("top-center")
    ) {
      $bellPrev.style.top = "45px";
      firstBell.style.top = "30px"
    }
    else if ($bellPrev?.className.includes("bell_container") && firstBell) {
      $bellPrev.className.includes("bell_container");
      $bellPrev.style.bottom = "45px"; firstBell.style.bottom = "30px"
    }
    if (this.$bellNums.length > 2) {
      const $bellPrevPrev = $bellPrev?.previousElementSibling;
      if ($bellPrevPrev?.className.includes("bell_container")) $bellPrevPrev.style.scale = ".88";
      if (
        ($bellPrev?.className.includes("top-right") ||
          $bellPrev?.className.includes("top-center") || 
          $bellPrev?.className.includes("top-left")) &&
        $bellPrevPrev?.className.includes("bell_container")
      )
        $bellPrevPrev.style.top = "60px";
      if (
        ($bellPrev?.className.includes("bottom-left") || $bellPrev?.className.includes("bottom-center") ||
                 $bellPrev?.className.includes("bottom-right")) &&
        $bellPrevPrev?.className.includes("bell_container")
      )
        $bellPrevPrev.style.bottom = "60px";
    }
    let top = 30;
    const $bellNumsArray =[...$bellNums]
    if( $bellNums && $bellNums[$bellNums.length - 1]) bellState.maxHeight = $bellNums[$bellNums.length - 1].offsetHeight;
    $bellNumsArray.reverse().forEach(($bell, i) => {
      $bell.style.height = `${bellState.maxHeight}px`;
      top += i > 0 ? (Number($bellNumsArray[i - 1]?.getAttribute("bell-height")) + 15) : 0;
      $bell.style.setProperty("--top", `${top}px`);
      this.$bellParent.style.setProperty("--height-parent",`${top}px`)
    });
  }
  removeOnClick() {
    this.$bellNums = document.querySelectorAll(".bell_container");
    const $bells = [...this.$bellNums].filter($bell => {
      return $bell.getAttribute("bell-num") !== this.$bellContainer.getAttribute("bell-num")
    })
    this.removeOfScreen($bells)

  }
  /**
   * Metodo que lanza el bellAlert y lo mues¨tra en pantalla
   */
  launch() {
    setTimeout(() => {
      this.$bellContainer.addEventListener("click", this.removeOnClick.bind(this))
      let time = this.timeScreen;
      this.$bellNums = document.querySelectorAll(`.bell_container.${this.position}`);
      this.setPositions(this.$bellNums)
      this.$bellContainer.classList.add("active");
      this.$bellParent.classList.add("active");
      const Timer = setTimeout(() => {
        this.removeOfScreen(this.$bellNums);
      }, time);
    }, 80)
  }
  /**
   * Metodo que remueve el bellAlert del DOM
   */
  removeOfScreen($bells) {
    /* Metodo que saca al bellAlert de la pantalla y remueve el elemento del DOM, ademas quita el hover */
    this.$bellContainer.classList.remove("active");
    $bells = Array.from($bells).filter($bell => $bell.className.includes("active"))
    this.setPositions($bells, $bells !== this.$bellNums)
    if (
      this.$bellContainer.className.includes("top-left") ||
      this.$bellContainer.className.includes("top-center") ||
      this.$bellContainer.className.includes("top-right")
    )
      this.$bellContainer.style.top = "-75px";
    if (
      this.$bellContainer.className.includes("bottom-left") ||
      this.$bellContainer.className.includes("bottom-center") ||
      this.$bellContainer.className.includes("bottom-right") 
    )
      this.$bellContainer.style.bottom = "-75px";

    setTimeout(() => {
      this.$bellContainer.remove();
      if (document.querySelectorAll(".bell_container").length === 0) {
        this.$bellParent.remove();
        bellState.position = null
        bellState.timeScreen = null
        bellState.withDescription = false
        bellState.num = 0
      }
    }, this.transitionDuration + bellState.timeBetween);
  }
}
// Atento Primero se crea la instancia y luego se lanza

export default Bell