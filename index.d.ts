// index.d.ts

declare module 'bell-alert' {

  export interface BellDistance {
  	x?: number,
  	y?:number
  }
  export interface BellStyles {
  	container?: Object,
  	title?: Object,
  	icon?: Object,
  	description?: Object
  }

  // Interface for notification options
  
  export interface BellOptions {
    animate?: boolean; // Enable animation (default: false)
    isColored?: boolean; // Use colored background (default: false)
    transitionDuration?: number; // Duration for animations (default: 300ms)
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'; // Position of notification (default: inherited from bellState)
    distance?: BellDistance;
    gap?: number;
    removeOn?: 'none'|'click'|'button';
    timeline?: boolean;
    customHTML?: string;
    customIcon?: string;
    customStyles?: BellStyles;
    customClass?: string;
    theme?: 'default'|'colors'|'light'|'gradient'|'chackra'|null;
    typeAnimation?: 'fade-in' | 'fade-out' | 'bound' | 'bound-2'; // Type of animation (default: 'fade-in')
    screenTime?: number; // Duration for which notification stays visible (default: 1500ms)
    expand?: boolean; // Enable hover effect to expand content (default: false)
  }

  // Interface for notification text content
  export interface BellText {
    title?: string;
    description?: string;
  }
  export interface BellState {
  	pending: string,
  	success: string,
  	error: string
  }

  // Class representing a notification alert
  export class Bell {
    constructor(text: BellText, type?: 'info' | 'warning' | 'success' | 'error' | 'promise'| 'none', options?: BellOptions);

    // Launches and displays the notification
    launch(): void;

    // Sets positions for multiple notifications to avoid overlapping
    setPositions(bellNums: HTMLElement[]): void;

    // Removes the notification from the DOM and animates its exit
    dismiss(bells: HTMLElement[]): void;
    
    promise(promise: Promise<T>, state: BellState):void
  }
}

interface BellIcons {
  promise: string;
  error: string;
  success: string;
  info: string;
  warning: string;
  none: string;
}

export const bIcons:BellIcons;

export default Bell;

