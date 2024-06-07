import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RtcClientModule } from '@backbase/real-time-communication-journey-ang';

@Component({
  selector: 'bb-chat-panel-container',
  standalone: true,
  imports: [RtcClientModule],
  templateUrl: './chat-panel-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPanelContainerComponent {}
