import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FocusHandlerService {
  public findFirstTabbableElement(element: HTMLElement): HTMLElement {
    return this.findAllTabbableElements(element)[0];
  }

  public findAllTabbableElements(element: HTMLElement): NodeListOf<HTMLElement> {
    return element.querySelectorAll('button, a, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  }

  public skipToContent(event: UIEvent): void {
    event.preventDefault();
    const mainSection = event.view?.window?.document?.querySelector('main') as HTMLElement;
    if (mainSection) {
      this.findFirstTabbableElement(mainSection).focus();
    }
  }

  public handleKeyboardEvent(event: Event): void {
    event.preventDefault();
    const typedEvent = event as KeyboardEvent;
    typedEvent.target?.dispatchEvent(new MouseEvent('click', { bubbles: false, cancelable: true }));
    this.skipToContent(typedEvent);
  }
}
