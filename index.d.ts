// index.d.ts

declare module 'bell-alert' {

  // Interface for notification options
  export interface BellOptions {
    animate?: boolean; // Enable animation (default: false)
    isColored?: boolean; // Use colored background (default: false)
    transitionDuration?: number; // Duration for animations (default: 300ms)
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'; // Position of notification (default: inherited from bellState)
    typeAnimation?: 'fade-in' | 'fade-out' | 'slide-in' | 'slide-out'; // Type of animation (default: 'fade-in')
    timeScreen?: number; // Duration for which notification stays visible (default: 1500ms)
    expand?: boolean; // Enable hover effect to expand content (default: false)
  }

  // Interface for notification text content
  export interface BellText {
    title: string;
    description?: string;
  }

  // Class representing a notification alert
  export class Bell {
    constructor(text: BellText, type: 'info' | 'warning' | 'check' | 'error', options?: BellOptions);

    // Launches and displays the notification
    launch(): void;

    // Handles click event to remove the notification
    removeOnClick(): void;

    // Sets positions for multiple notifications to avoid overlapping
    setPositions(bellNums: HTMLElement[], isRemove?: boolean): void;

    // Removes the notification from the DOM and animates its exit
    removeOfScreen(bells: HTMLElement[]): void;
  }
}

export default Bell;

