import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@backbase/ui-ang/icon';
import { RtcCommunicationService, RtcClientModule } from '@backbase/real-time-communication-journey-ang';

@Component({
  selector: 'bb-chat-panel-nav-menu-item',
  standalone: true,
  imports: [CommonModule, IconModule, RtcClientModule],
  templateUrl: './chat-panel-nav-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPanelNavMenuItemComponent {
  private readonly rtcCommunicationService = inject(RtcCommunicationService);

  toggleChatWindow() {
    this.rtcCommunicationService.toggleChatWindow();
  }
}
