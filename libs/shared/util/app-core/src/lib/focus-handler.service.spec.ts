import { TestBed } from '@angular/core/testing';
import { FocusHandlerService } from './focus-handler.service';

describe('FocusHandlerService', () => {
  let service: FocusHandlerService;
  const event = {
    preventDefault: () => null,
    view: {
      window: {
        document: {
          querySelector: () => {
            return {
              focus: () => null,
            };
          },
        },
      },
    },
  } as unknown as UIEvent;
  let mainSection: HTMLElement;
  let buttonElement: HTMLElement;
  let inputElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusHandlerService);

    mainSection = document.createElement('main');
    document.body.appendChild(mainSection);

    buttonElement = document.createElement('button');
    mainSection.appendChild(buttonElement);

    inputElement = document.createElement('input');
    mainSection.appendChild(inputElement);
  });

  it('should return first tabbable element', () => {
    const spanElement = document.createElement('span');
    mainSection.appendChild(spanElement);

    spyOn(event.view.window.document, 'querySelector').and.returnValue(mainSection);

    const firstTabbableElement = service.findFirstTabbableElement(mainSection);
    expect(firstTabbableElement).toBe(buttonElement);
  });

  it('should return list of all tabbable elements', () => {
    const spanElement = document.createElement('span');
    mainSection.appendChild(spanElement);

    spyOn(event.view.window.document, 'querySelector').and.returnValue(mainSection);

    const tabbableElements = service.findAllTabbableElements(mainSection);

    expect(tabbableElements.length).toBe(2);
    expect(tabbableElements).toContain(buttonElement);
    expect(tabbableElements).toContain(inputElement);
    expect(tabbableElements).not.toContain(spanElement);
  });

  it('should focus the 1st element in main element', () => {
    spyOn(event.view.window.document, 'querySelector').and.returnValue(mainSection);
    spyOn(buttonElement, 'focus');

    service.skipToContent(event);
    expect(buttonElement.focus).toHaveBeenCalled();
  });

  it('should handle the spacebar press as regular click event', () => {
    spyOn(service, 'skipToContent');

    service.handleKeyboardEvent(event);
    expect(service.skipToContent).toHaveBeenCalled();
  });
});
