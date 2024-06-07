import '@angular/localize/init';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RtcCommunicationService } from '@backbase/real-time-communication-journey-ang';
import { ChatPanelNavMenuItemComponent } from '@backbase/business/feature/rtc';

describe('ChatPanelNavMenuItemComponent', () => {
  async function setup() {
    const rtcCommunicationServiceSpy = jasmine.createSpyObj(['toggleChatWindow']);
    await TestBed.configureTestingModule({
      imports: [ChatPanelNavMenuItemComponent],
    }).compileComponents();
    TestBed.overrideProvider(RtcCommunicationService, { useValue: rtcCommunicationServiceSpy });
    const component = TestBed.createComponent(ChatPanelNavMenuItemComponent);
    return {
      component,
      rtcCommunicationServiceSpy,
    };
  }

  it('should toggle the chat window when the link is clicked', async () => {
    const { component, rtcCommunicationServiceSpy } = await setup();
    component.debugElement.query(By.css('[data-role="live-chat-nav-menu-item"]')).nativeElement.click();
    expect(rtcCommunicationServiceSpy.toggleChatWindow).toHaveBeenCalled();
  });
});
