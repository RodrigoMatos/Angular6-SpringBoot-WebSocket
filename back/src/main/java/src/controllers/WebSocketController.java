package src.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import src.entity.MessageEntity;
import src.entity.PlayerEntity;

@Controller
public class WebSocketController {

	private final SimpMessagingTemplate template;

	@Autowired
	WebSocketController(SimpMessagingTemplate template) {
		this.template = template;
	}

	// FORMA 1
	@MessageMapping("/send/message/{institutionId}")
	@SendTo("/endpoint/chat/{institutionId}")
	public MessageEntity onReceivedMesage(@DestinationVariable String institutionId, MessageEntity message) {
		message.setData(new Date());
		// this.template.convertAndSend("/endpoint/chat/" + institutionId, message);
		return message;
	}

	// FORMA 2
	@MessageMapping("/send/player/{institutionId}")
	public void onReceivedUsuario(@DestinationVariable String institutionId, PlayerEntity player) {
		this.template.convertAndSend("/endpoint/game/" + institutionId, player);
	}

}
